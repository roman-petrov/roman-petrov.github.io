/** @type {import('stylelint').Config} */
export default {
  defaultSeverity: `warning`,
  extends: [`stylelint-config-standard-scss`, `stylelint-config-recess-order`],
  ignoreFiles: [`.build`, `.jscpd`, `**/dist/**`],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    "order/order": [
      [
        { hasBlock: false, name: `include`, type: `at-rule` },
        { hasBlock: true, name: `include`, type: `at-rule` },
        `declarations`,
      ],
      { unspecified: `ignore` },
    ],
  },
};
