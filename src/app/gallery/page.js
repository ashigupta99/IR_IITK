"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page_style.module.css";

const categorizedImages = {
  Events: [
    "/Images/Image1.jpg",
    "/Images/Image2.jpg",
    "/Images/Image3.jpg",
  ],
  LostItems: [
    "/Images/Image4.jpg",
    "/Images/Image5.jpg",
    "/Images/Image6.jpg",
  ],
  Memories: [
    "/Images/Image7.jpg",
    "/Images/Image8.jpg",
    "/Images/Image9.jpg",
  ],
  Others: [
    "/Images/Image10.jpg",
    "/Images/Image11.jpg",
    "/Images/Image12.jpg",
  ],
};

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.heading}>Gallery edited</h1>

      {Object.entries(categorizedImages).map(([category, images]) => (
        <div key={category}>
          <h2 className={styles.subheading}>{category}</h2>
          <div className={styles.grid}>
            {images.map((src, idx) => (
              <div
                key={idx}
                className={styles.imageCard}
                onClick={() => setSelected(src)}
              >
                <Image
                  src={src}
                  alt={`${category} image ${idx + 1}`}
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalContent}>
            <Image
              src={selected}
              alt="Selected"
              width={1000}
              height={800}
              className={styles.fullImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";
// import styles from "./page_style.module.css";

// export default function TestGallery() {
//   return (
//     <div className={styles.galleryContainer}>
//       <h1 className={styles.heading}>🚀 CSS Test Works!</h1>
//       <p className={styles.subheading}>This is a test of your CSS module.</p>
//       <div className={styles.grid}>
//         <div className={styles.imageCard}>
//           <img
//             src="/Images/Image1.jpg"
//             className={styles.image}
//             alt="Test Image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
