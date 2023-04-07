import { headers } from 'next/headers';

import HeaderListing from './HeaderListing';

//https://beta.nextjs.org/docs/upgrade-guide#accessing-request-object
async function getHeaders(): Promise<Headers> {
  return headers();
}

//Shows HTTP headers from the request
export default async function HeadersPage() {
  const headersList = await getHeaders();
  return (
    <div>
      <h1>Headers Page</h1>
      <HeaderListing headersList={headersList} />
    </div>
  )
}
