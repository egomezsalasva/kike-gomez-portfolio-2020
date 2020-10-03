import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { gsap } from 'gsap'
import {TextPlugin} from "gsap/dist/TextPlugin";
import { useRef, useEffect } from 'react'



export default function Home() {

  //INTRO ANIMATION
    gsap.registerPlugin(TextPlugin)

    let introTopBlock = useRef(null)
    let introTopLoadingBar = useRef(null)
    let introBottomBlock = useRef(null)
    let introBottomLoadingBar = useRef(null)
    let introTopNumberRef = useRef(null)
    let introBottomNumberRef =useRef(null)


    let themeButtonRef = useRef(null)
    let nameRef = useRef(null)
    let surnameRef = useRef(null)
    let descriptionRef = useRef(null)
    useEffect( () => {
      const introTl = gsap.timeline()
      const percentageTl = gsap.timeline()
      introTl .to("body", {duration:0, overflow: "hidden"}, "start")
              .to(introTopLoadingBar, {duration:2, width: "100vw", ease: "power2.inOut"}, "start")
              .to(introBottomLoadingBar, {duration:2, width: "100vw", ease: "power2.inOut"}, "start")
              .to(introTopBlock, {duration:2, yPercent: -100, ease: "power2.inOut"}, "stage02")
              .to(introBottomBlock, {duration:2, yPercent: 100, ease: "power2.inOut"}, "stage02")
              .to(introTopBlock, {duration:0, display: "none"}, "stage03")
              .to(introBottomBlock, {duration:0, display: "none"}, "stage03")
              // .from(nameRef, {duration:2, y: "-16rem", alpha: 0, rotate: 5.625, ease: "power2.inOut"}, "stage04-=2")
              .from(nameRef, {duration:2, y: "-16rem", alpha: 0, rotate: 5.625, ease: "power2.inOut"}, "stage04-=2")
              .from(surnameRef, {duration:2, y: "28rem", alpha: 0, rotate: 5.625, ease: "power2.inOut"}, "stage04-=2")
              .from(descriptionRef, {duration:2, alpha: 0, ease: "power2.inOut"}, "stage04-=0.5")
              .from(themeButtonRef, {duration:2, scale: 0, ease: "power2.inOut"}, "stage04")
              .to("body", {duration:0, overflow: "visible"}, "stage05")
              .play()
        
        percentageTl.to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "0", ease: "power2.inOut"}, "-=0.02")
                    .to(introBottomNumberRef, {duration:0.02, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:0.02, text: "9", ease: "power2.inOut"})

      
    }, [])
    
    

  //


  return (
    <>
      <Head>
        <title>Kike Gomez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.topIntro} ref={el => {introTopBlock = el}}>
        <div className={styles.topIntroloadingBar} ref={el => {introTopLoadingBar = el}}></div>
        <div className={styles.topIntroNumber} ref={el => {introTopNumberRef = el}}>0</div>
      </div>
      <div className={styles.bottomIntro} ref={el => {introBottomBlock = el}}>
        <div className={styles.bottomIntroLoadingBar} ref={el => {introBottomLoadingBar = el}}></div>
        <div className={styles.bottomIntroNumber} ref={el => {introBottomNumberRef = el}}>0</div>
      </div>

      <div className={styles.container}>

        <div className={styles.themeButtonShadow}></div>
        <div className={styles.themeButton} ref={el => {themeButtonRef = el}}></div>
        
        
        <div className={styles.row}>
          <div className={styles.nameOuter}>
            <div className={styles.nameInner} ref={el => {nameRef = el}}>Kike</div>
          </div>
          <div className={styles.description} ref={el => {descriptionRef = el}}>
            Digital Designer<br/>
            Front-end Developer<br/>
            Ex-Drug Dealer<br/>
            Aspiring Male Pornographic Actor<br/>
            <br/>
            <span>Available From: NOV-2020</span><br/>
            <span>Barcelona, ES</span><br/>
          </div>
        </div>
        <div className={styles.surnameOuter}>
          <div className={styles.surnameInner} ref={el => {surnameRef = el}}>Gomez</div>
        </div>

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
            <div className={styles.workProject}>
              <p>Dead Soul Slags</p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
