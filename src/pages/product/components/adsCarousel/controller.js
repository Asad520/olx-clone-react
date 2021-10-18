import CarouselCard from './components/carouselCard/carouselCard';

const renderCarouselItems = (posts) => {
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

export { renderCarouselItems };
