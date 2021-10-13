module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': '../src/utils',
          '@core': '../src/core',
          '@repositories': '../src/repositories',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
