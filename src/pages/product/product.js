import Header from '../../components/header/header';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Footer from '../../components/footer/footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ImagesContainer from './components/imagesContainer/imagesContainer';
import PriceContainer from './components/priceContainer/priceContainer';
import SellerDescription from './components/sellerDescription/sellerDescription';
import ProductDetails from './components/productDetails/productDetails';
import { PRODUCT_BREADCRUMBS, POSTS } from '../../utils/data';
import { Col, Container, Row } from 'react-bootstrap';

export default function Product({ product }) {
  const { productImages, featured, seller } = POSTS[0];
  return (
    <>
      <Header />
      <CategoriesBar />
      <Breadcrumbs breadcrumbs={PRODUCT_BREADCRUMBS} />
      <Container>
        <Row>
          <Col md={8}>
            <ImagesContainer
              productImages={productImages}
              featured={featured}
            />
            <ProductDetails />
          </Col>

          <Col md={4}>
            <PriceContainer product={POSTS[0]} />
            <SellerDescription seller={seller} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
