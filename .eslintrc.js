module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'fp', 'simple-import-sort'],
  extends: [
    'standard',
    'plugin:fp/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  ignorePatterns: ['node_modules/'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Overwrite rules specified from the extended configs or add ones
    // Prettier
    'prettier/prettier': 0,
    // Typescript
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    // React
    'jsx-quotes': [1, 'prefer-double'],
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'react/display-name': [0, { ignoreTranspilerName: false }],
    // fp
    'fp/no-mutation': [
      1,
      {
        exceptions: [
          { property: 'getInitialProps' },
          { property: 'current' },
          { property: 'getLayout' },
        ],
      },
    ],
    'fp/no-nil': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-rest-parameters': 'off',
    // import
    'import/no-absolute-path': 0,
    // simple-import-sort
    'simple-import-sort/sort': 1,
    // Misc
    complexity: [1, 5],
    curly: [1, 'multi', 'consistent'],
    'max-lines': [1, { max: 150, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [1, { max: 50, skipBlankLines: true, skipComments: true }],
    'max-depth': [2, 2],
    'max-nested-callbacks': [1, 2],
    'newline-before-return': 1,
    'no-console': [2, { allow: ['error'] }],
    'no-debugger': 2,
    'no-shadow': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    'no-var': 2,
    quotes: [2, 'single', { allowTemplateLiterals: false }],
    'space-before-function-paren': [
      2,
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
  },
}
