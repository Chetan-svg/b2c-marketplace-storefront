import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// Import the KV-based cache handler
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";

export default defineCloudflareConfig({
  // Use the imported handler instead of 'true'
  incrementalCache: kvIncrementalCache,
});
