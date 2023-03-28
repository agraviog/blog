import styles from '@/styles/Components.module.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <div className="innerWrapper">
          <div className={styles.navWrapper}>
            <div className={styles.navLogo}>Genesis</div>
            <ul className={styles.navListWrapper}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
