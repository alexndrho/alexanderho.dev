/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.mdx",
      options: {
        printWidth: 69,
      },
    },
  ],
};
