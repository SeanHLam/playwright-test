import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <Link href="/">Go Back</Link>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
