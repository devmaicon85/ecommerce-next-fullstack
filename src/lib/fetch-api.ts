import { env } from '@/env';

export function fetchAPI(path: string, init?: RequestInit | undefined) {
  const baseUrl = env.NEXT_PUBLIC_URL_API;
  const url = baseUrl + path;
  console.log("🚀 ~ file: fetch-api.ts:6 ~ fetchAPI ~ url:", url)

  return fetch(url, init);
}
