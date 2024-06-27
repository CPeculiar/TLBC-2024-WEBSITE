// import React, { useEffect, useState } from "react";

// import "../assets/Styles/Gallery.css"; 
// import "../assets/Styles/old-gallery.css"; 
// import "../assets/Styles/templatemo-festava-live.css";  


import React from "react";
import "../assets/Styles/Gallery.css";

const yearData = [
  {
    year: "2023",
    theme: "Immortality",
    images: [
      "images/dance.jpg",
      "images/worship.jpg",
      "images/testimonies.jpg",
      "images/2016Pic1.jpg",
      "images/2016Pic2.jpg",
      "images/2016Pic3.jpg",
      "images/2016Pic4.jpg",
      "images/2016Pic5.jpg",
      "images/2016Pic6.jpg",
    ],
  },
  {
    year: "2022",
    theme: "Eternity",
    images: [
      "images/dance.jpg",
      "images/worship.jpg",
      "images/testimonies.jpg",
      "images/2016Pic1.jpg",
      "images/2016Pic2.jpg",
      "images/2016Pic3.jpg",
      "images/2016Pic4.jpg",
      "images/2016Pic5.jpg",
      "images/2016Pic6.jpg",
    ],
  },
  {
    year: "2021",
    theme: "Everlasting",
    images: [
      "images/dance.jpg",
      "images/worship.jpg",
      "images/testimonies.jpg",
      "images/2016Pic1.jpg",
      "images/2016Pic2.jpg",
      "images/2016Pic3.jpg",
      "images/2016Pic4.jpg",
      "images/2016Pic5.jpg",
      "images/2016Pic6.jpg",
    ],
  },
  // Add more years and their images here
];

