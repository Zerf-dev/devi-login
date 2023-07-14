module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  semi: true,
  importOrder: ['^#(.*)$', '^[./]', '^~(.*)'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require('prettier-plugin-tailwindcss'), require('@trivago/prettier-plugin-sort-imports')]
};
