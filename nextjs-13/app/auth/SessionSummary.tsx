import { Session } from 'next-auth';

import ProfileImage from './ProfileImage';

//Says a little bit about which user–if any–is authenticated
export default function SessionSummary({ session }: SessionSummaryProps) {
  if (!session.user) {
    return (
      <dl>
        <dt>Expires</dt>
        <dd>{session.expires}</dd>
      </dl>
    );
  }

  return (
    <dl>
      <dt>Expires</dt>
      <dd>{session.expires}</dd>

      <dt>Role</dt>
      <dd>{session.role}</dd>

      <dt>User email</dt>
      <dd>{session.user.email || 'N/A'}</dd>

      <dt>User image</dt>
      <dd>
        {session.user.image
          && <ProfileImage imageUrl={session.user.image} />
          || 'N/A'}
      </dd>

      <dt>User name</dt>
      <dd>{session.user.name || 'N/A'}</dd>
    </dl>
  )
}

type SessionSummaryProps = {
  session: Session;
};
