// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ratio-observatory",
  apiKey: process.env.API_KEY,
});
