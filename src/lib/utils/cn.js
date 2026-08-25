// Merges class names, filtering out falsy values.
// Note: does NOT resolve Tailwind class conflicts — use tailwind-merge if needed.

export function cn(...classes) {
  return classes.flat(Infinity).filter(Boolean).join(' ');
}
