import { Col, Container, Row } from 'react-bootstrap';
import { POPULAR_SEARCHES, SEARCH_BREADCRUMBS, POSTS } from '../../utils/data';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import PopularSearches from './components/popularSearches/popularSearches';
import SearchFilters from './components/searchFilters/searchFilters';
import SortBar from './components/sortBar/sortBar';
import useSearch from './controller';

export default function Search() {
  const [query, renderProducts] = useSearch();
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
            {renderProducts(POSTS)}
          </Col>
        </Row>
      </Container>
    </>
  );
}
