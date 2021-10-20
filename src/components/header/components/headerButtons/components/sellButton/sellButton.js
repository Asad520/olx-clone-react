import SELL_IMAGE from '../../../../../../assets/images/sell.png';
import useSellButton from './controller';
import { propTypes, defaultProps } from './props';

export function SellButton(props) {
  useSellButton(props);

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
