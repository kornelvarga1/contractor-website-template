<#
.SYNOPSIS
    Deploy a new contractor client site to Vercel.

.DESCRIPTION
    Assumes src/config/client.<Slug>.ts already exists and is fully filled in.
    Creates the Vercel project, sets VITE_CLIENT, and deploys to production.
    Cleans up .vercel/project.json after deploy so the repo stays in multi-project state.

.PARAMETER Slug
    URL-safe client slug matching the config filename (e.g. "maxsons-technical").
    Must be lowercase alphanumeric + hyphens only.

.EXAMPLE
    .\scripts\deploy-client.ps1 -Slug "maxsons-technical"
    .\scripts\deploy-client.ps1 -Slug "johnsons-plumbing"

.NOTES
    Run from anywhere — the script locates the repo root via its own path.
    Requires Vercel CLI authenticated as kornelvarga1 (run `vercel whoami` to confirm).
#>
param(
    [Parameter(Mandatory = $true)]
    [string]$Slug
)

$ErrorActionPreference = "Stop"
$Scope  = "kornelvarga1s-projects"
$Root   = Split-Path $PSScriptRoot -Parent
$Config = Join-Path $Root "src\config\client.$Slug.ts"
$ProjJson = Join-Path $Root ".vercel\project.json"

# ── Guard rails ────────────────────────────────────────────────────────────────

if ($Slug -notmatch '^[a-z0-9]+(-[a-z0-9]+)*$') {
    Write-Host "ERROR: Slug must be lowercase alphanumeric + hyphens. Got: $Slug" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $Config)) {
    Write-Host "ERROR: Config not found: $Config" -ForegroundColor Red
    Write-Host "       Create src/config/client.$Slug.ts first, then re-run." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Deploying: $Slug" -ForegroundColor Cyan
Write-Host "Config:    src/config/client.$Slug.ts" -ForegroundColor DarkGray
Write-Host ""

Push-Location $Root

try {
    # ── 1. Create Vercel project (idempotent — ok if it already exists) ──────────
    Write-Host "[1/4] Creating Vercel project '$Slug'..." -ForegroundColor Cyan
    $addOut = vercel project add $Slug --scope $Scope 2>&1
    Write-Host "      $addOut" -ForegroundColor DarkGray

    # ── 2. Link working dir to this project ──────────────────────────────────────
    Write-Host "[2/4] Linking and setting env vars..." -ForegroundColor Cyan
    vercel link --project $Slug --scope $Scope --yes 2>&1 | Out-Null

    # Use --value flag (not echo pipe) to avoid CR/LF encoding issues.
    # Use --no-sensitive so vercel env pull shows the value for debugging.
    vercel env add VITE_CLIENT production   --value $Slug --no-sensitive --yes 2>&1 | Out-Null
    vercel env add VITE_CLIENT development  --value $Slug --no-sensitive --yes 2>&1 | Out-Null
    Write-Host "      VITE_CLIENT=$Slug set for production + development." -ForegroundColor DarkGray

    # ── 3. Verify the stored value before building ───────────────────────────────
    $tmpEnv = Join-Path $Root ".env.deploy-verify"
    vercel env pull $tmpEnv --environment production --yes 2>&1 | Out-Null
    $storedVal = (Get-Content $tmpEnv | Where-Object { $_ -match '^VITE_CLIENT=' }) -replace '^VITE_CLIENT="?([^"]*)"?$', '$1'
    Remove-Item $tmpEnv -Force -ErrorAction SilentlyContinue

    if ($storedVal -ne $Slug) {
        Write-Host "ERROR: Stored VITE_CLIENT is '$storedVal', expected '$Slug'." -ForegroundColor Red
        Write-Host "       Something went wrong with env var storage. Aborting." -ForegroundColor Red
        exit 1
    }
    Write-Host "      Verified: VITE_CLIENT=$storedVal" -ForegroundColor Green

    # ── 4. Deploy ─────────────────────────────────────────────────────────────────
    Write-Host "[3/4] Deploying to production (--force skips cache)..." -ForegroundColor Cyan
    vercel deploy --prod --yes --force 2>&1

    # ── 5. Cleanup project.json so repo stays in multi-project state ─────────────
    Write-Host "[4/4] Cleaning up..." -ForegroundColor Cyan
    if (Test-Path $ProjJson) {
        Remove-Item $ProjJson -Force
        Write-Host "      Removed .vercel/project.json" -ForegroundColor DarkGray
    }

} finally {
    Pop-Location
}

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host "  Live URL : https://$Slug.vercel.app" -ForegroundColor Green
Write-Host "  Config   : src/config/client.$Slug.ts" -ForegroundColor DarkGray
Write-Host ""
Write-Host "To redeploy after edits:" -ForegroundColor Yellow
Write-Host "  vercel link --project $Slug --scope $Scope --yes && vercel deploy --prod --yes --force" -ForegroundColor Yellow
Write-Host "  (then remove .vercel\project.json)" -ForegroundColor Yellow
Write-Host ""
