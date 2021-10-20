import { useEffect } from 'react';
import { CategoriesBar } from '../../components/categoriesBar';
import { Banner } from './components/banner';
import { BottomBanner } from './components/bottomBanner';
import { Main } from './components/main';
import { HOME_TITLE } from '../../utils/constants';

export function Home() {
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
