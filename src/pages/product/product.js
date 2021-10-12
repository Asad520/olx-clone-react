import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ImagesContainer from './components/imagesContainer/imagesContainer';
import PriceContainer from './components/priceContainer/priceContainer';
import SellerDescription from './components/sellerDescription/sellerDescription';
import ProductDetails from './components/productDetails/productDetails';
import SellerLocation from './components/sellerLocation/sellerLocation';
import AdsCarousel from './components/adsCarousel/adsCarousel';
import { PRODUCT_BREADCRUMBS, POSTS } from '../../utils/data';

export default function Product() {
  const { productId } = useParams();
  const product = POSTS.find((post) => post.id === productId);

  useEffect(() => {
    document.title = product.descr;
  }, [product.descr]);

  const { seller } = product;

  return (
    <>
      <CategoriesBar shadow />
      <Breadcrumbs breadcrumbs={PRODUCT_BREADCRUMBS} />
      <Container>
        <Row>
          <Col md={8}>
            <ImagesContainer product={product} />
            <ProductDetails product={product} />
            <AdsCarousel posts={POSTS} />
          </Col>

          <Col md={4}>
            <PriceContainer product={product} />
            <SellerDescription seller={seller} />
            <SellerLocation product={product} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
