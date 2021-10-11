import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Banner from './components/banner/banner';
import BottomBanner from './components/bottomBanner/bottomBanner';
import Main from './components/main/main';

export default function Home() {
  return (
    <>
      <CategoriesBar shadow />
      <Banner />
      <Main />
      <BottomBanner />
    </>
  );
}
