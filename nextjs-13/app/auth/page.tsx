'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import AuthControl from './AuthControl';
import SessionSummary from './SessionSummary';

//Shows whether the user is authenticated or not
export default function AuthStatusPage() {
  const sessionData = useSession();
  return (
    <div>
      <h1>User Session</h1>
      <section>
        <div>Status:&nbsp;{sessionData.status}</div>
        {sessionData.data && <SessionSummary session={sessionData.data} />}
      </section>

      <AuthControl
        onSignIn={() => signIn('google')}
        onSignOut={signOut}
        prompt={'Sign in with Google'}
        status={sessionData.status}
        />
    </div>
  );
}
