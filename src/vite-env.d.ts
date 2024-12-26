/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API_URL: string;
  readonly APP_VERSION: string;
  readonly APP_DEBUG: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export const config = {
  apiUrl: import.meta.env.APP_API_URL || "http://localhost:3000",
  version: import.meta.env.APP_VERSION || "1.0.0",
  debug: import.meta.env.APP_DEBUG || false,
} as const;

export type Config = typeof config;

import { config } from "../config/env";

if (config.debug) {
  console.log("API URL:", config.apiUrl);
}
