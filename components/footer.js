import styles from '@/styles/Components.module.css';

export default function Footer() {
  return (
    <footer>
      <div className="innerWrapper">
        <div className={styles.footerWrapper}>
          <span className={styles.copyright}>Copyright © 2023 Genesis</span>
        </div>
      </div>
    </footer>
  );
}
