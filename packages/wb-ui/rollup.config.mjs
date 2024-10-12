import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import fs from "fs";
import path from "path";
import { createFilter } from "@rollup/pluginutils";

const production = !process.env.ROLLUP_WATCH;

function onlyChanged() {
  const filter = createFilter("src/**/*.svelte");

  return {
    name: "only-changed",
    buildStart() {
      this.lastBuildTime = Date.now();
    },
    load(id) {
      if (filter(id)) {
        const stats = fs.statSync(id);
        if (stats.mtime < this.lastBuildTime) {
          return { code: "" };
        }
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
      onlyChanged(),
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
