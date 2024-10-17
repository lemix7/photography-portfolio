import  { useState } from 'react'




export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className=" nav">
      
      <div className='nav-container'>

      <div className="navbar">
          <div className="text-white text-4xl font-thin ivy italic capitalize ">Aether</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>

        <div className=" nav-overlay" style={{
          top: navOpen ? '0' : '-100%',
          transitionDelay: navOpen ? '0s' : '0s'
        }}>

        <div id='navigation' className=' flex flex-col gap-8 justify-center items-center'>

          <a className='ivy text-6xl md:text-8xl cursor-pointer  lg:text-9xl capitalize font-thin text-white  hover:scale-105 ease-in-out duration-300 ' href="/">Home</a>
          <a className='ivy text-6xl md:text-8xl cursor-pointer  lg:text-9xl capitalize font-thin text-white  hover:scale-105 ease-in-out duration-300 ' href="/">about</a>
          <a className='ivy text-6xl md:text-8xl cursor-pointer  lg:text-9xl capitalize font-thin text-white  hover:scale-105 ease-in-out duration-300 ' href="/">gallery</a>
          <a className='ivy text-6xl md:text-8xl cursor-pointer  lg:text-9xl capitalize font-thin text-white  italic hover:scale-105 ease-in-out duration-300 ' href="https://www.instagram.com/_2y.t/" target='_blank'>instgram</a>
        
        </div>

        </div>
      </div>
    </div>
  )
}
