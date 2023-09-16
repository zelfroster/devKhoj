import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Devkhoj',
  description: 'A project to see the developers profiles on GitHub',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang='en' className='scroll-smooth'>
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
