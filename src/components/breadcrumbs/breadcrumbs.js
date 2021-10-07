import { Container, Row } from 'react-bootstrap';
import '../../assets/css/breadcrumbs-styles.css';

export default function Breadcrumbs({ breadcrumbs }) {
  const renderBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb, index) => {
      return (
        <>
          {index !== 0 && (
            <li>
              <a href='#' className='breadcrumb-item'>
                /
              </a>
            </li>
          )}

          <li>
            <a href='#' className='breadcrumb-item'>
              {breadcrumb.name}
            </a>
          </li>
        </>
      );
    });
  };

  return (
    <>
      <section className='breadcrumbs'>
        <Container>
          <Row className='mt-3'>
            <ul className='breadcrumbs-container justify-content-lg-start'>
              {renderBreadcrumbs()}
            </ul>
          </Row>
        </Container>
      </section>
    </>
  );
}
