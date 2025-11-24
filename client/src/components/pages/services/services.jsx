import React, { useEffect, useRef } from "react";
import "./services.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function services({serviceTitle , services = []}) {

  useGSAP(() =>{
    gsap.fromTo(
      ".services-title",{
        opacity :0,
        x:-200,
      },
      {
        opacity:1,
        x:0,
        duration:1,
        scrollTrigger:{
          trigger:".services-title",
          start:"bottom bottom",
          end: 'bottom 60%',
          scrub:true,
          // markers:true,
        }
      }
    )

    const cards = gsap.utils.toArray(".service-cards")
    cards.forEach((card)=>{
      gsap.fromTo(card,{
        y:200,
        opacity:0,
        filter: "blur(5px)",
      },
      {
        y:0,
        opacity:1,
        filter:"blur(0px)",
        scrollTrigger:{
          trigger:card,
          start : 'bottom bottom',
          end : 'top 90%',
          scrub:true,
          duration: 200,
          ease: 'power1.in',
          // markers:true,
        }
      }
    )
    })



  },[]);

  return (
    
    <section id="services" className="services">
      <h2 className="services-title">{serviceTitle}</h2>
      <div className="service-card-container">
        {services.map((service,index)=>
          <div className="service-cards" key={index}>
            <p id="service-index">00{index+1}</p>
            <h2 id="service-title">{service.title}</h2>
            <p id="service-desc">{service.desc}</p>
          </div>  
        )}
      </div>
    </section>
  );
}
