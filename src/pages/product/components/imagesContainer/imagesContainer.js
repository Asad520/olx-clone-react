import './style.css';
import { LEFT_ARROW, RIGHT_ARROW } from '../../../../utils/constants';

export default function ImagesContainer({ productImages, featured, img }) {
  const renderImages = () => {
    return productImages.map((image, index) => {
      return (
        <button className='small-image' key={index}>
          <picture>
            <source type='image/webp' srcSet={image} />
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
          <source type='image/webp' srcSet={img} />
          <img
            alt='Husky puppies 0'
            title='Husky puppies 0'
            src={img}
            className='big-img'
          />
        </picture>
      </div>

      <div className='more-images-container'>{renderImages()}</div>
    </div>
  );
}
