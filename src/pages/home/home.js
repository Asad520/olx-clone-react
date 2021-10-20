import { CategoriesBar } from '../../components/categoriesBar';
import { Banner } from './components/banner';
import { BottomBanner } from './components/bottomBanner';
import { Main } from './components/main';
import useHome from './controller';

export function Home(props) {
  useHome(props);
  return (
    <>
      <CategoriesBar shadow />
      <Banner />
      <Main />
      <BottomBanner />
    </>
  );
}
