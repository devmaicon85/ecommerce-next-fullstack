import { env } from '@/env';
import { GetCurrentUserServer } from './session';

export async function fetchAuthenticated(path: string, init?: RequestInit | undefined) {
  const baseUrl = env.NEXT_PUBLIC_URL_API;
  const url = baseUrl + path;

  const { cookieToken } = await GetCurrentUserServer();

  const headers = {
    'Content-Type': 'application/json',
    Cookie: cookieToken,
    ...init?.headers,
  } as HeadersInit | undefined;

  const options = {
    ...init,
    headers,
  } as RequestInit | undefined;

  return fetch(url, options);
}
