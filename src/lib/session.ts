import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { authOptions } from './auth-config';


export async function GetCurrentUserServer() {
    const session = await getServerSession(authOptions);

    const token_https = cookies().get('__Secure-next-auth.session-token')?.value;
    const token_http = cookies().get('next-auth.session-token')?.value;
    const token = token_https ?? token_http;

    const cookieToken = token_https ? `__Secure-next-auth.session-token=${token}` : `next-auth.session-token=${token}`


    return { ...session?.user, token, cookieToken }
}
