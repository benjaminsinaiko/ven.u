import slug from 'slug';

export function toSlug(string) {
  return slug(string, { lower: true });
}

export function toPlusSlug(string) {
  return slug(string, { replacement: '+' });
}
