import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const neueMontreal = localFont({
  src: [
    {
      path: '../fonts/PPNeueMontreal-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Medium.woff2',
      weight: '530',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Regular.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueMontreal-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
});

export default function MyApp({Component, pageProps}) {
  return (
    <main className={neueMontreal.className}>
      <Component {...pageProps} />
    </main>
  );
}
