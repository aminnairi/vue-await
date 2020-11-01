import vue from "rollup-plugin-vue";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";

export default {
    input: "src/index.js",

    plugins: [
        vue(),
        nodeResolve(),
        commonjs(),
        terser()
    ],

    external: ["vue"],

    output: {
        file: "dist/vue-await.js",
        format: "cjs"
    }
}
