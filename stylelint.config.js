/** @type {import('stylelint').Config} */
export default {
  defaultSeverity: "warning",
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  ignoreFiles: ["**/dist/**"],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
};
