
import {Nav} from './Nav'
import HeroImg from '../Assets/Hero-img.webp'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


const Hero = () => {


useGSAP(() => {

  gsap.from(['#header', '#subhead'], {
    y:300,
    opacity:0,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'

  })

},[])


  
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen ' style={{
      backgroundImage: `url(${HeroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
        <Nav/>

        <h1 id='header' className='   ivy font-thin text-white text-8xl md:text-9xl md:w-[500px] w-[300px]  lg:text-[128px] lg:w-[860px] text-center italic'>The World Through My Lens</h1>

        <p id='subhead' className=' subhead inter text-base mt-8 w-[350px] md:text-xl md:w-[600px] capitalize text-center lg:text-2xl lg:w-[860px] text-white font-light'>A visual journey that reflects my passion for storytelling through photography</p>


    </div>
  )
}

export default Hero