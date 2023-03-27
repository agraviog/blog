import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Genesis Agravio | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Footer />
      </main>
    </>
  );
}
