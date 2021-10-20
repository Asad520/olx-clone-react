import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesBar } from '../../components/categoriesBar';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { ImagesContainer } from './components/imagesContainer';
import { PriceContainer } from './components/priceContainer';
import { SellerDescription } from './components/sellerDescription';
import { ProductDetails } from './components/productDetails';
import { SellerLocation } from './components/sellerLocation';
import { AdsCarousel } from './components/adsCarousel';
import { PRODUCT_BREADCRUMBS, POSTS } from '../../utils/data';
import useProduct from './controller';

export function Product(props) {
  const {
    seller,
    productImages,
    featured,
    img,
    price,
    type,
    descr,
    location,
    timeStamp,
    id,
  } = useProduct(props);

  return (
    <>
      <CategoriesBar shadow />
      <Breadcrumbs breadcrumbs={PRODUCT_BREADCRUMBS} />
      <Container>
        <Row>
          <Col md={8}>
            <ImagesContainer
              productImages={productImages}
              img={img}
              featured={featured}
            />
            <ProductDetails price={price} type={type} descr={descr} />
            <AdsCarousel posts={POSTS} />
          </Col>

          <Col md={4}>
            <PriceContainer
              price={price}
              descr={descr}
              location={location}
              timeStamp={timeStamp}
            />
            <SellerDescription
              name={seller.name}
              memberSince={seller.memberSince}
            />
            <SellerLocation location={location} id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
