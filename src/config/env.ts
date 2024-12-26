export const config = {
  apiUrl: import.meta.env.APP_API_URL || "http://localhost:3000",
  version: import.meta.env.APP_VERSION || "1.0.0",
  debug: import.meta.env.APP_DEBUG || false,
} as const;

if (config.debug) {
  console.log("API URL:", config.apiUrl);
}
