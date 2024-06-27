import React from 'react'
import TlbcGallery from '../Components/TlbcGallery'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

// import Pic1 from '../Components/Images/dance.jpg';
// import Pic2 from '../Components/Images/worship.jpg';
// import Pic3 from '../Components/Images/2016Pic2.jpg';
// import Pic5 from "../Components/Images/2016Pic5.jpg";
// import Pic6 from '../Components/Images/2016Pic3.jpg';
// import Pic7 from '../Components/images/2016Pic4.jpg';



// import '../assets/Styles/templatemo-festava-live.css'
// import "../assets/Styles/bootstrap.min.css";
// import "../assets/Styles/bootstrap-icons.css";
// import "../assets/Styles/old-gallery.css";
// import "../assets/Styles/old-gallery.css";

function Gallery() {
  return (
    <div>
    <Navbar />
    <section className="hero-section" id="section_1">
        <div className="container d-flex justify-content-center align-items-center">
        
            <div className="">
                {/* <div className="col-12 mt-4 mb-5 text-center"> */}
                <div className="b-to-r from-gray-700 via-gray-900 to-black p-4">
           
            <div className="inset-0 bg-black bg-opacity-50"><h2 className=" mb-3 text-6xl"
              style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', color: 'white'}}
            >
            The Lord's Brethren Convocation '24 Gallery
            </h2>
            </div>
            
                </div>
            </div>
        </div>
    </section>
    <TlbcGallery /> 

  
    <Footer />

    
    


    </div>
  )
}

export default Gallery