import slug from 'slug';

export default function toSlug(string) {
  return slug(string, { lower: true });
}
