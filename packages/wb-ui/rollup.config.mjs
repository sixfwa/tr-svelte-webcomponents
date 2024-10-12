import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

function createConfig(name) {
  return {
    input: `src/${name}/index.js`,
    output: {
      format: "iife",
      file: `dist/${name.toLowerCase()}.js`,
      name: name,
    },
    plugins: [
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
