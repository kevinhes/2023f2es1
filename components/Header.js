import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from './header/Navbar';
import { SnsNav } from './header/SnsNav';
import { SloganSection } from './header/SloganSection';
import { Cat } from './header/Cat';


gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const slogansBefore = ["打造休閒天堂！推廣寵物休閒與娛樂場所", "打造休閒天堂！推廣寵物休閒與娛樂場所"];
  const slogansMain = ["為毛孩子謀福利！推動寵物醫療保障方案", "為毛孩子謀福利！推動寵物醫療保障方案", "為毛孩子謀福利！推動寵物醫療保障方案"];
  const slogansAfter = ["推廣寵物飼養教育，讓愛更加專業", "推廣寵物飼養教育，讓愛更加專業", "推廣寵物飼養教育，讓愛更加專業"];
  // const sloganRef = useRef(null);
  const bannerRef = useRef(null);
  const sloganBeforeRef = useRef(null);
  const sloganAfterRef = useRef(null);
  const sloganMainRef = useRef(null);

  useEffect(() => {
    // 动画初始化
    const headerAni = gsap.timeline(
      {
        scrollTrigger: {
          trigger: bannerRef.current, // 使用触发器的引用
          // markers: true,
          start: "top top",
          end: "center top",
          scrub: 1,
          pin: bannerRef.current,
        },
      }
    );
    headerAni.to(sloganBeforeRef.current, {
      y: -640,
      duration: 1,
    })
    .to(sloganMainRef.current, { 
      y: -640,
      duration: 3,
    }, '<' )
    headerAni.to(sloganAfterRef.current, { 
      y: -640,
      duration: 6,
    }, '<' );
  }, []);

  return (
    <>
      <header className='position-relative'>
        <div className="banner-header" ref={bannerRef}>
          <div className="container pt-5">
            {/* navbar */}
            <div className="header-navbar">
              <div className='z-index-1 position-relative d-flex justify-content-between w-100'>
                <h1 className='h2 g-font text-primary'>Maio</h1>
                <div className='d-flex align-items-center'>
                  {/* 錨點連結 */}
                  <Navbar />
                  {/* 社群連結 */}
                  <SnsNav/>
                </div>
              </div>
              <div className="header-navbar-bg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-100" height="115" viewBox="0 0 1206 115" fill="none">
                  <g filter="url(#filter0_d_72_216)">
                    <path d="M40 107H1160C1182.09 107 1200 89.0914 1200 67C1200 44.9086 1182.09 27 1160 27H114L103.682 2.67977C102.303 -0.57063 97.6966 -0.570633 96.3177 2.67977L86 27H66.5L57.1516 3.26943C55.83 -0.0854669 51.0931 -0.116364 49.7278 3.221L40 27C17.9086 27 0 44.9086 0 67C0 89.0914 17.9086 107 40 107Z" fill="white"/>
                    <path d="M113.079 27.3905L113.338 28H114H1160C1181.54 28 1199 45.4609 1199 67C1199 88.5391 1181.54 106 1160 106H40C18.4609 106 1 88.5391 1 67C1 45.4609 18.4609 28 40 28H40.6714L40.9255 27.3786L50.6533 3.59964C51.6773 1.09661 55.23 1.11979 56.2212 3.63596L65.5696 27.3665L65.8191 28H66.5H86H86.662L86.9206 27.3905L97.2383 3.07032C98.2725 0.632518 101.728 0.632518 102.762 3.07032L113.079 27.3905Z" stroke="#FFDC9E" strokeWidth="2"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_72_216" x="0" y="0.241943" width="1206" height="114.758" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dx="6" dy="8"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.862745 0 0 0 0 0.658824 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_216"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_216" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            {/* main title */}
            <div className='px-x10 text-primary position-relative z-index-2 d-flex justify-content-between'>
              <h2 className='main-title'>喵的未來</h2>
              <h2 className='main-title'>人的希望</h2>
            </div>
            <div className='position-relative z-index-2 text-center text-primary'>
              <h3 className="h2">
                <span className='me-5'>喵立翰</span>
                <span className='g-h1'>Miao Li-Han</span>
              </h3>
            </div>
          </div>
          <div className="banner-header-bg">
            <img src="../assets/image/HeaderBackground.jpg" alt="banner img" className='full-img' />
            <Cat></Cat>
          </div>
        </div>
        {/* 標語瀑布 */}
        <SloganSection slogans={slogansBefore} className="slogan-before" buttonStyle="btn-normal" ref={sloganBeforeRef} />
        <SloganSection slogans={slogansMain} className="slogan-main" buttonStyle="btn-bright" ref={sloganMainRef} />
        <SloganSection slogans={slogansAfter} className="slogan-after" buttonStyle="btn-light" ref={sloganAfterRef} />
      </header>
    </>
  );
};