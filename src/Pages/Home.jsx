import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import AboutSection from '../Components/AboutSection'

// import Header from '../Components/Header'
// import "../assets/Styles/bootstrap.min.css";
// import "../assets/Styles/bootstrap-icons.css";
// import '../assets/Styles/templatemo-festava-live.css';



function Home() {
  return (
    <div>
    {/* <Header /> */}
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Footer />
    
    </div>
  )
}

export default Home