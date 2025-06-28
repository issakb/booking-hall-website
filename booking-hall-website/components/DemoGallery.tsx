import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from '../styles/DemoGallery.module.css';

const images = [
  '/images/close-up.jpg',
  '/images/general-view.jpg',
  '/images/close-up.jpg',
  '/images/general-view.jpg',
];

const DemoGallery: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isClient) {
    // Render grid on server or nothing to avoid mismatch
    return (
      <div className={styles.galleryGrid}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Gallery ${i + 1}`} className={styles.gridImage} />
        ))}
      </div>
    );
  }

  if (isMobile) {
    // Render carousel on mobile only after client mount
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i + 1}`} className={styles.carouselImage} />
          ))}
        </Slider>
      </div>
    );
  }

  // Desktop grid on client
  return (
    <div className={styles.galleryGrid}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Gallery ${i + 1}`} className={styles.gridImage} />
      ))}
    </div>
  );
};

export default DemoGallery;