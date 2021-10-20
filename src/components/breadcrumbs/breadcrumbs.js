import { Container, Row } from 'react-bootstrap';
import './style.css';
import { propTypes, defaultProps } from './props';
import useBreadcrumbs from './controller';

export function Breadcrumbs(props) {
  const { renderBreadcrumbs } = useBreadcrumbs(props);

  return (
    <section className='breadcrumbs'>
      <Container>
        <Row className='mt-3'>
          <ul className='breadcrumbs-container justify-content-lg-start'>
            {renderBreadcrumbs()}
          </ul>
        </Row>
      </Container>
    </section>
  );
}

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;
