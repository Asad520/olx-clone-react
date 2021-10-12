import '../../assets/css/popular-searches-styles.css';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { POPULAR_SEARCHES, SEARCH_BREADCRUMBS, POSTS } from '../../utils/data';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import PopularSearches from './components/popularSearches';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import SearchFilters from './components/searchFilters';
import SortBar from './components/sortBar';
import SearchItemCard from './components/searchItemCard';
import { useEffect } from 'react';

export default function Search() {
  const { query } = useParams();

  useEffect(() => {
    document.title = query;
  }, [query]);

  const renderProducts = () => {
    return POSTS.map((product) => (
      <SearchItemCard key={product.id} product={product} />
    ));
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
