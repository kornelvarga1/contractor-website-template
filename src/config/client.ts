/**
 * @/config/client — type reference only.
 *
 * At build time, Vite aliases this import directly to the active client's
 * config file (src/config/client.{VITE_CLIENT}.ts), so only that one file
 * is ever bundled. This file is what TypeScript resolves for types.
 *
 * Adding a new client requires NO changes here.
 * Just create src/config/client.{slug}.ts and run scripts/deploy-client.ps1.
 *
 * For local dev: add VITE_CLIENT=your-slug to .env.local
 */
export { client } from "./client.roofing";
