import Head from 'next/head';
import styles from '/styles/Blog.module.css';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import BlogData from '/data/blogdata';

export default function blogPost() {
  const blogPost = BlogData.find((post) => post.id === 'blog-001');

  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="nofollow" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <div className="blogHero">
        <Nav />
        <div className="innerWrapper">
          <div className={styles.blogColWrapper}>
            <div className={styles.blogArticleWrapper}>
              <h1 className={styles.blogTitle}>{blogPost.title}</h1>
              <span className={styles.blogDate}>— {blogPost.date}</span>
            </div>
            <div className={styles.blogImageWrapper}>
              <img
                className={styles.blogImage}
                src={blogPost.image}
                alt={blogPost.alt}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="innerWrapper">
        <div className={styles.richText}>
          <p>
            Learning coding and SEO can be valuable, affordable, and offer the
            flexibility to work from anywhere. With the right mindset, anyone
            can teach themselves these skills through online resources,
            practice, and patience. Self-taught individuals can become valuable
            assets to employers or clients, save money compared to formal
            education, and enjoy the freedom to work from any location.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
