import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MainContent = () => {
  const ticketSecRef = useRef(null);
  const voteBoxRef = useRef(null);
  const voteBoxSlideRef1 = useRef(null);
  const voteBoxSlideRef2 = useRef(null);
  const voteBoxSlideRef3 = useRef(null);

  function setPinSpacerZIndex() {
    const pinSpacer = document.querySelector(".vote-box").parentNode;
    gsap.set(pinSpacer, { zIndex: (3000) });
  }

  useEffect(() => {
    // 动画初始化
    gsap.to(ticketSecRef.current, {
        y: 1200,
        scrollTrigger: {
          trigger: ticketSecRef.current, // 使用触发器的引用
          // markers: true,
          start: "top 20%",
          end: "center top",
          scrub: .3,
          onEnter: () => setPinSpacerZIndex(),
          onRefresh: () => setPinSpacerZIndex()
        },
      }
    );
    const voteContent = 
    gsap.to(voteBoxRef.current, {
      scrollTrigger: {
        trigger: voteBoxRef.current, // 使用触发器的引用
        // markers: true,
        start: "top top",
        end: "center top",
        scrub: 1,
        pin: voteBoxRef.current,
      },
    });

    gsap.to(voteBoxSlideRef1.current, {
      scrollTrigger: {
        trigger: voteBoxSlideRef1.current, // 使用触发器的引用
        // markers: true,
        start: "top center",
        end: "bottom 40%",
        scrub: 1,
        onEnter: () => {voteBoxSlideRef1.current.classList.add('active')},
        onLeave: () => {voteBoxSlideRef1.current.classList.remove('active')},
      },
    });

    gsap.to(voteBoxSlideRef2.current, {
      scrollTrigger: {
        trigger: voteBoxSlideRef2.current, // 使用触发器的引用
        markers: true,
        start: "top center",
        end: "bottom 40%",
        scrub: 1,
        onEnter: () => {voteBoxSlideRef1.current.classList.add('active')},
        onLeave: () => {voteBoxSlideRef1.current.classList.remove('active')},
      },
    });

    // gsap.to(voteBoxSlideRef3.current, {
    //   scrollTrigger: {
    //     trigger: voteBoxSlideRef3.current, // 使用触发器的引用
    //     markers: true,
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: 1,
    //     onEnter: () => {voteBoxSlideRef1.current.classList.add('active')},
    //     onLeave: () => {voteBoxSlideRef1.current.classList.remove('active')},
    //   },
    // });
    
  }, []);

  return (
    <section className='inner-top-l'>
      <div className="container position-relative">
        <div className='text-box mx-auto mb-3'>
          <h3 className="h1 text-center text-primary mb-5">喵立翰  <span className="g-h1">Miao Li-Han</span></h3>
          <p className="text-center text-normal mb-5">
            我堅信，藉由<span className='text-primary'>推動更完善的貓咪福利和相關政策</span>，更是間接地投資於台灣的未來。<br />
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。<br />
            透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
            因此，我期望能在立法院內推進這些政策，<span className='text-primary'>確保每一隻貓咪都能得到他們應有的照顧，</span><br />
            同時也為台灣的經濟發展助一臂之力。
          </p>
          <p className='title-sm text-center text-primary'>讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始！</p>
        </div>
        <p className='skew-text before text-center'>VOTE</p>
        <p className='skew-text after text-center'>MAIO</p>
        <div className='ticket-sec' ref={ticketSecRef}>
          <div className="ticket-title position-absolute z-index-2">
            <p className="g-h1 text-primary">
              Maio Li-Han
            </p>
          </div>
          <div className="position-absolute z-index-1 ticket-stamp">
            <svg xmlns="http://www.w3.org/2000/svg" width="188" height="153" viewBox="0 0 188 153" fill="none">
              <path d="M36.7514 93.4621C36.913 104.063 47.9769 108.374 57.4798 109.863C62.576 110.662 64.4699 120.676 65.4178 123.171C66.3953 125.745 78.0725 138.78 90.214 132.12C102.355 125.459 103.267 115.943 103.348 113.362C103.43 110.78 102.198 100.218 107.715 88.2305C113.233 76.2426 93.8337 68.1963 88.7473 68.4941C74.3522 69.3368 64.7467 75.6613 52.8874 76.1681C41.0279 76.6749 36.6145 84.4831 36.7514 93.4621Z" fill="#FFDC9E"/>
              <ellipse cx="16.1564" cy="19.5598" rx="16.1564" ry="19.5598" transform="matrix(1.01019 0.228939 -0.341077 0.900425 84.3906 16.6992)" fill="#FFDC9E"/>
              <ellipse cx="15.1876" cy="16.8445" rx="15.1876" ry="16.8445" transform="matrix(1.01019 0.228939 -0.341077 0.900425 38.3711 35.1538)" fill="#FFDC9E"/>
              <ellipse cx="16.0784" cy="23.1434" rx="16.0784" ry="23.1434" transform="matrix(0.681793 0.666722 -0.819743 0.647041 139.258 36.437)" fill="#FFDC9E"/>
              <ellipse cx="13.9081" cy="17.9634" rx="13.9081" ry="17.9634" transform="matrix(0.316873 0.863353 -1.01804 0.343223 145.715 86.3284)" fill="#FFDC9E"/>
            </svg>
          </div>
          <div className='position-relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="464" height="336" viewBox="0 0 464 336" fill="none">
              <g filter="url(#filter0_d_1136_110)">
                <path d="M457.441 193.879C450.888 189.291 331.942 149.951 272.431 89.3634C212.92 28.7757 107.248 -8.60184 91.8849 2.00749C86.4374 9.78735 0.112674 133.072 0.112674 133.072C88.8263 152.297 142.092 187.462 180.661 220.425C219.23 253.388 274.74 291.793 365.382 325.353C365.382 325.353 453.713 199.204 457.441 193.879Z" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_1136_110" x="0.113281" y="0.213379" width="463.328" height="335.139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="6" dy="10"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.862745 0 0 0 0 0.658824 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1136_110"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1136_110" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className='vote-box' ref={voteBoxRef}>
        <div className="vote-box-content">
          <div className="container h-100">
            <h3 className="title text-center text-secondarytint pt-13 mb-15">
              掌握喵喵最新活動！
            </h3>
            <div className="d-flex px-15">
              <div className="w-50">
                <div className="vote-box-slide-img-block">
                  <div className="vote-box-slide-img active">
                    <img src="../assets/image/OIG_(2)-2-1.png" alt="" className="w-100 h-100 object-cover" />
                  </div>
                  <div className="vote-box-slide-img">
                    <img src="../assets/image/OIG_(2)-2-1(1).png" alt="" className="w-100 h-100 object-cover" />
                  </div>
                  <div className="vote-box-slide-img">
                    <img src="../assets/image/OIG_(2)-2-1(2).png" alt="" className="w-100 h-100 object-cover" />
                  </div>
                </div>
              </div>
              <div className="w-50">
                <div className="vote-box-slide-content d-flex flex-column justify-content-between">
                  <div className='vote-box-slide' ref={voteBoxSlideRef1}>
                    <p className="title-sm text-secondary mb-3">12/26</p>
                    <h5 className='text-secondary text-normal mb-1'>
                      參與台北寵物論壇，爭取貓咪友善環境
                    </h5>
                    <p className='text-light'>
                      炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，<br />
                      決定要全力宣傳「貓咪至上」的理念！<br />
                      我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
                    </p>
                  </div>
                  <div className='vote-box-slide' ref={voteBoxSlideRef2}>
                    <p className="title-sm text-secondary mb-3">12/24</p>
                    <h5 className='text-secondary text-normal mb-1'>
                      掃街模式開啟！帶著你的貓耳，來和我一起走！
                    </h5>
                    <p className='text-light'>
                      街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！<br />
                      這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。
                    </p>
                  </div>
                  <div className='vote-box-slide' ref={voteBoxSlideRef3}>
                    <p className="title-sm text-secondary mb-3">12/20</p>
                    <h5 className='text-secondary text-normal mb-1'>
                      收容所模特兒大比拼！
                    </h5>
                    <p className='text-light'>
                      今天的收容所不再是一片寂靜。<br />
                      為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vote-box-bg">
          <div className='position-absolute start-50 translate-middle-x z-index-5 top-20'>
            <svg xmlns="http://www.w3.org/2000/svg" width="436" height="17" viewBox="0 0 436 17" fill="none">
              <path d="M31.2773 1H407.188L434.099 14.1009C435.053 14.5653 434.722 16 433.661 16H407.188H31.2773H2.65194C1.57477 16 1.25898 14.531 2.241 14.0883L31.2773 1Z" fill="#FBD9A0"/>
              <path d="M31.2773 1H407.188M31.2773 1L2.241 14.0883C1.25898 14.531 1.57477 16 2.65194 16H31.2773M31.2773 1V16M407.188 1L434.099 14.1009C435.053 14.5653 434.722 16 433.661 16H407.188M407.188 1V16M31.2773 16H407.188" stroke="#FFDC9E" stroke-width="2"/>
            </svg>
          </div>
          <div className="position-absolute w-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1168" fill="none" className='w-100'>
              <path d="M0 448C0 315.452 107.952 208 240.5 208H471H1680C1812.55 208 1920 315.452 1920 448V1168H0V448Z" fill="#00A199"/>
              <path d="M340.5 1.00007C311.5 10.1297 258.167 140.333 240.5 208H471C448.667 140.333 361.008 -5.45608 340.5 1.00007Z" fill="#00A199"/>
              <path d="M1579.5 1.00007C1608.5 10.1297 1661.83 140.333 1679.5 208H1449C1471.33 140.333 1558.99 -5.45608 1579.5 1.00007Z" fill="#00A199"/>
            </svg>
          </div>
          <div className="overlay overlay-bottom"></div>
          <div className="overlay overlay-top"></div>
        </div>
      </div>
    </section>
  )
}