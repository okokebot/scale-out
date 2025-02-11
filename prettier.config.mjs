/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
};

export default config;
