'use client';
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { FaFigma, FaCode, FaDatabase } from 'react-icons/fa';
import Typewriter from 'typewriter-effect'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});



gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
 

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (y / rect.height) * 20;
    const rotateY = (x / rect.width) * -20;
    
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };
  

  return (
    <div id="home" className='relative h-auto min-h-screen text-white overflow-hidden'>
      {/* SOFT PURPLE OVERLAY (does NOT change base color) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6D4AA8]/10 to-transparent pointer-events-none" />

        {/* Hero Content Section */}
        <div ref={heroRef} className='relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 w-full max-w-7xl mx-auto md:px-12 pt-40 md:pt-40 pb-20'>
            
            {/* Text Content - Left Side */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="leading-tight">
  {/* Smaller intro text */}
  <span className="block text-base sm:text-lg md:text-xl text-gray-300 mb-2 animate-fadeIn">
    Hey, I am
  </span>

  {/* Name (reduced size) */}
  <span
    className="
      block
      text-4xl sm:text-5xl md:text-6xl lg:text-7xl
      font-extrabold
      tracking-tight
      bg-[linear-gradient(135deg,#6D4AA8,#8B6FD6,#B79CED)]
      bg-clip-text
      text-transparent
      animate-nameReveal
    "
  >
    Pulmi Vihansa
  </span>
</h1>




              <h2 className='mt-6 text-xl sm:text-2xl md:text-3xl font-medium flex items-center flex-wrap justify-center md:justify-start gap-2'>
                  I am a 
                  <span className='text-[#826cd2] font-semibold'>
                      <Typewriter options={{
                          strings:[
                              'Full Stack Developer',
                              'UI / UX Designer',
                              'Web Developer'
                
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                      }} />
                  </span> 
              </h2>

              {/* Description */}
              <div className="px-6 sm:px-8 md:px-0 ">
  <p className="
  mt-6 
  text-gray-300 
  text-base sm:text-lg 
  leading-relaxed 
  max-w-xl 
  mx-auto
  text-justify
">
  I’m a dedicated full-stack developer with a strong focus on backend engineering and building scalable,
  high-performance systems. I enjoy crafting modern web applications with clean user experiences,
  using current technologies to deliver reliable and efficient solutions.
</p>

</div>
              {/* Download CV Button */}
<a
  href="/images/Pulmi_CV.pdf" 
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 px-8 py-4 bg-linear-to-r from-purple-900 to-blue-800 hover:from-purple-700 hover:to-blue-700 active:from-purple-700 active:to-blue-700 rounded-full text-white font-semibold text-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-105 active:scale-105"
>
  Download CV
</a>

            </div>

    {/* Image Circle - Right Side */}
<div className="relative group shrink-0">
  <div
    ref={imageRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className="
      relative
      w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]
      rounded-full overflow-hidden
      border-[3px] border-[#8B6FD6]/70
      shadow-[0_0_25px_rgba(139,111,214,0.35)]
      group-hover:border-[#8B6FD6]
      group-hover:shadow-[0_0_40px_rgba(139,111,214,0.6)]
      transition-all duration-300 ease-out
    "
    style={{
      transformStyle: "preserve-3d",
      transition: "transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s",
    }}
  >
    
  <Image
    src="/images/p.jpeg"
    alt="Pulmi Vihansa"
    fill
    priority
    className="object-cover scale-100"
    style={{
      objectPosition: "center 15%", // 👈 moves image DOWN slightly
    }}
  />


  </div>
</div>




        </div>

       
        
            </div>

    )

}

export default Hero