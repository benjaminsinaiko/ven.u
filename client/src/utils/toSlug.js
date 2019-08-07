import slug from 'slug';

export default function toSlug(string) {
  return slug(string, { lower: true });
}

export function toPlusSlug(string) {
  return slug(string, { replacement: '+' });
}
