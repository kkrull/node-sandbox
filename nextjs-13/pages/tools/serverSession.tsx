import { getServerSession, Session } from 'next-auth';
import AuthContext from '@/app/AuthContext';
import Navigation from '@/app/Navigation';
import { authOptions } from '../api/auth/[...nextauth]';

//Shows the current session–if any–available for server-side rendering
export default function ServerSessionPage({ session }: ServerSessionPageProps) {
  return (
    <AuthContext>
      <Navigation />
      <main>
        <h1>Server Session</h1>
        <em>via <code>getServerSession</code></em>
        <dl>
          <dt>Access Token (fragment)</dt>
          <dd>{session.accessToken.slice(0, 8)}...</dd>

          <dt>Expires</dt>
          <dd>{session.expires}</dd>

          <dt>Role</dt>
          <dd>{session.role}</dd>

          <dt>User email</dt>
          <dd>{session.user?.email}</dd>

          <dt>User name</dt>
          <dd>{session.user?.name}</dd>
        </dl>
      </main>
    </AuthContext>
  );
}

type ServerSessionPageProps = {
  session: Session & {
    accessToken: string;
    role: string;
  };
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(
        context.req,
        context.res,
        authOptions
      )
    }
  }
}
