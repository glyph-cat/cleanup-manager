/* eslint-disable @typescript-eslint/no-require-imports */
const { libraryAuthoring: baseLibraryAuthoring } = require('@glyph-cat/eslint-config/base')
const { recommended: jestRecommended } = require('@glyph-cat/eslint-config/jest')

module.exports = [
  ...baseLibraryAuthoring,
  ...jestRecommended,
  {
    ignores: [
      '*/eslint.config.js',
      'config/rollup.config.js',
    ],
  }
]
