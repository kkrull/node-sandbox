'use client';

import { useSession } from 'next-auth/react';
import AuthContext from '@/app/AuthContext';
import Navigation from '@/app/Navigation';

//Shows the current session–if any–available in React client code
//TODO KDK: Using standard page layout, but shouldn't it work in app/ too?
//https://next-auth.js.org/configuration/nextjs#in-app-directory
export default function ReactSessionPage() {
  return (
    <AuthContext>
      <Navigation />
      <main>
        <SessionDetails />
      </main>
    </AuthContext>
  );
}

function SessionDetails() {
  const { data: session, status } = useSession();
  return (
    <div>
      <h1>React Session</h1>
      <em>via <code>useSession</code></em>

      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Access Token (fragment)</dt>
        <dd>{session?.accessToken.slice(0, 8)}...</dd>

        <dt>Expires</dt>
        <dd>{session?.expires}</dd>

        <dt>Role</dt>
        <dd>{session?.role}</dd>

        <dt>User email</dt>
        <dd>{session?.user?.email}</dd>

        <dt>User name</dt>
        <dd>{session?.user?.name}</dd>
      </dl>
    </div>
  );
}
