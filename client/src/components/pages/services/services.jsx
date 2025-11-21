import React, { useEffect, useRef } from "react";
import "./services.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function services() {
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


  const cardData =[{
    title :"Strategy & Branding",
    desc : "We help redefine who you are and how the world should precieve you .From brand strategy to identity design, we craft compelling narratives that resonate with your audience and set you apart from the competition." 
  },
  { 
    title:"Marketing Plan Development",
    desc: "Success doesn’t happen by chance; it happens by design. Our team analyzes your market position, audits your competition, and identifies your ideal audience to build a comprehensive blueprint for sustainable growth."
      
  },
  {
    title: "Social Media Management",
    desc: "In today’s digital age, a strong social media presence is non-negotiable. We craft engaging content, manage your platforms, and implement data-driven strategies to grow your online community and drive conversions."
  },
  {
    title: "Digital Solutions",
    desc: "From website development to SEO optimization and email marketing, we provide a full spectrum of digital solutions designed to enhance your online visibility, attract qualified leads, and convert them into loyal customers."
  },
  {
    title:"Content Creation",
    desc: "Content is king, and we’re here to help you rule. From compelling blog posts and articles to captivating video scripts and infographics, we produce high-quality content that educates, entertains, and converts your target audience."
  },
  {
    title : "Business Operations Support",
    desc: "Streamline your workflow and boost efficiency with our operational support services. We help you optimize processes, implement new technologies, and manage projects to ensure your business runs smoothly and effectively."
  }
]

  return (
    
    <section id="services" className="services">
      <h2 className="services-title">SERVICES</h2>
      <div className="service-card-container" >
        {cardData.map((card,index)=>
          <div className="service-cards" key={index}>
            <p id="service-index">00{index+1}</p>
            <h2 id="service-title">{card.title}</h2>
            <p id="service-desc">{card.desc}</p>
          </div>  
        )}
      </div>
    </section>
  );
}
