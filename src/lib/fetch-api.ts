import { env } from '@/env';

export async function fetchAPI(path: string, init?: RequestInit | undefined) {
  const baseUrl = env.NEXT_PUBLIC_URL_API;
  const url = baseUrl + path;


  const headers = {
    'Content-Type': 'application/json',
    ...init?.headers,
  } as HeadersInit | undefined;

  const options = {
    ...init,
    headers,
  } as RequestInit | undefined;

  return fetch(url, options);
}
