import type { Metadata } from 'next'
import { AppStateContextProvider } from '../UsersIndex.appStateContext';
import UsersSingleIndex from './UsersSingleIndex';

const siteTitle = 'App User Profile';
const siteDescription = 'Info and app statistics for this user.';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: siteTitle,
  description: siteDescription,
  openGraph: {  
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ]
  }
}

export default async function Index({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return (
    <AppStateContextProvider>
      <UsersSingleIndex id={id} />
    </AppStateContextProvider>
  )
}
