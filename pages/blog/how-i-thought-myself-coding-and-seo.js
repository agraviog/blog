import Head from 'next/head';
import styles from '/styles/blogPost.module.css';
import Nav from '../nav';
import Footer from '../footer';
import BlogData from '../blogdata';

export default function blogPost() {
  const blogPost = BlogData.find((post) => post.id === 'blog-001');

  return (
    <>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
              If you're someone who's interested in learning new skills or
              switching careers, then you've probably thought about learning how
              to code or how to optimize websites for search engines. And if
              you're like most people, you might assume that you need to go to
              school or take a course to learn these skills. But that's not
              true! With the right mindset and approach, anyone can teach
              themselves coding and SEO.
            </p>
            <p>
              As someone who taught themselves both of these skills, I'm here to
              tell you that it's possible. And not only is it possible, but it
              can also be incredibly rewarding. Here are a few reasons why you
              should consider teaching yourself coding and SEO:
            </p>
            <ol>
              <li>
                It's a valuable skillset. In today's job market, coding and SEO
                are in high demand. Many companies are looking for individuals
                who can help them improve their websites and online presence. By
                learning these skills, you'll be positioning yourself as a
                valuable asset to potential employers or clients.
              </li>
              <li>
                It's affordable. One of the biggest advantages of teaching
                yourself coding and SEO is that it's much more affordable than
                going to school or taking a course. All you need is a computer
                and an internet connection, and you can access countless
                resources to help you learn.
              </li>
              <li>
                You can work from anywhere. Once you've developed your coding
                and SEO skills, you'll have the flexibility to work from
                anywhere in the world. Whether you want to work from home,
                travel, or live abroad, you'll be able to take your work with
                you.
              </li>
            </ol>
            <p>
              So, how did I teach myself coding and SEO? It wasn't easy, but it
              was definitely worth it. I started by reading books and online
              tutorials, and I practiced every day. I made a lot of mistakes
              along the way, but I learned from them and kept going. Over time,
              I developed my skills and built up my portfolio.
            </p>
            <p>
              If you're interested in teaching yourself coding and SEO, my
              advice to you is to just start. Don't worry about being perfect or
              knowing everything right away. Just start learning, practice every
              day, and be patient. It won't happen overnight, but with time and
              dedication, you can teach yourself anything you set your mind to.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
