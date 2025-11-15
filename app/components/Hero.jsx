// /components/Hero.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './style/Hero.module.css';
import "./style/hero.css"
import Image from 'next/image';



// Side Label Component with SVG Lines
const SideLabel = ({ text, direction, index }) => {
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 + index * 0.3 });
    
    // Draw line
    tl.fromTo(
      lineRef.current,
      { strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }
    );
    
    // Show arrow
    tl.fromTo(
      arrowRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5 }
    );
    
    // Fade in text
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: direction === 'left' ? -20 : 20 },
      { opacity: 1, x: 0, duration: 0.6 }
    );
  }, [direction, index]);

  const isLeft = direction === 'left';

  return (
    <div className={`${styles.sideLabel} ${isLeft ? styles.sideLabelLeft : styles.sideLabelRight}`}>
      <div className={styles.svgContainer}>
        <svg width="80" height="40" viewBox="0 0 80 40" style={{ overflow: 'visible' }}>
          <path
            ref={lineRef}
            d={isLeft ? "M 0 20 L 60 20 L 70 30" : "M 80 20 L 20 20 L 10 30"}
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="200"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b800ff" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
          </defs>
        </svg>
        <div
          ref={arrowRef}
          className={`${styles.arrowGlow} ${isLeft ? styles.arrowGlowLeft : styles.arrowGlowRight}`}
        />
      </div>
      <p ref={textRef} className={`${styles.sideLabelText} ${isLeft ? styles.sideLabelTextLeft : styles.sideLabelTextRight}`}>
        {text}
      </p>
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const rocketRef = useRef(null);
  const searchRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  // text refs
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // --- LINE ANIMATIONS ---
    tl.fromTo(line1.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2 })
      .fromTo(line2.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2 }, "-=1.0")
      .fromTo(line3.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2 }, "-=0.9")
      .fromTo(line4.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2 }, "-=0.8");

    // --- TEXT ANIMATIONS (start AFTER lines finish) ---
    tl.from(text1.current, { opacity: 0, y: 20, duration: 0.6 }, "+=0.2")
      .from(text2.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(text3.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(text4.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");

  }, []);


  useEffect(() => {
    // Rocket floating animation
    gsap.fromTo(
      rocketRef.current,
      { y: 0, scale: 0.8, opacity: 0 },
      { 
        y: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1.5, 
        delay: 2,
        ease: 'power3.out' 
      }
    );

    gsap.to(rocketRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 3.5
    });

    // Search bar animation
    gsap.fromTo(
      searchRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 3, ease: 'power3.out' }
    );

    // Headline animation
    const words = headlineRef.current.children;
    gsap.fromTo(
      words,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        delay: 3.5,
        ease: 'power3.out' 
      }
    );

    // Subtext animation
    gsap.fromTo(
      subtextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 4.5, ease: 'power2.out' }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        delay: 5,
        ease: 'back.out(1.7)' 
      }
    );
  }, []);

  return (
    <div className={styles.heroContainer}>
      {/* Gradient  overlays */}
         <Image 
        src="/images/hero-mid.webp" 
        alt="Hero section background"
        className='hero-mid'
         fill
        priority
      />

       <Image 
        src="/images/side-blur.webp" 
        alt="Hero section background"
        className='side-blur'
         fill
        priority
      />

       <Image 
        src="/images/top-blur.webp" 
        alt="Hero section background"
        className='top-blur'
         fill
        priority
      />
      



      <div className="abs">
        <div className="abs-left">
          <div className="abs-top">
            <div className="abs-flex">
              <Image 
              src="/images/arrow1.svg" 
              className='arrow1'
              alt='vector'
              fill
              priority
              
            />

            <p ref={text1}>FUTURE-READY <br/> STRATEGIES</p>
            </div>
            <Image 
              ref={line1}
              src="/images/vector1.svg" 
              alt="Hero section background"
              className='vector1'
              fill
              priority
            />
          </div>



             <div className="abs-top abs-bottom">
            <div className="abs-flex">
              <Image 
              src="/images/arrow2.svg" 
              className='arrow2'
              fill
              priority
              alt='vector'
            />

            <p ref={text2}>24/7 CUSTOMER <br/> SUPPORT</p>
            </div>
            <Image 
            ref={line2}
              src="/images/vector1.svg" 
              alt="Hero section background"
              className='vector1'
              fill
      
              priority
            />
          </div>
        </div>


        <div className="abs-right">


            <div className="abs-top">
            <div className="abs-flex abs-flex2">
            <p ref={text3}>OUR RECENT <br/> PROJECTS</p>
              <Image 
              src="/images/Arrow3.svg" 
              className='arrow1'
              fill
              priority
              alt='vector'
            />
            </div>
            <Image 
            ref={line3}
              src="/images/vector2.svg" 
              alt="Hero section background"
              className='vector1 vector2'
              fill
              priority
            />
          </div>



             <div className="abs-top abs-bottom">
            <div className="abs-flex abs-flex2">
               <p ref={text4}>WHAT WE <br/> OFFER</p>
              <Image 
              src="/images/arrow4.svg" 
              className='arrow2 arrow4'
              fill
              priority
              alt='vector'
            />
            </div>
            <Image 
            ref={line4}
              src="/images/vector2.svg" 
              alt="Hero section background"
              className='vector1 vector2'
              fill
              priority
            />
          </div>
        </div>
      </div>

     

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Rocket */}
        <div ref={rocketRef} className={styles.rocketContainer}>
          <div className={styles.rocketWrapper}>
            <div className={styles.rocketInner}>
              <div className={styles.rocket}>
               {/* <video
                src="/images/rocket.mov"
                autoPlay
                muted
                loop
                playsInline
                className="rocket"
              ></video> */}

               <Image 
        src="/images/rocket.gif" 
        alt="Hero section background"
        className='rocket'
         fill
        priority
      />

                <div className={styles.rocketBody}>
                  <div className={styles.rocketBodyInner} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} className={styles.searchBarContainer}>
        <div className="section-container2">
  <div className="blur-box">
    <input
      type="text"
      placeholder="Type here..."
    />
  </div>

  <div className="image-box">
    <p></p>
  </div>
</div>

        </div>

        {/* Headline */}
        <h1 ref={headlineRef} className={styles.headline}>
          <span className={`${styles.headlineWord} ${styles.headlineWord1}`}>
            Where <span className="nasa">INNOVATION</span>
          </span>
          <span className={`${styles.headlineWord} ${styles.headlineWord2}`}>
            Meets <span className="nasa">IMMERSION</span>
          </span>
        </h1>

        {/* Subtext */}
        <p ref={subtextRef} className={styles.subtext}>
          Empowering brands with future-ready solutions in Metaverse development, AI innovation, immersive gaming, and digital transformation that drive engagement, scalability, and growth.
        </p>


          <div className="btn-start gradient-container2">
            <div className='inner-content2'>
           <a href="#" className='link2'>
              Get started
            </a>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;