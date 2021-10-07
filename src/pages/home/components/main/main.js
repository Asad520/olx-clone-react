import { Col, Container, Row } from 'react-bootstrap';
import { POSTS } from '../../../../utils/data';
import Card from './card';

export default function main() {
  const renderCards = (posts) => {
    return posts.map((post) => {
      return (
        <Col md={3}>
          <Card post={post} />
        </Col>
      );
    });
  };

  return (
    <section className='posts'>
      <Container>
        <Row>{renderCards(POSTS)}</Row>
      </Container>
    </section>
  );
}
