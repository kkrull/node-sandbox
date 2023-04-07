import NextAuth, { Account, AuthOptions, Awaitable, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt/types';
import GoogleProvider from 'next-auth/providers/google';

/* Token management */

const roleFromPretendApiCall = process.env.USER_FAKE_ROLE;
console.log(`[next-auth] Users will have role: ${roleFromPretendApiCall}`);

function updateJwt(params: UpdateJwtParams) {
  const { account, token } = params;
  if (!account) {
    console.log('[nextauth::jwt] token unchanged');
    return token;
  }

  //The incoming token always has the basic fields, but profile has a few more (if needed)
  //Is group membership available with a sub-scope of userinfo?
  console.log('[nextauth::jwt] token updated');
  return {
    ...token,
    access_token: account?.access_token,
    role: roleFromPretendApiCall
  };
}

type UpdateJwtParams = {
  account?: Account | null;
  token: JWT;
};

/* Session management */

function updateSession({ session, token }: UpdateSessionParams): Awaitable<Session> {
  console.log('[nextauth::session]');
  return {
    ...session,
    accessToken: token.access_token,
    role: token.role
  };
}

type UpdateSessionParams = {
  session: Session;
  token: JWT;
}

/* Configuration */

console.log(`[next-auth] Using Google Provider { clientId: ${process.env.GOOGLE_CLIENT_ID} }`);
export const authOptions: AuthOptions = {
  //TODO KDK: Try out the service account (the one used by the Rake tasks) to
  //see if it can now make API calls to the Google Admin / Directory API.
  //Call this: https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups#get_all_member_groups
  //Using these claims: https://developers.google.com/admin-sdk/directory/v1/guides/authorizing
  callbacks: {
    jwt: updateJwt,
    session: updateSession
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '<not set>',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '<not set>'
    })
  ]
};

export default NextAuth(authOptions);
