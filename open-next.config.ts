import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";
// Import the KV-based cache handler
import kvIncrementalCache from "@opennextjs/cloudflare/kv-cache";

export default defineCloudflareConfig({
  // Use the imported handler instead of 'true'
  incrementalCache: kvIncrementalCache,
});