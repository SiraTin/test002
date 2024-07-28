"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrambleTextPlugin } from "gsap/all";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function HomePage() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: "#home"
    });
    tl.fromTo(".line", { width: 0 }, { width: "50%", duration: 2 })
      .fromTo(".aka", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .to(".scamble", {
        duration: 3,
        scrambleText: {
          text: "Hi!! My name is Siraphop Tinthuwanon",
          chars: " ",
          revealDelay: 1,
          speed: 1,
        },
      })
      .fromTo(
        ".captions",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 3 }
      )
      .fromTo(".catWalk", { left: 0 }, { left: "90%", duration: 10 })
      .fromTo(".catWalk", { opacity: 1 }, { opacity: 0, duration: 3 })
      .fromTo(".catWalk", { opacity: 0 }, { opacity: 0, left: 0 })
      .fromTo(".catWalk", { opacity: 1 }, { opacity: 1, duration: 2 })
      .scrollTrigger.refresh();
  }, []);

  return (
    <section className="first w-full h-full fixed  visible" id="home">
      <div className="outer w-full h-full overflow-y-hidden">
        <div className="inner w-full h-full overflow-y-hidden">
          <div className="bg one w-full h-full absolute top-0 flex items-center justify-center bg-cover bg-no-repeat  bg-[url('/assets/images/city-background.jpg')]">
          <div className="w-full absolute z-20 h-full bg-[rgba(0,0,0,0.3)]"></div>
            <div className="relative z-30 flex flex-col justify-center w-full h-full text-center text-white font-chakra-petch">
              <h1 className="aka text-6xl font-medium md:text-7xl">SiraTin</h1>
              <div className="relative line mt-4 w-6/12 mx-auto h-2 bg-white rounded-lg">
                <img
                  className="catWalk absolute w-12 top-[-48px] md:w-20 md:top-[-80px]"
                  src="/assets/images/cat.gif"
                />
              </div>
              <div className="scamble uppercase text-xl pt-8 font-medium md:text-2xl"></div>
              <div className="captions w-11/12 mx-auto py-10 text-white">
                <p className="uppercase text-sm md:text-xl">
                  I am a junior font-end developer currently based in Chinag
                  Mai. <br />I am looking for junior front-end developer
                  position.
                </p>
                <div className="animate-bounce">
                  <p className="uppercase pt-16 text-lg md:text-2xl font-medium">
                    Scroll Down
                  </p>
                  <span className="text-xl">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        <div className="homeBG absolute w-full h-full bg-cover bg-no-repeat  z-20 bg-[url('/assets/images/city-background.jpg')]">
            
        </div> */}
    </section>
  );
}
