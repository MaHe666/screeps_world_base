// rollup.config.mjs
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/main.ts', // 入口文件路径
    output: {
        file: 'dist/main.js', // 输出文件路径（Screeps将使用此文件）
        format: 'cjs', // CommonJS 格式
    },
    plugins: [
        typescript() // 使用 TypeScript 插件编译代码
    ],
    external: ['lodash'] // 如果您使用了像 lodash 这样的库，请将其列为外部依赖
};
