/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API_URL: string;
  readonly APP_VERSION: string;
  readonly APP_DEBUG: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export type Config = typeof config;

import { config } from "../config/env";
