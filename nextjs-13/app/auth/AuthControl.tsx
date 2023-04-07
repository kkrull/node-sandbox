//Controls to sign in and out with an auth provider
export default function AuthControl(props: AuthControlProps) {
  return (
    <section>
      <button
        disabled={props.status !== 'unauthenticated'}
        onClick={props.onSignIn}>
        {props.prompt || 'Sign in'}
      </button>
      <button
        disabled={props.status !== 'authenticated'}
        onClick={props.onSignOut}>
        Sign out
      </button>
    </section>
  );
}

type AuthControlProps = {
  onSignIn: () => void;
  onSignOut: () => void;
  prompt?: string;
  status: 'unauthenticated' | 'loading' | 'authenticated';
}
