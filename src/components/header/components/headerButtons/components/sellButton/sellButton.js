import SELL_IMAGE from '../../../../../../assets/images/sell.png';
import { propTypes, defaultProps } from './props';

export default function SellButton() {
  return (
    <section className='sell-btn'>
      <div>
        <img src={SELL_IMAGE} alt='Sell Text' className='sell-img' />
      </div>
    </section>
  );
}

SellButton.propTypes = propTypes;
SellButton.defaultProps = defaultProps;
