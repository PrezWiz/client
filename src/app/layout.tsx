import { Toaster } from 'react-hot-toast';
import { Noto_Sans_KR } from 'next/font/google';
import { ErrorHandler } from '@/components/ErrorBoundary';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Providers } from '@/contexts';
import './globals.css';
import { metadataConfig, viewportConfig } from './layout.config';

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = metadataConfig;
export const viewport = viewportConfig;

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className={`${noto_sans_kr.className} flex min-h-screen flex-col bg-background text-primary`}>
        <Providers>
          <Navbar />
          <ErrorHandler>{children}</ErrorHandler>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
