import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import progress from 'rollup-plugin-progress'

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/web-utils.cjs.js',
      name: 'butils'
    },
    {
      format: 'esm',
      file: 'dist/web-utils.esm.js',
      name: 'butils'
    },
    {
      format: 'umd',
      file: 'dist/web-utils.umd.js',
      name: 'butils'
    }
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
    commonjs(),
    terser(),
    progress({
      clearLine: false
    })
  ]
}
