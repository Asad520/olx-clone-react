import CarouselCard from './components/carouselCard';
import '../../../../assets/css/ads-carousel-styles.css';

export default function AdsCarousel({ posts }) {
  const renderCarouselItems = () => {
    let carouselItems = [];
    for (let i = 0; i < 4; i += 3) {
      carouselItems.push(
        <div className='carousel-item'>
          <div className='carousel-cards'>
            <CarouselCard post={posts[i + 3]} />
            <CarouselCard post={posts[i + 4]} />
            <CarouselCard post={posts[i + 5]} />
          </div>
        </div>
      );
    }
    return carouselItems;
  };

  return (
    <>
      <div className='product-details-container'>
        <h5 className='fw-bold'>Related Ads</h5>
        <div
          id='carouselExampleControls'
          className='carousel carousel-dark slide'
          data-ride='carousel'
          data-interval='false'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='carousel-cards'>
                <CarouselCard post={posts[0]} />
                <CarouselCard post={posts[1]} />
                <CarouselCard post={posts[2]} />
              </div>
            </div>
            {renderCarouselItems()}
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
