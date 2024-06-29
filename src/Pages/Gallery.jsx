import React from 'react'
import TlbcGallery from '../Components/TlbcGallery'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Gallery() {
  return (
    <div>
    <Navbar />
    <section className="hero-sectio" id="section_1">
        {/* <div className="container d-flex justify-content-center align-items-center">
        
            <div className="">
                <div className="b-to-r from-gray-700 via-gray-900 to-black p-4">
            */}
            <div className="inset-0 bg-black bg-opacity-50"><h2 className=" mb-1 text-6xl text-center"
              style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', color: 'white'}}
            >
            TLBC Gallery
            </h2>
            </div>
    
                {/* </div> */}
            {/* </div> */}
        {/* </div> */}
    
    </section>
    <TlbcGallery /> 

  
    <Footer />

    
    


    </div>
  )
}

export default Gallery