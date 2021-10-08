import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ImagesContainer from './components/imagesContainer/imagesContainer';
import PriceContainer from './components/priceContainer/priceContainer';
import SellerDescription from './components/sellerDescription/sellerDescription';
import ProductDetails from './components/productDetails/productDetails';
import SellerLocation from './components/sellerLocation/sellerLocation';
import AdsCarousel from './components/adsCarousel/adsCarousel';
import { PRODUCT_BREADCRUMBS, POSTS } from '../../utils/data';
import { Col, Container, Row } from 'react-bootstrap';

export default function Product({ product }) {
  const { productImages, featured, seller } = POSTS[0];
  return (
    <>
      <CategoriesBar shadow />
      <Breadcrumbs breadcrumbs={PRODUCT_BREADCRUMBS} />
      <Container>
        <Row>
          <Col md={8}>
            <ImagesContainer
              productImages={productImages}
              featured={featured}
            />
            <ProductDetails />
            <AdsCarousel posts={POSTS} />
          </Col>

          <Col md={4}>
            <PriceContainer product={POSTS[0]} />
            <SellerDescription seller={seller} />
            <SellerLocation />
          </Col>
        </Row>
      </Container>
    </>
  );
}
