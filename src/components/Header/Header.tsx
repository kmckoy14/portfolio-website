import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
        <div className={styles.container}>
            <nav>
                <div className={styles.logo}>Keaton Developer</div>
                <div className={styles.menu}>
                    <a className={styles.nav_items} href="">About</a>
                    <a className={styles.nav_items} href="">Projects</a>
                    <a className={styles.nav_items} href="">Contact</a>
                    <a className={styles.nav_items} href="">GitHub</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
