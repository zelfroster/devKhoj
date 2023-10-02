import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

import ApolloProviderClient from '@/providers/apollo-provider';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Devkhoj',
  description: 'A project to see the developers profiles on GitHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body
        className={`flex min-h-screen w-full flex-col justify-between bg-main text-white ${jetBrainsMono.className}`}
      >
        <ApolloProviderClient>{children}</ApolloProviderClient>
      </body>
    </html>
  );
}
