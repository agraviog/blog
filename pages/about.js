import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Head>
        <title>Genesis Agravio | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="nofollow" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <main>
        <Nav />
        <Footer />
      </main>
    </>
  );
}
