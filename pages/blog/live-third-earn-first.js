import Head from 'next/head';
import styles from '/styles/Blog.module.css';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import BlogData from '/data/blogdata';

export default function blogPost() {
  const blogPost = BlogData.find((post) => post.id === 'blog-002');

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
            "Live third, earn first" is a concept where individuals live in
            developing countries with low living costs while earning a higher
            salary from developed countries through remote work. This approach
            offers benefits such as a comfortable lifestyle, promotion of
            economic growth in developing countries, and fostering collaboration
            between different cultures and nations. Despite challenges like
            unreliable internet connectivity and cultural differences, "live
            third, earn first" is an innovative way to improve quality of life
            and support economic development in the era of remote work.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
