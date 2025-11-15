// /components/Navbar.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './style/Navbar.module.css';
import "./style/nav.css"
import Image from 'next/image';


const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
           <Image 
                  src="/images/header.webp" 
                  alt="Hero section background"
                  className='header-img'
                   fill
                  priority
                />

           <div className='gradient-container navGroup'>
             <div className='inner-content'>
           <a href="#" className='link'>
              Home
            </a>
            <a href="#" className='link'>
              About US
            </a>
             </div>
          </div>

            <div className='gradient-container navGroup'>
             <div className='inner-content'>
           <a href="#" className='link'>
              OUR SERVICES
            </a>
            <a href="#" className='link'>
              PROJECT
            </a>
             </div>
          </div>
        </div>
        
        <div className={styles.navLinks}>
         
          
           <div className='gradient-container navGroup'>
             <div className='inner-content'>
           <a href="#" className='link'>
              HIRE A TEAM 
            </a>
            <a href="#" className='link'>
              CONTACT US
            </a>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;