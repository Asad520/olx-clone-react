import { useEffect } from 'react';
import CategoriesBar from '../../components/categoriesBar/categoriesBar';
import { HOME_TITLE } from '../../utils/constants';
import Banner from './components/banner/banner';
import BottomBanner from './components/bottomBanner/bottomBanner';
import Main from './components/main/main';

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
