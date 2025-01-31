import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "object",
            "type",
            "index"
          ],
          "newlines-between": "always",
          "pathGroupsExcludedImportTypes": ["builtin"],
          "alphabetize": { "order": "asc", "caseInsensitive": true },
          "pathGroups": [
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "before"
            },
            {
              "pattern": "**.scss",
              "group": "index",
              "position": "before"
            }
          ]
        }
      ]
    }
  }),
];

export default eslintConfig;
