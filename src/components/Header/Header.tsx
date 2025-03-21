import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
        <div className={styles.container}>
            <nav>
                <a className={styles.logo}>Keaton Developer</a>
                <div className={styles.menu}>
                    <a className={styles.menu_items} href="">About</a>
                    <a className={styles.menu_items} href="">Projects</a>
                    <a className={styles.menu_items} href="">Contact</a>
                    <a className={styles.menu_items} href="">GitHub</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
