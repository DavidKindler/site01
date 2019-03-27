// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//   },
//   extends: "eslint:recommended",
//   globals: {
//     Atomics: "readonly",
//     SharedArrayBuffer: "readonly",
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: "module",
//   },
//   plugins: ["react"],
//   rules: {},
// }

module.exports = {
  parser: "babel-eslint",
  plugins: ["react"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      modules: true,
    },
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "standard-jsx"],
  // settings: {
  //   react: {
  //     pragma: "h",
  //   },
  // },
  rules: {
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "error",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "react/prop-types": 0,
    "no-console": 1,
    "react/display-name": 1,
    "react/no-deprecated": "warn",
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    "react/no-did-update-set-state": "error",
    "react/react-in-jsx-scope": "error",
  },
}
