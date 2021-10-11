import '../../assets/css/popular-searches-styles.css';
import {
  POPULAR_SEARCHES,
  SEARCH_BREADCRUMBS,
  SEARCH_PRODUCTS,
} from '../../utils/data';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import PopularSearches from './components/popularSearches';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Col, Container, Row } from 'react-bootstrap';
import SearchFilters from './components/searchFilters';
import SortBar from './components/sortBar';
import SearchItemCard from './components/searchItemCard';

export default function Search() {
  const search = { query: 'iPhone 12 mini', location: 'Pakistan' };

  const renderProducts = () => {
    return SEARCH_PRODUCTS.map((product) => (
      <SearchItemCard key={product.id} product={product} />
    ));
  };

  return (
    <>
      <CategoriesBar />
      <PopularSearches popularSearches={POPULAR_SEARCHES} />
      <Breadcrumbs breadcrumbs={SEARCH_BREADCRUMBS} />
      <div className='container category-heading'>
        {search.query} in {search.location}
      </div>
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
