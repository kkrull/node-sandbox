'use client';

import { SessionProvider } from 'next-auth/react';

//next-auth adapted to appDir layout
//https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1291898265
export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

type AuthContextProps = {
  children: React.ReactNode;
};
