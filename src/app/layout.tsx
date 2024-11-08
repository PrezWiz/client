import { Toaster } from 'react-hot-toast';
import { Noto_Sans_KR } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { siteConfig } from '@/config/metadata';
import { Providers } from '@/contexts';
import './globals.css';

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-sans',
});

// metadata 객체의 속성들은 <head> 내부의 <meta> 태그로 변환됩니다.
export const metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className={`${noto_sans_kr.className} flex min-h-screen flex-col bg-background text-primary`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
