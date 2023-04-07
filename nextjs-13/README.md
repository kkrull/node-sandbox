# Nextjs 13

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Environment

You will need to do two things:

1. Set up a Google OAuth2 client at <https://admin.google.com>
2. Create a local `.env.development.local` file with the following:

```shell
## next-auth

#https://console.cloud.google.com/apis/credentials?project=portal-sandbox-381516
GOOGLE_CLIENT_ID=<google client id>
GOOGLE_CLIENT_SECRET=<google client secret>

#Used to hash tokens, sign/encrypt cookies and generate cryptographic keys
#https://next-auth.js.org/configuration/options#secret
NEXTAUTH_SECRET=<output of `openssl rand -base64 32`>

#Base URL to this app's auth-related routes
#https://next-auth.js.org/getting-started/client#custom-base-path
NEXTAUTH_URL=http://localhost:3000/api/auth

#Pretend this came from an API call: make this 'admin' or 'superadmin'
USER_FAKE_ROLE=admin
```

You'll need to set up a file

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub
repository](https://github.com/vercel/next.js/) - your feedback and
contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel
Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment
documentation](https://nextjs.org/docs/deployment) for more details.
