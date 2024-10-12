import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import fs from "fs";
import { createFilter } from "@rollup/pluginutils";
import path from "path";
import crypto from "crypto";

const production = !process.env.ROLLUP_WATCH;

function onlyChanged() {
  // const filter = createFilter("src/**/*.svelte");
  const fileHashes = new Map();

  return {
    name: "only-changed",
    buildStart() {
      this.lastBuildTime = Date.now();
    },
    load(id) {
      if (path.extname(id) === ".svelte") {
        const content = fs.readFileSync(id, "utf-8");
        const hash = crypto.createHash("md5").update(content).digest("hex");

        if (fileHashes.has(id) && fileHashes.get(id) === hash) {
          return { code: "" };
        }

        fileHashes.set(id, hash);
      }

      return null;
    },
  };
}

function createConfig(name) {
  return {
    input: `src/${name}/index.js`,
    output: {
      format: "iife",
      file: `dist/${name.toLowerCase()}.js`,
      name: name,
    },
    plugins: [
      // onlyChanged(),
      svelte({
        preprocess: sveltePreprocess(),
        compilerOptions: {
          dev: !production,
          customElement: true,
        },
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),
      production && terser(),
    ],
    watch: {
      clearScreen: false,
      include: `src/${name}/**`,
    },
  };
}

export default [
  createConfig("Navigation"),
  createConfig("PrimaryButton"),
  createConfig("SecondaryButton"),
  createConfig("BarChart"),
  createConfig("LineChart"),
  createConfig("BubbleChart"),
  createConfig("List"),
];
