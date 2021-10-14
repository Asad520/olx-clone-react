import CarouselCard from './components/carouselCard/carouselCard';
import './style.css';
import { propTypes } from './props';

export default function AdsCarousel({ posts }) {
  const renderCarouselItems = () => {
    let carouselItems = [];
    for (let i = 0; i < 4; i += 3) {
      carouselItems.push(
        <div className='carousel-item' key={i}>
          <div className='carousel-cards'>
            <CarouselCard
              price={posts[i + 3].price}
              descr={posts[i + 3].descr}
              location={posts[i + 3].location}
              timeStamp={posts[i + 3].timeStamp}
              img={posts[i + 3].img}
              id={posts[i + 3].id}
            />
            <CarouselCard
              price={posts[i + 4].price}
              descr={posts[i + 4].descr}
              location={posts[i + 4].location}
              timeStamp={posts[i + 4].timeStamp}
              img={posts[i + 4].img}
              id={posts[i + 4].id}
            />
            <CarouselCard
              price={posts[i + 5].price}
              descr={posts[i + 5].descr}
              location={posts[i + 5].location}
              timeStamp={posts[i + 5].timeStamp}
              img={posts[i + 5].img}
              id={posts[i + 5].id}
            />
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

AdsCarousel.propTypes = propTypes;
