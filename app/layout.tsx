import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Library Management System',
  description: 'A comprehensive digital library management system.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
