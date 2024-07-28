"use client";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Navbar from "./layouts/navbar";
import HomePage from "./components/homePage";
import AboutMe from "./components/aboutMe";
import { Observer } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import MyDemos from "./components/myDemos";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

export default function Home() {
  useGSAP(() => {
    //content
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });
      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
      currentIndex = index;

          
      //nav background
      let navTl;
      if(currentIndex !== 0){
        navTl = gsap.timeline();
        navTl.to(".navbar", {backgroundColor: "rgba(0,0,0,0.5)", duration: 1})
      }else{
        navTl = gsap.timeline();
        navTl.to(".navbar", {backgroundColor: "rgba(0,0,0,0", duration: 1})
      }

      //nav border
      let border = gsap.utils.toArray(".anchor");
      for(let i = 0; i < border.length; i++){
        if(currentIndex == i){
          border[i].classList.remove("after:w-0")
          border[i].classList.add("after:w-full")
        }else{
          border[i].classList.remove("after:w-full")
          border[i].classList.add("after:w-0")
        }
      }


    //about me
    if(currentIndex == 1){
      let aboutTl = gsap.timeline();
      aboutTl.fromTo("#scrambleText", {opacity: 0}, {
        opacity: 1,
          
        scrambleText: {
          text: "About me",
          chars: " ",
          revealDelay: 0.5,
          speed: 2,
        },
      })
      .fromTo(".about", {opacity:0, y:50}, {opacity:1, y:0, duration: 2})
      .fromTo(".description", {opacity:0, x:-50}, {opacity:1, x:0, duration: 2});
    }
    
    
    }
    Observer.create({
      type: "wheel, touch, pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);


    //navbar
    let anchor = gsap.utils.toArray(".anchor");
    anchor.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetElem = document.querySelector(e.target.getAttribute("href"))
        for (let i = 0; i < sections.length; i++) {
          if (i !== currentIndex) {
            if (targetElem === sections[i]) {
              gotoSection(i, 1);
            }
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full h-full" id="main">
        <div id="controller">
          <HomePage />
          <AboutMe />
          <MyDemos />
        </div>
      </main>
    </>
  );
}
