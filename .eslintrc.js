module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:@next/next/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 'off',
  },
};
