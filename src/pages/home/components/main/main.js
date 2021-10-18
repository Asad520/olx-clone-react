import { Container, Row } from 'react-bootstrap';
import { POSTS } from '../../../../utils/data';
import { renderCards } from './controller';

export default function main() {
  return (
    <section className='posts'>
      <Container>
        <Row>{renderCards(POSTS)}</Row>
      </Container>
    </section>
  );
}
