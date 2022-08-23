const HttpMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Patch: 'PATCH',
} as const;

export type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod]; // 'iOS' | 'Android'
