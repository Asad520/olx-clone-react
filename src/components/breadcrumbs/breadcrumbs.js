import { Container, Row } from 'react-bootstrap';
import '../../assets/css/breadcrumbs-styles.css';

export default function Breadcrumbs({ breadcrumbs }) {
  const renderBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb) => {
      return (
        <li className='breadcrumb-item' key={breadcrumb.id}>
          <span>{breadcrumb.name}</span>
        </li>
      );
    });
  };

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