function TlbcGallery() {
  return (
    <div>
      {yearData.map(({ year, theme, images }, yearIndex) => (
        <section className="gallery-section" key={yearIndex}>
          <div className="wrapper">
            <div className="container all-pictures mt-8">
              <h3 className="text-black-500 font-bold text-4xl">TLBC'{year}</h3>
              <h4 className="text-black-500 font-bold text-4xl">
                Theme: <span className="text-danger">{theme}</span>
              </h4>
              <p className="text-dark font-light text-2xl">TLBC 2023 was a great experience for us in TLBC international</p>
              <div className="gallery">
                {images.map((src, index) => (
                  <div className="image" key={index}>
                    <span>
                      <img src={src} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TlbcGallery;















// const images = [
//   "images/testimonies.jpg",
//   "images/2016Pic1.jpg",
// ];

//alternative//

// const yearData = [
// { year: "2023", theme: "Immortality", images: ["images/dance.jpg", "images/worship.jpg", "images/testimonies.jpg", "images/2016Pic1.jpg", "images/2016Pic2.jpg", "images/2016Pic3.jpg", "images/2016Pic4.jpg", "images/2016Pic5.jpg", "images/2016Pic6.jpg"] },
// { year: "2022", theme: "Eternityy", images: ["images/dance.jpg", "images/worship.jpg", "images/testimonies.jpg", "images/2016Pic1.jpg", "images/2016Pic2.jpg", "images/2016Pic3.jpg", "images/2016Pic4.jpg", "images/2016Pic5.jpg", "images/2016Pic6.jpg"] },

// { year: "2023", theme: "Immortality", images },
// { year: "2022", theme: "Eternity", images },
// ];

//alt end//


// function TlbcGallery() {
//   const [currentImgIndex, setCurrentImgIndex] = useState(0);
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [popupStyles, setPopupStyles] = useState({});

 

  //not part//
  // useEffect(() => {
  //   if (isPreviewOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  // }, [isPreviewOpen]);

  //end//

//   const openPreview = (index, images, event) => {
//     setCurrentImgIndex(index);
//     setCurrentImages(images);
//     setIsPreviewOpen(true);

//     const rect = event.target.getBoundingClientRect();
//     setPopupStyles({
//       top: rect.top + window.scrollY,
//       left: rect.left + window.scrollX,
//       width: rect.width,
//       height: rect.height,
//     });
//   };

//   const closePreview = () => {
//     setIsPreviewOpen(false);
//   };

//   const prevImg = () => {
//     setCurrentImgIndex((prev) => (prev === 0 ? prev : prev - 1));
//   };

//   const nextImg = () => {
//     setCurrentImgIndex((prev) =>
//       prev === currentImages.length - 1 ? prev : prev + 1
//     );
//   };

//   return (
//     <div>
//       {yearData.map(({ year, theme, images }, yearIndex) => (
//         <section className="gallery-section" key={yearIndex}>
//           <div className="wrapper">
//             <div className="container all-pictures">
//               <h3>TLBC'{year}</h3>
//               <h4>
//                 Theme: <span className="text-danger">{theme}</span>
//               </h4>
//               <p className="text-dark">Lorem ipsum dolor sit amet...</p>
//               <div className="gallery">
//                 {images.map((src, index) => (
//                   <div
//                     className="image"
//                     key={index}
//                     onClick={(e) => openPreview(index, images, e)}
//                   >
//                     <span>
//                       <img src={src} alt="" />
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
//       {isPreviewOpen && (
//         <div className="preview-box show" style={popupStyles}>
//           <div className="details">
//             <span className="title">
//               Image <p className="current-img">{currentImgIndex + 1}</p> of{" "}
//               <p className="total-img">{currentImages.length}</p>
//             </span>
//             <span className="icon fas fa-times" onClick={closePreview}></span>
//           </div>
//           <div className="image-box">
//             <div
//               className="slide prev"
//               onClick={prevImg}
//               style={{ display: currentImgIndex === 0 ? "none" : "block" }}
//             >
//               <i className="fas fa-angle-left"></i>
//             </div>
//             <div
//               className="slide next"
//               onClick={nextImg}
//               style={{
//                 display:
//                   currentImgIndex === currentImages.length - 1
//                     ? "none"
//                     : "block",
//               }}
//             >
//               <i className="fas fa-angle-right"></i>
//             </div>
//             <img src={currentImages[currentImgIndex]} alt="" />
//           </div>
//         </div>
//       )}
//       {isPreviewOpen && <div className="shadow" onClick={closePreview}></div>}
//     </div>
//   );
// }
// export default TlbcGallery;





























{
  /* Repeat similar sections for TLBC'22 and TLBC'21 if needed */
}

{
  /*  TLBC 2022*/
}
{
  /* <section className="gallery-section">
        <div className="wrapper">
          <div className="container all-pictures">
            <h3>TLBC'22</h3>
            <h4>
              Theme: <span className="text-danger">Immortality</span>
            </h4>
            <p className="text-dark">Lorem ipsum dolor sit amet...</p>
            <div className="gallery">
              {images.map((src, index) => (
                <div
                  className="image"
                  key={index}
                  onClick={() => openPreview(index)}
                >
                  <span>
                    <img src={src} alt="" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPreviewOpen && (
          <div className="preview-box show">
            <div className="details">
              <span className="title">
                Image <p className="current-img">{currentImgIndex + 1}</p> of{" "}
                <p className="total-img">{totalImg}</p>
              </span>
              <span className="icon fas fa-times" onClick={closePreview}></span>
            </div>
            <div className="image-box">
              <div
                className="slide prev"
                onClick={prevImg}
                style={{ display: currentImgIndex === 0 ? "none" : "block" }}
              >
                <i className="fas fa-angle-left"></i>
              </div>
              <div
                className="slide next"
                onClick={nextImg}
                style={{
                  display: currentImgIndex === totalImg - 1 ? "none" : "block",
                }}
              >
                <i className="fas fa-angle-right"></i>
              </div>
              <img src={images[currentImgIndex]} alt="" />
            </div>
          </div>
        )}
        {isPreviewOpen && <div className="shadow" onClick={closePreview}></div>}
      </section> */
}

{
  /* Repeat similar sections for TLBC'22 and TLBC'21 if needed */
}

{
  /*  TLBC 2021*/
}
{
  /* <section className="gallery-section">
        <div className="wrapper">
          <div className="container all-pictures">
            <h3>TLBC'21</h3>
            <h4>
              Theme: <span className="text-danger">Immortality</span>
            </h4>
            <p className="text-dark">Lorem ipsum dolor sit amet...</p>
            <div className="gallery">
              {images.map((src, index) => (
                <div
                  className="image"
                  key={index}
                  onClick={() => openPreview(index)}
                >
                  <span>
                    <img src={src} alt="" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPreviewOpen && (
          <div className="preview-box show">
            <div className="details">
              <span className="title">
                Image <p className="current-img">{currentImgIndex + 1}</p> of{" "}
                <p className="total-img">{totalImg}</p>
              </span>
              <span className="icon fas fa-times" onClick={closePreview}></span>
            </div>
            <div className="image-box">
              <div
                className="slide prev"
                onClick={prevImg}
                style={{ display: currentImgIndex === 0 ? "none" : "block" }}
              >
                <i className="fas fa-angle-left"></i>
              </div>
              <div
                className="slide next"
                onClick={nextImg}
                style={{
                  display: currentImgIndex === totalImg - 1 ? "none" : "block",
                }}
              >
                <i className="fas fa-angle-right"></i>
              </div>
              <img src={images[currentImgIndex]} alt="" />
            </div>
          </div>
        )}
        {isPreviewOpen && <div className="shadow" onClick={closePreview}></div>}
      </section> */
}

{
  /* Repeat similar sections for TLBC'22 and TLBC'21 if needed */
}

{
  /*  TLBC 2020*/
}
{
  /* <section className="gallery-section">
        <div className="wrapper">
          <div className="container all-pictures">
            <h3>TLBC'20</h3>
            <h4>
              Theme: <span className="text-danger">Immortality</span>
            </h4>
            <p className="text-dark">Lorem ipsum dolor sit amet...</p>
            <div className="gallery">
              {images.map((src, index) => (
                <div
                  className="image"
                  key={index}
                  onClick={() => openPreview(index)}
                >
                  <span>
                    <img src={src} alt="" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPreviewOpen && (
          <div className="preview-box show">
            <div className="details">
              <span className="title">
                Image <p className="current-img">{currentImgIndex + 1}</p> of{" "}
                <p className="total-img">{totalImg}</p>
              </span>
              <span className="icon fas fa-times" onClick={closePreview}></span>
            </div>
            <div className="image-box">
              <div
                className="slide prev"
                onClick={prevImg}
                style={{ display: currentImgIndex === 0 ? "none" : "block" }}
              >
                <i className="fas fa-angle-left"></i>
              </div>
              <div
                className="slide next"
                onClick={nextImg}
                style={{
                  display: currentImgIndex === totalImg - 1 ? "none" : "block",
                }}
              >
                <i className="fas fa-angle-right"></i>
              </div>
              <img src={images[currentImgIndex]} alt="" />
            </div>
          </div>
        )}
        {isPreviewOpen && <div className="shadow" onClick={closePreview}></div>}
      </section> */
}

{
  /* Repeat similar sections for TLBC'22 and TLBC'21 if needed */
}

// import React from 'react'

// function TlbcGallery() {
//   return (
// <div>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'23</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'22</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'21</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'20</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'19</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'18</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="2023">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'17</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//     </section>

//     <section class="year-one">
//         <div class="wrapper">
//             <div class="container all-pictures">
//                 <h3>TLBC'16</h3>
//                 <h4>Theme: <span class="text-danger">Immortality</span></h4>
//                 <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
//                     consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
//                     officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
//                     autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
//                     Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
//                     aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
//                 <div class="gallery">
//                     <div class="image"><span><img src="images/dance.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/edward-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/nicholas-green-unsplash-blur.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/pexels-alexander-suhorucov-6457579.jpg" alt="" /></span>
//                     </div>
//                     <div class="image"><span><img src="images/worship.jpg" alt="" /></span></div>
//                     <div class="image"><span><img src="images/testimonies.jpg" alt="" /></span></div>
//                 </div>
//             </div>
//             <div class="preview-box">
//                 <div class="details">
//                     <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
//                     <span class="icon fas fa-times"></span>
//                 </div>
//                 <div class="image-box">
//                     <div class="slide prev"><i class="fas fa-angle-left"></i></div>
//                     <div class="slide next"><i class="fas fa-angle-right"></i></div>
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         <div class="shadow"></div>
//         </div>
//         </section>

//     </div>
//   )
// }

// export default TlbcGallery
