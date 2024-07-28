"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrambleTextPlugin } from "gsap-trial/all";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function AboutMe() {
  return (
    <section className="second w-full h-full fixed  visible" id="aboutMe">
      <div className="outer w-full h-full overflow-y-hidden">
        <div className="inner w-full h-full overflow-y-hidden">
          <div className="bg one w-full h-full absolute top-0 flex items-center justify-center bg-cover bg-no-repeat bg-[url('/assets/images/city-background-2.jpg')]">
            <div className="w-10/12 mx-auto h-full pt-28 flex flex-col justify-start md:flex-row-reverse md:justify-center md:items-center md:gap-10 ">
              {/* box-right */}
              <div className="w-full h-auto uppercase text-center font-chakra-petch">
                <h2 className="text-4xl md:text-left md:text-5xl md:pb-4" id="scrambleText"></h2>
                <div className="about py-4 text-left">
                  <p>Name: Siraphop Tinthuwanon</p>
                  <p className="py-4">Nickname: Fa</p>
                  <div className="w-full h-full p-4 bg-[rgba(0,0,0,0.7)]">
                    <p className="pb-4 text-lg">Education</p>
                    <p>Degree: Bachelor of Arts </p>
                    <p>Major: Information Studies </p>
                    <p>Faculty: Humanities</p>
                    <p>University: Chiang mai university</p>
                    <p>GPA: 3.01 / 4.0</p>
                  </div>
                </div>
              </div>

              {/* box-left */}
              <div className="description w-full h-auto p-4 font-chakra-petch bg-[rgba(0,0,0,0.7)] md:h-2/2 md:flex md:flex-col md:justify-center ">
                  <h2 className="text-lg font-medium md:text-3xl">Description</h2>
                  <p className="pt-4 md:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
