/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-undef': ['off', 'always'],
    'no-console': ['off', 'always'],
    'max-len': ['off', 'always'],
    'import/extensions': ['off', 'always'],
  },
};
