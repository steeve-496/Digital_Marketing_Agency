import "./about.css";
import { useRef } from "react";
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About(){

  const aboutRef= useRef();
  const abouttextRef = useRef();

  useGSAP(()=> {
    gsap.fromTo(".about-img",{
      y:0,
      width:10,
      opacity:0,
      borderRadius: '50%',
    },{
      y:0,
      opacity:1,
      width:'40%',
      duration: 1.5,
      borderRadius: '10%',
      scrollTrigger: {
        trigger:'.about-img',
        start:'bottom bottom',
        end:'top 20%',
        scrub:true,
        duration:2,
        ease: "power1.inOut",

      }
      }
    )

    gsap.to(aboutRef.current,{
      y:-20,
      repeat:-1,
      yoyo:true,
      duration:1.5,
    })

    gsap.fromTo(abouttextRef.current,{
        x:-20,
        opacity:0,
      },
      {
        x:0,
        opacity:1,
        trigger:".about",
        scrollTrigger:{
          start: 'bottom bottom',
          end:'top 20%',
          scrub: true,
          markers:1,
          duration:1,
        ease: 'power1.inOut',
        }
    })


  },[]);


  return (
    <section className="about-section" id="about">
      <div className="about">
        <div className="about-text" ref={abouttextRef}>
          <h2 className="about-title texts">ABOUT <br /> SYSDEVCODE</h2>
          <p className="about-desc texts">
            We are creative developers that transforms innovative ideas into
            powerful digital experiences. Out team combines artistic vision with
            technical expertise to deliver solutions that captivate and convert
          </p>
        </div>
          <img ref={aboutRef} src="/about-img.png" alt="about-img" className="about-img" />
      </div>
    </section>
  );
}

export default About;