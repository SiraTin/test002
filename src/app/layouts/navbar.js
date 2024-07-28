"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Navbar() {
  const [toggle, setToggle] = useState(null);
  const [scrollValue, setScrollValue] = useState(0);
  const click = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(scrollY);
    });
  });


  //logic is scroll
  const scroll_value = Math.ceil(scrollValue / 100);
  let isScroll;
  if(scroll_value > 0){
    isScroll = true;
  }else{
    isScroll = false;
  }


  return (
    <>
      <header className={`navbar fixed w-full h-auto z-50 duration-500  ${isScroll ? "bg-[rgba(0,0,0,0.5)]" : "bg-transparent"}`} id="navbar">
        <nav className="w-10/12 mx-auto py-6 flex justify-between items-center">
          <div className="">
            <a href="#home" className="text-white font-bodoni-moda text-3xl relative z-50">
              SiraTin
            </a>
          </div>
          <ul className="desktopNav hidden md:flex gap-10 text-white ">
            <li>
              <a href="#home" className="anchor relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:rounded-md after:absolute after:duration-300 hover:after:w-full">Home</a>
            </li>
            <li>
              <a href="#aboutMe" className="anchor relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:rounded-md after:absolute after:duration-300 hover:after:w-full">About me</a>
            </li>
            <li>
              <a href="#myDemos" className="anchor relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:rounded-md after:absolute after:duration-300 hover:after:w-full">My Demos</a>
            </li>
            <li>
              <a href="" className="anchor relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:rounded-md after:absolute after:duration-300 hover:after:w-full">Contact</a>
            </li>
          </ul>

          {/* responsive */}
          <ul className={`absolute z-40 top-0 pt-32 w-full flex h-screen flex-col gap-5 text-center text-white bg-[rgba(0,0,0,0.9)] duration-300 ${toggle ? "right-0" : "right-[-100%]"}`}>
            <li>
              <a href="#home" className="anchor block relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:mt-2 after:duration-300 hover:after:w-full">
                Home
              </a>
              <a href="#aboutMe" className="anchor block mt-4 relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:mt-2 after:duration-300 hover:after:w-full">
                About me
              </a>
            </li>
            <li>
              <a href="#myDemos" className="anchor block relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:mt-2 after:duration-300 hover:after:w-full">
                My Demos
              </a>
            </li>
            <li>
              <a href="" className="anchor block relative after:content-[''] after:block after:bg-white after:w-0 after:h-1 after:mt-2 after:duration-300 hover:after:w-full">
                Contact
              </a>
            </li>
          </ul>

            <div className={`text-white text-lg relative z-50 cursor-pointer md:hidden ${toggle ? "hidden" : "block"}`}>
            <FontAwesomeIcon
            onClick={click}
              icon={faBars}
            />
            </div>

            <div className={`text-white text-lg relative z-50 cursor-pointer ${toggle ? "block" : "hidden"}`}>
            <FontAwesomeIcon
               onClick={click}
              icon={faXmark}
              
            />
            </div>

        </nav>
      </header>
    </>
  );
}
