import Head from 'next/head';
import styles from '/styles/blogPost.module.css';
import Nav from '../nav';
import Footer from '../footer';
import blogData from '/data/blogdata';

export default function blogPost() {
  const blogPost = blogData.find((post) => post.id === 'blog-002');

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
              The rise of remote work has created opportunities for individuals
              to work from anywhere in the world, and this has led to a shift in
              how we think about the relationship between where we live and
              where we work. For people in developing countries, this shift has
              opened up new possibilities for improving their quality of life.
              In this blog post, we'll explore the concept of "live third, earn
              first" and how it can benefit people in developing countries.
            </p>
            <p>
              The idea of "live third, earn first" is simple: it means living in
              a developing country where the cost of living is low, while
              earning a salary from a developed country where the pay is much
              higher. This is possible because remote work has made it possible
              for people to work for companies from anywhere in the world. As a
              result, people in developing countries can earn a first-world
              salary while living in a third-world country.
            </p>
            <p>
              The benefits of this approach are clear. First, it allows people
              to take advantage of the lower cost of living in developing
              countries. This means that they can live a comfortable life while
              earning a salary that would be considered very high in their home
              country. This can be especially beneficial for people who are just
              starting out in their careers, as they can get a foothold in their
              chosen field while living comfortably.
            </p>
            <p>
              Second, "live third, earn first" can help to promote economic
              development in developing countries. When people earn a higher
              salary, they have more money to spend in their local economy. This
              can help to create new businesses and jobs, which can further
              boost economic growth.
            </p>
            <p>
              Finally, "live third, earn first" can help to bridge the gap
              between developed and developing countries. By allowing people to
              work together across borders, it promotes greater understanding
              and collaboration between different cultures and nations.
            </p>
            <p>
              Of course, there are some challenges to working remotely from a
              developing country. Internet connectivity and infrastructure can
              be less reliable, and there may be cultural differences that can
              make it more difficult to communicate effectively with colleagues
              from different countries. However, with the right support and
              infrastructure, these challenges can be overcome.
            </p>
            <p>
              In conclusion, "live third, earn first" is an innovative approach
              to work that can benefit people in developing countries. It offers
              the possibility of a high salary, a comfortable lifestyle, and the
              opportunity to promote economic growth in their home country. As
              remote work continues to grow in popularity, we can expect to see
              more people around the world taking advantage of this approach to
              work and life.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
