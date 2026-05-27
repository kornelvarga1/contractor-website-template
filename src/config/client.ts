/**
 * Active client configuration.
 *
 * Re-export whichever config is active. When a prospect replies:
 *   1. Open client.plumber.ts
 *   2. Update companyName, companyNameFull, logoMain, phone/phoneTel, address, areas, geo
 *   3. Save → push → Vercel deploys automatically
 *
 * To switch trade: change the import below.
 *   Plumber:  export { client } from "./client.plumber";
 *   Roofing:  export { client } from "./client.roofing";
 */
export { client } from "./client.plumber";
