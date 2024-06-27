import React from "react";
import Pic1 from './Images/dance.jpg';
import Pic2 from './Images/worship.jpg';
import Pic3 from './Images/2016Pic2.jpg';


// import Pic5 from "images/2016Pic2.jpg";
// import Pic6 from "images/2016Pic3.jpg";
// import Pic7 from "images/2016Pic4.jpg";
// import Pic8 from "images/2016Pic5.jpg";
// import Pic9 from "images/2016Pic6.jpg";

const Header = () => {
  return (
    <div>
      <div className="carousel w-[70%] h-[70%] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Pic1} className="w-full" alt=""/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Pic2} className="w-full" alt=""/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Pic3} className="w-full" alt=""/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Pic1} className="w-full" alt=""/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';import 'swiper/css';




<Swiper
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={10}
slidesPerView={3}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}

className='bg-red-100 h-screen'
>
<SwiperSlide className='bg-red-900 text-white '></SwiperSlide>
<SwiperSlide className='bg-red-900 text-white '><img src={Pic1} /></SwiperSlide>
<SwiperSlide className='bg-red-900 text-white '><img src={Pic2} /></SwiperSlide>
<SwiperSlide className='bg-red-900 text-white '><img src={Pic3} /></SwiperSlide>
{/* <SwiperSlide className='bg-red-900 text-white '><img src={Pic4} /></SwiperSlide> */}
<SwiperSlide className='bg-red-900 text-white '><img src={Pic5} /></SwiperSlide>
<SwiperSlide className='bg-red-900 text-white '><img src={Pic6} /></SwiperSlide>
{/* <SwiperSlide className='bg-red-900 text-white '><img src={Pic7} /></SwiperSlide> */}
...
</Swiper>





    // <header className="site-header">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-12 col-12 d-flex flex-wrap">
    //         <p className="d-flex me-4 mb-0">
    //           <i className="bi-person custom-icon me-2"></i>
    //           <strong className="text-dark">TLBC'24 is almost here</strong>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </header>