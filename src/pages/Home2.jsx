import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <body className='m-0 p-0'>
        <div>
             
      <Navbar/>
        </div>
    <section>

      <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen cursor-pointer flex items-center justify-center relative ">
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
          <section>
            
      <div className="bg-[url('/BG.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen cursor-pointer flex items-center justify-center relative ">
   <div className=" bg-gradient-to-r from-black/10 to-white/20 backdrop-blur-md hover:backdrop-blur-lg p-6 rounded-2xl max-w-5xl mx-2 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 text-white">
       

       
        <div className='ml-8 '>
    
          <h1 className="text-3xl flex  mb-2.5  md:text-4xl font-bold text-[#BCA14F] leading-tight">
            MERCH   
            <span>

            <div className="h-[1px] mt-9 bg-[#BCA14F] w-2xl " />
            </span>
          </h1>
          <div className='flex items-center justify-self-center flex-wrap gap-14'>

          <div className='flex items-center justify-self-center flex-wrap gap-14'>

            <div className='w-52 h-64 object-cover rounded-xl border-1 border-[#bca14fc5] '>
                <h2 className='text-center md:text-center text-xl flex  mb-2.5  md:text-2xl font-bold text-[#BCA14F] leading-tight'>BRAND 2.0  </h2>
          <img
          src="/merchshowcase.png"
          alt="Lion"

          className=" "
            />
        </div>
          
         
          </div>
        
          <div className='flex items-center justify-self-center flex-wrap gap-14'>

            <div className='w-52 h-64 object-cover rounded-xl border-1 border-[#bca14fc5] '>
                <h2 className='text-center md:text-center text-xl flex  mb-2.5  md:text-2xl font-bold text-[#BCA14F] leading-tight'>BRAND 2.0  </h2>
          <img
          src="/merchshowcase.png"
          alt="Lion"

          className=" "
            />
        </div>
          
         
          </div>
        
          <div className='flex items-center justify-self-center flex-wrap gap-14'>

            <div className='w-52 h-64 object-cover rounded-xl border-1 border-[#bca14fc5] '>
                <h2 className='text-center md:text-center text-xl flex  mb-2.5  md:text-2xl font-bold text-[#BCA14F] leading-tight'>BRAND 2.0  </h2>
          <img
          src="/merchshowcase.png"
          alt="Lion"
          
          className=" "
          />
        </div>
          
         
          </div>
        
         
        </div>
      </div>
          </div>
</div>
          </section>

    </body>
  )
}

export default Home
