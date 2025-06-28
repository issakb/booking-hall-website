import React from 'react';
import styles from '../styles/DemoGallery.module.css';

const images = [
  '/images/close-up.jpg',
  '/images/general-view.jpg',
  '/images/hall3.jpg',
  '/images/hall4.jpg',
];

const DemoGallery: React.FC = () => (
  <div className={styles.gallery}>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Gallery ${index + 1}`} className={styles.image} />
    ))}
  </div>
);

export default DemoGallery;
