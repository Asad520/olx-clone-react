import '../../assets/css/banner-styles.css';
import { BANNER_IMG } from '../../utils/constants';

export default function banner() {
  return (
    <>
      <section class='banner-img'>
        <img src={BANNER_IMG} alt='OLX Banner' class='banner' />
      </section>
    </>
  );
}
