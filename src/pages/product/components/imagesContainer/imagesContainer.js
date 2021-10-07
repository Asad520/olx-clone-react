import React, { useState } from 'react';
import '../../../../assets/css/images-container-styles.css';
import { LEFT_ARROW, RIGHT_ARROW } from '../../../../utils/constants';

export default function ImagesContainer({ productImages, featured }) {
  const [currentImage, setCurrentImage] = useState(productImages[0]);

  const renderImages = () => {
    return productImages.map((image) => {
      return (
        <button className='small-image'>
          <picture>
            <source type='image/webp' srcset={image} />
            <img
              title='Husky puppies 0'
              src={image}
              alt='Product img icon'
              className='image-icon'
            />
          </picture>
        </button>
      );
    });
  };

  return (
    <div className='images-container'>
      <div className='main-img'>
        {featured && (
          <div className='featured-container'>
            <span className='featured-content'>FEATURED</span>
          </div>
        )}
        <button className='left-arrow'>
          <svg viewBox='0 0 32 32' fill='white'>
            <path d={LEFT_ARROW}></path>
          </svg>
        </button>
        <button className='right-arrow'>
          <svg viewBox='0 0 32 32' fill='white'>
            <path d={RIGHT_ARROW}></path>
          </svg>
        </button>
        <picture>
          <source type='image/webp' srcset={currentImage} />
          <img
            alt='Husky puppies 0'
            title='Husky puppies 0'
            src={currentImage}
            className='big-img'
          />
        </picture>
      </div>

      <div className='more-images-container'>{renderImages()}</div>
    </div>
  );
}
