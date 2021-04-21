---
to: src/components/<%= h.capitalize(name) %>/index.ts
---
export { default } from './<%= h.capitalize(name) %>'
export type { <%= h.capitalize(name) %>Props } from './<%= h.capitalize(name) %>'
