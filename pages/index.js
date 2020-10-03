import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { gsap } from 'gsap'
import {TextPlugin} from "gsap/dist/TextPlugin";
import { useRef, useEffect } from 'react'



export default function Home() {

  //INTRO ANIMATION

    //GSAP Plugins
      gsap.registerPlugin(TextPlugin)
    //
    //Preloader Refs
      let introTopBlock = useRef(null)
      let introTopLoadingBar = useRef(null)
      let introBottomBlock = useRef(null)
      let introBottomLoadingBar = useRef(null)
      let introTopNumberRef = useRef(null)
      let introBottomNumberRef =useRef(null)
    //
    //Top Fold Refs
      let themeButtonRef = useRef(null)
      let nameRef = useRef(null)
      let surnameRef = useRef(null)
      let descriptionRef = useRef(null)
    //

    useEffect( () => {

      //Timeline Inits
        const introTl = gsap.timeline()
        const percentageTl = gsap.timeline()
      //
      //Variables
        const initialLoadSecs = 3
        const initialLoadPerCentSecs = 0.03
      //

      //Intro Timeline
                //Preloader
        introTl .to("body", {duration:0, overflow: "hidden"}, "start")
                .to(introTopLoadingBar, {duration:initialLoadSecs, width: "100vw", ease: "power2.inOut"}, "start")
                .to(introBottomLoadingBar, {duration:initialLoadSecs, width: "100vw", ease: "power2.inOut"}, "start")
                .to(introTopBlock, {duration:2, yPercent: -100, ease: "power2.inOut"}, "stage02")
                .to(introBottomBlock, {duration:2, yPercent: 100, ease: "power2.inOut"}, "stage02")
                .to(introTopBlock, {duration:0, display: "none"}, "stage03")
                .to(introBottomBlock, {duration:0, display: "none"}, "stage03")
                //Top Fold
                // .from(nameRef, {duration:2, y: "-16rem", alpha: 0, rotate: 5.625, ease: "power2.inOut"}, "stage04-=2")
                .from(nameRef, {duration:2, y: "-16rem", alpha: 0, rotate: 5.625, ease: "power2.inOut"}, "stage04-=2")
                .from(surnameRef, {duration:2, y: "28rem", alpha: 0, rotate: 5.625, ease: "power2.inOut"}, "stage04-=2")
                .from(descriptionRef, {duration:2, alpha: 0, ease: "power2.inOut"}, "stage04-=0.5")
                .from(themeButtonRef, {duration:2, scale: 0, ease: "power2.inOut"}, "stage04")
                .to("body", {duration:0, overflow: "visible"}, "stage05-=1")
                .play()
      //

      //Percentage Timeline
        percentageTl.to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                    .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                    .play() 
      //

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
            {/* Ex-Drug Dealer<br/>
            Aspiring Male Pornographic Actor<br/> */}
            <br/>
            <span>Available From: Nov-2020</span><br/>
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
              <div className={styles.workProjectTitle}>Digital Dopamine</div>
            </div>
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Apollo 30</div>
            </div>
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Scranny's House</div>
            </div>
            {/* <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Y.L.D. 666</div>
            </div> */}
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>The Fish & Chip Shop</div>
            </div>
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Three Marks Coffee</div>
            </div>
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Axel Balazsi</div>
            </div>
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Aaron Dormer</div>
            </div>
            <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Anuar Khalifi</div>
            </div>
            {/* <div className={styles.workProject}>
              <div className={styles.workProjectTitle}>Dead Soul Slags</div>
            </div> */}
          </div>

        </div>

      </div>
    </>
  )
}
