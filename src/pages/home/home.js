import Header from '../../components/header/header';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import BottomBanner from '../../components/bottomBanner/bottomBanner';

export default function home() {
  return (
    <>
      <Header />
      <CategoriesBar />
      <Banner />
      <BottomBanner />
      <Footer />
    </>
  );
}
