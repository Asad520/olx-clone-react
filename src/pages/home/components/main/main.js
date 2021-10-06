import { Col, Container, Row } from 'react-bootstrap';
import { POSTS } from '../../../../utils/data';
import Card from './card';

export default function main() {
  const renderCard = (posts) => {
    return posts.map((post) => {
      return (
        <Col md={3}>
          <Card post={post} />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row>{renderCard(POSTS)}</Row>
    </Container>
  );
}
