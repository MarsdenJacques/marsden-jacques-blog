import '../styles/globals.css'
import styles from '../styles/app.module.css'
import linkedin from '../assets/Li-In-Bug.png'
import github from '../assets/GitHub-Mark-120px-plus.png'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return( 
    <div>
      <Head>
        <title>Marsden Jacques</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className = {styles.canvas}>
        <section className = {styles.banner}>
          <h1 className={styles.title}><Link href='/'>Marsden Jacques</Link></h1>
          <div className = {styles.nav}>
            portfolio
            about me
            contact
            blog
          </div>
        </section>
        <Component {...pageProps} />
        <section className = {styles.footer}>
          <div alt='socials' id='socials' className  = {styles.socials}>
            <div className = {styles.socialLink}><a href='https://github.com/MarsdenJacques' target = '_blank'><Image src={github}></Image></a></div>
            <div className = {styles.socialLink}><a href='https://www.linkedin.com/in/marsdenjacques/' target = '_blank'><Image src={linkedin}></Image></a></div>
          </div>
        </section>
      </div>
    </div>)
}

export default MyApp
