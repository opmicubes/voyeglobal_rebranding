/**
 * Serialize a map of CSS custom properties into a declaration string
 * for a `:root { ... }` override block.
 * @param {Record<string, string>} vars
 * @returns {string}
 */
export function cssVarsToDeclarations(vars) {
  return Object.entries(vars)
    .map(([key, value]) => `${key}:${value};`)
    .join('');
}
