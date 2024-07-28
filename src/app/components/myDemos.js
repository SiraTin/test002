"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrambleTextPlugin } from "gsap/all";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function MyDemos() {
  return (
    <section className="third w-full h-full fixed visible" id="myDemos">
      <div className="outer w-full h-full overflow-y-hidden">
        <div className="inner w-full h-full overflow-y-hidden">
          <div className="bg three w-full h-full absolute top-0 flex items-center justify-center bg-cover bg-no-repeat  bg-[url('/assets/images/bg-mydemos.jpg')]">
              <div className="w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
