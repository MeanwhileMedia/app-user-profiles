import type { Metadata } from 'next'
import { AppStateContextProvider } from '../UsersIndex.appStateContext';
import UsersCarouselIndex from './UsersCarouselIndex';

const siteTitle = 'All App Users and Stats';
const siteDescription = 'Info and app statistics for all app users.';

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

export default function Index() {
  return (
    <AppStateContextProvider>
      <UsersCarouselIndex />
    </AppStateContextProvider>
  )
}
