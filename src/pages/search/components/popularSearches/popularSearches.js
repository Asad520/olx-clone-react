import './style.css';
import { propTypes, defaultProps } from './props';
import usePopularSearches from './controller';

export function PopularSearches(props) {
  const { popularSearches, renderPopularSearches } = usePopularSearches(props);

  return (
    <>
      <section className='popular-searches'>
        <div
          className='
            container
            popular-container
            justify-content-lg-start
          '
        >
          Popular Searches:
          <ul className='popular-list justify-content-lg-start '>
            {renderPopularSearches(popularSearches)}
          </ul>
        </div>
      </section>
    </>
  );
}

PopularSearches.propTypes = propTypes;
PopularSearches.defaultProps = defaultProps;
