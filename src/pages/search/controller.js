import { useEffect } from 'react';
import { useParams } from 'react-router';
import SearchItemCard from './components/searchItemCard/searchItemCard';

export default function useSearch() {
  const { query } = useParams();

  useEffect(() => {
    document.title = query;
  }, [query]);

  const renderProducts = (posts) =>
    posts.map((product) => {
      const { featured, img, descr, price, location, timeStamp, id } = product;
      return (
        <SearchItemCard
          key={product.id}
          featured={featured}
          img={img}
          descr={descr}
          price={price}
          location={location}
          timeStamp={timeStamp}
          id={id}
        />
      );
    });

  return [query, renderProducts];
}
