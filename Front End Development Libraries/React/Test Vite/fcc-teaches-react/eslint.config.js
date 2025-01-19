// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: {...globals.browser, ...globals.node} }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "eslint-plugin-js": pluginJs.configs.recommended,
      "eslint-plugin-react": pluginReact.configs.recommended,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    rules: {
      "no-unused-vars": "warn", // Warn for unused variables
      "react/prop-types": "off", // Disable prop-types check for React
    },
  },
];
