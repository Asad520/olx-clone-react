import { CarouselCard } from './components/carouselCard';
import './style.css';
import { propTypes, defaultProps } from './props';
import useAdsCarousel from './controller';

export function AdsCarousel(props) {
  const { renderCarouselItems, posts } = useAdsCarousel(props);

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
                <CarouselCard
                  price={posts[0].price}
                  descr={posts[0].descr}
                  location={posts[0].location}
                  timeStamp={posts[0].timeStamp}
                  img={posts[0].img}
                  id={posts[0].id}
                />
                <CarouselCard
                  price={posts[1].price}
                  descr={posts[1].descr}
                  location={posts[1].location}
                  timeStamp={posts[1].timeStamp}
                  img={posts[1].img}
                  id={posts[1].id}
                />
                <CarouselCard
                  price={posts[2].price}
                  descr={posts[2].descr}
                  location={posts[2].location}
                  timeStamp={posts[2].timeStamp}
                  img={posts[2].img}
                  id={posts[2].id}
                />
              </div>
            </div>
            {renderCarouselItems(posts)}
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

AdsCarousel.propTypes = propTypes;
AdsCarousel.defaultProps = defaultProps;
