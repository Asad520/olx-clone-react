import { useEffect } from 'react';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import Banner from './components/banner/banner';
import BottomBanner from './components/bottomBanner/bottomBanner';
import Main from './components/main/main';
import { HOME_TITLE } from '../../utils/constants';

export default function Home() {
  useEffect(() => {
    document.title = HOME_TITLE;
  }, []);

  return (
    <>
      <CategoriesBar shadow />
      <Banner />
      <Main />
      <BottomBanner />
    </>
  );
}
