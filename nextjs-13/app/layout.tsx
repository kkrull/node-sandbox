import { Metadata } from 'next';
import AuthContext from './AuthContext';
import Navigation from './Navigation';

export const metadata: Metadata = {
  description: 'Generated by create-next-app',
  title: 'Next.js 13 Sandbox',
}

//Top-level page that receives the current route's page as children
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <Navigation />
          <main>
            {children}
          </main>
        </AuthContext>
      </body>
    </html>
  )
}

type RootLayoutProps = {
  children: React.ReactNode
};
