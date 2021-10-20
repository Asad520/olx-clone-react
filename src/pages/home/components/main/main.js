import { Container, Row } from 'react-bootstrap';
import { POSTS } from '../../../../utils/data';
import useMain from './controller';

export function Main(props) {
  const { renderCards } = useMain(props);
  return (
    <section className='posts'>
      <Container>
        <Row>{renderCards(POSTS)}</Row>
      </Container>
    </section>
  );
}
