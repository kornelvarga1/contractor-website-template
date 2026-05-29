/**
 * Active client configuration.
 *
 * Each Vercel project sets VITE_CLIENT to its slug (e.g. "bl-plumbing",
 * "dynamic-pro"). Vite replaces import.meta.env.VITE_CLIENT at build time.
 * Add new entries to allClients when a new config file is created.
 *
 * Local dev: set VITE_CLIENT in .env.local, e.g.:
 *   VITE_CLIENT=dynamic-pro
 */
import { client as blPlumbing } from "./client.bl-plumbing";
import { client as dynamicPro } from "./client.dynamic-pro";

const allClients = {
  "bl-plumbing": blPlumbing,
  "dynamic-pro": dynamicPro,
};

type ClientId = keyof typeof allClients;

const clientId = (import.meta.env.VITE_CLIENT || "dynamic-pro") as ClientId;

export const client = allClients[clientId] ?? dynamicPro;
