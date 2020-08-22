module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 6,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "no-debugger": 2,
      "linebreak-style": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "off",
      "import/no-cycle": "off",
      "no-console": "off",
      "jsx-a11y/label-has-for": "off",
      "react/jsx-one-expression-per-line": "off",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off",
      "react/state-in-constructor": "off",
      "jsx-a11y/media-has-caption": "off",
      "react/prop-types": "off"
    },
  };
  