import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="m-0 p-0">
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center justify-center relative">
          <div className=" bg-gradient-to-r from-black/10 to-white/20 backdrop-blur-md hover:backdrop-blur-lg p-6 rounded-2xl max-w-4xl mx-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-white">
        {/* Lion Image */}
        <img
          src="/INTARE.png"
          alt="Lion"
          className="w-64 h-64 object-cover rounded-xl border-2 border-[#5d5f5fad] "
        />

        {/* Text Content */}
        <div className='ml-8'>
          <h1 className="text-3xl md:text-4xl font-bold text-[#BCA14F] leading-tight">
            MyBrand <br />
            <span className="text-white font-semibold">MyBrand Initiatives</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-200">
            We provide you high quality services including: shopping, streaming exclusive songs and albums.
            WELCOME to the INTARE SOUNDWAVE Initiatives.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#BCA14F] text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-200">
            Explore more
          </button>
        </div>
      </div>
        </div>
      </section>
 <section>
            
      <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen cursor-pointer flex items-center justify-center relative ">
   <div className=" bg-gradient-to-r from-black/10 to-white/20 backdrop-blur-md hover:backdrop-blur-lg p-6 rounded-2xl min-w-11/12 mx-2 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-white">
       

       
        <div className='ml-8'>
          <h1 className="text-3xl text-center mb-2.5  md:text-4xl font-bold text-[#BCA14F] leading-tight">
            MERCH             
          </h1>
          <img
          src="/merchshowcase.png"
          alt="Lion"
          className="w-52 h-64 object-cover rounded-xl border-1 border-[#bca14fc5] "
        />
         
        </div>
        <div className='ml-4'>
          <h1 className="text-3xl text-center mb-2.5 md:text-4xl font-bold text-[#BCA14F] leading-tight">
            PHONECASE 
            
          </h1>
          <div  className='w-105 h-64 rounded-xl flex border-1 border-[#bca14fc5] '>
                <img
          src="/phonecase.png"
          alt="Lion"
          className="w-30 mx-2.5 h-60 my-2 object-cover rounded-xl   hover:scale-105 hover:border-4 border-[#bca14f]  transition duration-200 "
        />
                <img
          src="/phonecase.png"
          alt="Lion"
          className="w-30 mx-2.5 h-60 my-2 object-cover rounded-xl   hover:scale-105 hover:border-4 border-[#bca14f]  transition duration-200 "
        />
                <img
          src="/phonecase.png"
          alt="Lion"
          className="w-30 mx-2.5 h-60 my-2 object-cover rounded-xl   hover:scale-105 hover:border-4 border-[#bca14f]  transition duration-200  "
        />
          </div>
         
        </div>
         <div className='ml-8'>
          <h1 className="text-3xl text-center mb-2.5  md:text-4xl font-bold text-[#BCA14F] leading-tight">
            AUDIO PLATFORMS             
          </h1>
          <div className='flex items-center justify-self-center'>

          <img
          src="/audiomack.png"
          alt="Lion"
          className="w-64 h-64 object-cover rounded-xl border-1 border-[#bca14fc5] "
          />
          </div>
         
        </div>
      </div>
</div>
          </section>
      {/* Showcase Section */}
      <section>
        <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center justify-center relative px-4">
          <div className="bg-gradient-to-r from-black/10 to-white/20 backdrop-blur-md hover:backdrop-blur-lg p-6 rounded-2xl w-full max-w-6xl text-white">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#BCA14F] leading-tight flex items-center gap-3">
                MERCH
                <div className="flex-grow mt-6  h-[1px] bg-[#BCA14F]" />
              </h1>
            </div>

 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {[1, 2, 3].map((item) => (
    <div
      key={item}
      className="relative w-full h-72 rounded-xl overflow-hidden border border-[#bca14fc5] shadow-md group"
    >
      {/* Brand title inside the card, at the top */}
      <div className=" top-0 left-0 right-0 z-10 p-2 bg-white/5 backdrop-blur-sm">
        <h2 className="text-xl md:text-2xl font-bold text-[#BCA14F] text-center">
          BRAND 2.0
        </h2>
      </div>

      {/* Background image */}
      <img
        src="/merchshowcase.png"
        alt="Merch item"
        className=" inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
      />

      {/* Star rating in lower right */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center space-x-0.5 p-1 rounded-2xl  bg-black/60 backdrop-blur-sm">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.5 12.26.622 8.18l6.435-.94L10 1.5l2.943 5.74 6.435.94-4.878 4.08 1.378 5.83z" />
          </svg>
        ))}
      </div>
    </div>
  ))}
</div>


          </div>
        </div>
      </section>
    <section>
  <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 lg:py-24">
    <div className="bg-gradient-to-r from-black/10 to-white/20 backdrop-blur-md hover:backdrop-blur-lg p-6 rounded-2xl w-full max-w-6xl text-white">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BCA14F] flex items-center gap-3">
          EXCLUSIVE EVENTS
          <span className="flex-grow h-px bg-[#BCA14F] mt-2"></span>
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-white">

        {/* Text Block */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg my-16 sm:text-xl font-semibold text-[#BCA14F]">
            Know you get the opportunity to stream <span className="italic">UMWAMI W’ISHYAMBA_Kenny-k-shot</span><br />
            before it drops on <strong>21/04/2025</strong> and experience the vibes on the king of the jungle’s extraordinary video.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-80 w-px bg-[#BCA14F]"></div>

        {/* Image Block */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-lg sm:text-xl font-bold text-[#BCA14F] text-center mb-4">
            UMWAMI W’ISHYAMBA
          </h2>
          <img
            src="/ishyamba.png"
            alt="Lion"
            className="w-52 sm:w-64 h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Home
