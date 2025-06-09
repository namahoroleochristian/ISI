import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <body className='m-0 p-0'>
        <div>
             
      <Navbar/>
        </div>
    
      <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen cursor-pointer flex items-center justify-center relative ">
   <div className="bg-black/10 backdrop-blur-md p-6 rounded-2xl max-w-4xl mx-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-white">
        {/* Lion Image */}
        <img
          src="/INTARE.png"
          alt="Lion"
          className="w-64 h-64 object-cover rounded-xl border-[#5D5F5F] "
        />

        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#BCA14F] leading-tight">
            INTARE <br />
            <span className="text-white font-semibold">SOUNDWAVE Initiatives</span>
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

    </body>
  )
}

export default Home
