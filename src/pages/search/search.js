import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesBar } from '../../components/categoriesBar';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { PopularSearches } from './components/popularSearches';
import { SearchFilters } from './components/searchFilters';
import { SortBar } from './components/sortBar';
import { POPULAR_SEARCHES, SEARCH_BREADCRUMBS, POSTS } from '../../utils/data';
import useSearch from './controller';

export function Search(props) {
  const { query, renderProducts } = useSearch(props);

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
