module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "no-console": "off",
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
