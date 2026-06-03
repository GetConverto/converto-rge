#!/usr/bin/env node
// Post-build: assemble .vercel/output/ in the Build Output API v3 layout
// that Vercel actually serves. Nitro's vercel preset (3.0 beta) only writes
// config.json with relative pointers to dist/, which 404s once uploaded.

import { cp, mkdir, writeFile, rm, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, ".vercel/output");
const distServer = join(root, "dist/server");
const distClient = join(root, "dist/client");

if (!existsSync(distServer) || !existsSync(distClient)) {
  console.error("[assemble-vercel] dist/server or dist/client missing — run vite build first");
  process.exit(1);
}

const fnDir = join(out, "functions/__server.func");
const staticDir = join(out, "static");

await rm(fnDir, { recursive: true, force: true });
await rm(staticDir, { recursive: true, force: true });
await mkdir(fnDir, { recursive: true });

// Copy the entire server bundle into the function directory
await cp(distServer, fnDir, { recursive: true });

// Vercel Node serverless function config — entrypoint must be index.mjs
await writeFile(
  join(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

// Static assets
await cp(distClient, staticDir, { recursive: true });

// Routing config — serve static files first, fall back to the SSR function
await writeFile(
  join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { src: "/assets/(.*)", headers: { "cache-control": "public, max-age=31536000, immutable" }, continue: true },
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/__server" },
      ],
    },
    null,
    2,
  ),
);

console.log("[assemble-vercel] .vercel/output ready for `vercel deploy --prebuilt`");
