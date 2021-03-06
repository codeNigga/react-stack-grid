/* eslint-disable quote-props */
module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "react",
    "babel",
    "flowtype",
    "flowtype-errors"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    // Possible Errors
    "comma-dangle": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "off",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-negated-in-lhs": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-jsdoc": ["error", {
      "prefer": { "return": "return" },
      "requireParamDescription": false,
      "requireReturnDescription": false
    }],
    "valid-typeof": "error",

    // Best Practices
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "eqeqeq": ["error", "allow-null"],
    "no-extend-native": "error",
    "no-loop-func": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "radix": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "yoda": "error",
    "init-declarations": "error",
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-restricted-globals": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",

    // Stylistic Issues
    "array-bracket-spacing": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "_this"],
    "eol-last": "error",
    "func-style": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "max-depth": ["error", 4],
    "max-len": ["error", 120],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 5],
    "max-statements": ["off"],
    "max-statements-per-line": ["error", { max: 2 }],
    "new-parens": "error",
    "newline-before-return": "off",
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { max: 2 }],
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "double"],
    "semi": "error",
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",

    // ES2015
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-imports": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",

    // React
    "react/jsx-uses-vars": "error",
    "react/no-is-mounted": "error",
    "react/prop-types": "warn",
    "react/jsx-curly-spacing": "error",
    "react/no-find-dom-node": "off"
  }
};
