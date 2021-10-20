import { Col } from 'react-bootstrap';
import Card from './card';

export default function useMain(props) {
  const renderCards = (posts) =>
    posts.map((post) => {
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

  return { ...props, renderCards };
}
