import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { POPULAR_SEARCHES, SEARCH_BREADCRUMBS, POSTS } from '../../utils/data';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import PopularSearches from './components/popularSearches/popularSearches';
import SearchFilters from './components/searchFilters/searchFilters';
import SortBar from './components/sortBar/sortBar';
import SearchItemCard from './components/searchItemCard/searchItemCard';

export default function Search() {
  const { query } = useParams();

  useEffect(() => {
    document.title = query;
  }, [query]);

  const renderProducts = () => {
    return POSTS.map((product) => {
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
  };

  return (
    <>
      <CategoriesBar />
      <PopularSearches popularSearches={POPULAR_SEARCHES} />
      <Breadcrumbs breadcrumbs={SEARCH_BREADCRUMBS} />
      <div className='container category-heading'>{query} in Pakistan</div>
      <Container className='mt-2'>
        <Row>
          <Col md={3}>
            <SearchFilters />
          </Col>
          <Col md={9}>
            <SortBar />
            {renderProducts()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
