import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Tanuja</h3>
        <button className={styles.btn}>Log in</button>
    </div>
  )
}

export default Header