import Head from 'next/head'
import styles from '../styles/Home.module.scss'



export default function Home() {

  

  return (
    <>

      <div className={styles.topIntro}>
        <div className={styles.topIntroloadingBar}></div>
      </div>
      <div className={styles.bottomIntro}>
        <div className={styles.bottomIntroLoadingBar}></div>
      </div>

      <div className={styles.container}>
        <Head>
          <title>Kike Gomez</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.themeButton}></div>
        <div className={styles.row}>
          <div className={styles.name}>Kike</div>
          <div className={styles.description}>
            Digital Designer<br/>
            Front-end Developer<br/>
            Ex-Drug Dealer<br/>
            Aspiring Male Pornographic Actor<br/>
            <br/>
            <span>Available From: NOV-2020</span><br/>
            <span>Barcelona, ES</span><br/>
          </div>
        </div>
        <div className={styles.surname}>Gomez</div>

        <div className={styles.scroll}>Scroll Down</div>



        <div className={styles.workContainer}>

          <div className={styles.workTitle}>
            <h2>WORK</h2>
          </div>

          <div className={styles.workListContainer}>
            <div className={styles.workProject}>
              <p>Digital Dopamine</p>
            </div>
            <div className={styles.workProject}>
              <p>Apollo 30</p>
            </div>
            <div className={styles.workProject}>
              <p>Scranny's House</p>
            </div>
            <div className={styles.workProject}>
              <p>Y.L.D. 666</p>
            </div>
            <div className={styles.workProject}>
              <p>The Fish & Chip Shop</p>
            </div>
            <div className={styles.workProject}>
              <p>Three Marks Coffee</p>
            </div>
            <div className={styles.workProject}>
              <p>Axel Balazsi</p>
            </div>
            <div className={styles.workProject}>
              <p>Aaron Dormer</p>
            </div>
            <div className={styles.workProject}>
              <p>Anuar Khalifi</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
