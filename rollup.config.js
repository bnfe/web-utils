import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
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
      format: 'es',
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
    typescript(),
    nodeResolve(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts']
    }),
    commonjs(),
    terser(),
    progress({
      clearLine: false
    })
  ]
}
