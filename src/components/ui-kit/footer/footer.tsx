import React from 'react'
import styles from './utils/footer.module.scss'
import { footerConfig } from './utils/footer.interface'

export const footer: React.FC<footerConfig> = () => {
  return (
    <footer className={styles.footer}>
        {/* <section className={}></section>
        <section className={}></section>
        <section className={}></section>
        <section className={}></section> */}
    </footer>
  )
}
