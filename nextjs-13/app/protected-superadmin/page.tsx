'use client';

import { useSession } from 'next-auth/react';

//A page you have to be signed in to see
export default function ProtectedAdminPage() {
  const { data: session } = useSession({ required: true });
  if(!session || !session.role || session.role !== 'superadmin') {
    return (
      <div>
        <h1>Permission Denied</h1>
        <em>Super Admins only</em>
      </div>
    );
  };

  return (
    <div>
      <h1>Protected Page for Super Admins</h1>
      <em>Visible to users with role: <code>superadmin</code>.</em>
    </div>
  );
}
