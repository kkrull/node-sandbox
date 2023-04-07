'use client';

import { useSession } from 'next-auth/react';

//A page you have to be signed in to see
export default function ProtectedPage() {
  const sessionData = useSession({ required: true });
  return (
    <div>
      <h1>Protected Page</h1>
      <em>Visible to any user who is signed in.</em>
      <div>Here is where you would put something that's a secret.</div>
    </div>
  );
}
