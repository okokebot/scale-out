import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const config = [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  },
  {
    ignores: [
      "**/next-env.d.ts",
      "**/build/",
      "**/bin/",
      "**/obj/",
      "**/out/",
      "**/.next/",
      "**/wasm/",
    ],
  },
  {
    name: "eslint/recommended",
    rules: js.configs.recommended.rules,
  },
  ...tseslint.configs.recommended,
  {
    name: "react/jsx-runtime",
    plugins: {
      react: reactPlugin,
    },
    rules: reactPlugin.configs["jsx-runtime"].rules,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    name: "react-hooks/recommended",
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    name: "next/core-web-vitals",
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    name: "prettier/config",
    ...eslintConfigPrettier,
  },
  {
    name: "project-custom",
    rules: {
      "@typescript-eslint/no-unused-vars": 1,
    },
  },
];

export default config;
