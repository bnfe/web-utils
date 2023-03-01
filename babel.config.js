module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // corejs: 3,
        // useBuiltIns: 'usage',
        // targets: {
        //   chrome: '58'
        // }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
