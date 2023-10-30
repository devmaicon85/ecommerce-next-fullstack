import { env } from '@/env';
import { headers } from 'next/headers';

export async function fetchAPI(path: string, init?: RequestInit | undefined) {
  const baseUrl = env.NEXT_PUBLIC_URL_API;
  const url = baseUrl + path;

  return fetch(url, { ...init, headers: headers() });
}
