import { Col, Container, Row } from 'react-bootstrap';
import { POSTS } from '../../../../utils/data';
import Card from './card';

export default function main() {
  const renderCards = (posts) => {
    return posts.map((post) => {
      const { featured, img, descr, price, location, timeStamp, id } = post;
      return (
        <Col md={3} key={id}>
          <Card
            featured={featured}
            img={img}
            descr={descr}
            price={price}
            location={location}
            timeStamp={timeStamp}
            id={id}
          />
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
