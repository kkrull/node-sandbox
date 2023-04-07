import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/"><h1>Next.js 13 Sandbox</h1></Link>

      <h3>Tools</h3>
      <ul>
        <li><Link href="/auth">Authentication (go here to sign in/out)</Link></li>
        <li><Link href="/tools/headers">HTTP Request Headers</Link></li>
        <li><Link href="/tools/reactSession">React Session</Link></li>
        <li><Link href="/tools/serverSession">Server Session</Link></li>
      </ul>

      <h3>Pages</h3>
      <ul>
        <li><Link href="/public">Public (no authentication required)</Link></li>
        <li><Link href="/protected">Protected (all users)</Link></li>
        <li><Link href="/protected-admin">Protected (admin)</Link></li>
        <li><Link href="/protected-superadmin">Protected (superadmin)</Link></li>
      </ul>

      <em>Next.js will initiate authentication for unauthenticated users, when necessary.</em>
    </nav>
  );
}
