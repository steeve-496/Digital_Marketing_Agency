import "./about.css";
import { useRef } from "react";
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import DecryptedText from '../effects/decryptedText.jsx';

function About(){

  const aboutRef= useRef();


  useGSAP(()=> {


    gsap.fromTo(aboutRef.current,{
      y:0,
      width:'10%',
      opacity:0,
      borderRadius: '50%',
    },{
      y:0,
      opacity:1,
      width:'40%',
      duration: 1.5,
      borderRadius: '5%',
      scrollTrigger: {
        trigger:'.about-img',
        start:'bottom bottom',
        end:'top 20%',
        scrub:true,
        duration:2,
        ease: "power1.inOut"
      }      
    }
    )

    gsap.from(
      ".about-img",{
        y:-20,
        repeat:-1,
        yoyo:true,
        duration:2,
      }
    )


  },[]);


  useGSAP(() =>{

    gsap.fromTo(".about-title",
      {
        y: 100, 
        opacity: 0,
      }
      , {
        y: 0, 
        opacity: 1,
        scrollTrigger:{
          trigger:'.about',
          start:'top 50%',
          end: "top 50%",
          duration:5,
          scrub:true,
          ease: 'power1.in'
        }
      }
    )


    gsap.fromTo(".about-desc",
      {
        x: -100, 
        opacity: 0,
      }
      , {
        x: 0, 
        opacity: 1,
        scrollTrigger:{
          trigger:'.about',
          start:'top 30%',
          end: "bottom bottom",
          delay:1,
          duration:4,
          stagger: 0.1,
          scrub:true,
          ease: 'power1.in'
        }
      }
    )

  },[]);

  return (
    <section className="about-section" id="about">
      <div className="about">
        <div className="about-text">
          <h2 className="about-title">ABOUT <br /> SYSDEVCODE</h2>  
          <div style={{ marginTop: '4rem' }} className="about-desc">

          <DecryptedText  className="about-desc-span"
              text="We are creative developers that transforms innovative ideas into powerful digital experiences. Out team combines artistic vision with technical expertise to deliver solutions that captivate and convert"
              animateOn="view"
              revealDirection="start"
              speed={30}
              maxIterations={6}
          />
          </div>
        </div>        
          <img ref={aboutRef} src="/about-img.png" alt="about-img" className="about-img" />
      </div>
    </section>
  );
}

export default About;