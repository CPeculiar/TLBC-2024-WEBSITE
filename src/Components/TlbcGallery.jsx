import React, { useState, useEffect } from 'react';
import '../assets/Styles/Gallery.css';


const TlbcGallery = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

  // Dynamically import all images in the 'images' directory
  useEffect(() => {
    const importAllImages = async () => {
      const images = {};
      for (let i = 1; i <= 48; i++) {
        images[`..//assets/Images/image${i}.jpg`] = () => import(`..//assets/Images//image${i}.jpg`);
      }
      const imagePaths = await Promise.all(
        Object.keys(images).map(async (key) => {
          const module = await images[key]();
          return module.default;
        })
      );
      setAllImages(imagePaths);
    };

    importAllImages();
  }, []);

  // Mapping images to their respective sections
  const sections = [
    {
      title: "TLBC 2023",
      theme: "Immortality",
      description: "Reverend Elochukwu tookus on the subject IMMORTALITY and we were blessed. Glory to God.",
      startIndex: 42,
      endIndex: 48,
    },
    {
      title: "TLBC 2022",
      theme: "The City of God",
      description: "Reverend Elochukwu tookus on the subject The City of God and we were blessed. Glory to God..",
      startIndex: 36,
      endIndex: 42,
    },
    {
      title: "TLBC 2021",
      theme: "The Promise",
      description: "Reverend Elochukwu tookus on the subject The Promise and we were blessed. Glory to God..",
      startIndex: 30,
      endIndex: 36,
    },
    {
      title: "TLBC 2020",
      theme: "The Two Men called the Sons of God",
      description: "Reverend Elochukwu tookus on the subject The Two Men called the Sons of God and we were blessed. Glory to God.",
      startIndex: 24,
      endIndex: 30,
    },
    {
      title: "TLBC 2019",
      theme: "ACTS",
      description: "Reverend Elochukwu tookus on the subject ACTS and we were blessed. Glory to God.",
      startIndex: 18,
      endIndex: 24,
    },
    {
      title: "TLBC 2018",
      theme: "The Kingdom, The Power and The Glory",
      description: "Reverend Elochukwu tookus on the subject The Kingdom, The Power and The Glory and we were blessed. Glory to God.",
      startIndex: 12,
      endIndex: 18,
    },
    {
      title: "TLBC 2017",
      theme: "The Great Commission",
      description: "Reverend Elochukwu tookus on the subject The Great Commission and we were blessed. Glory to God.",
      startIndex: 6,
      endIndex: 12,
    },
    {
      title: "TLBC 2016",
      theme: "Presenting the Glorious Church",
      description: "Reverend Elochukwu tookus on the subject Presenting the Glorious Church and we were blessed. Glory to God.",
      startIndex: 0,
      endIndex: 6,
    },
  ];

  const openPreview = (sectionIndex, imageIndex) => {
    setCurrentSection(sectionIndex);
    setCurrentImageIndex(imageIndex);
    setPreviewVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setPreviewVisible(false);
    document.body.style.overflow = 'scroll';
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < sections[currentSection].endIndex - sections[currentSection].startIndex - 1
        ? prevIndex + 1
        : prevIndex
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="image-gallery">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="gallery-section">
          <h3>{section.title}</h3>
          <h4>Theme: <span className="text-danger">{section.theme}</span></h4>
          <p>{section.description}</p>
          <div className="gallery-grid">
            {allImages.slice(section.startIndex, section.endIndex).map((image, imageIndex) => (
              <div key={imageIndex} className="gallery-item" onClick={() => openPreview(sectionIndex, imageIndex)}>
                <img src={image} alt={`${section.title} Image ${imageIndex + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {previewVisible && (
        <div className="preview-overlay" onClick={closePreview}>
          <div className="preview-box" onClick={(e) => e.stopPropagation()}>
            <div className="preview-content">
              <img src={allImages[sections[currentSection].startIndex + currentImageIndex]}
                   alt={`${sections[currentSection].title} Image ${currentImageIndex + 1}`} />
              <div className="preview-info">
                <span>Image {currentImageIndex + 1} of {sections[currentSection].endIndex - sections[currentSection].startIndex}</span>
                <button className="close-btn" onClick={closePreview}>X Close</button>
              </div>
              <button className="nav-btn prev" onClick={prevImage} disabled={currentImageIndex === 0}>&lt;</button>
              <button className="nav-btn next" onClick={nextImage} disabled={currentImageIndex === sections[currentSection].endIndex - sections[currentSection].startIndex - 1}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
