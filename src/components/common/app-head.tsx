import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin']
});

export function AppHead(): JSX.Element {
  return (
    <>
      <Head>
        <link rel='icon' href='/logo.jpg' />
        <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
        <script type="text/javascript" src="/assets/livechat.js"></script>
      </Head>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}
