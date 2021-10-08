import '../../../assets/css/popular-searches-styles.css';

export default function PopularSearches({ popularSearches }) {
  const renderPopularSearches = () => {
    return popularSearches.map((item, index) => {
      return (
        <li>
          <a href='' className='popular-item'>
            {item.name}
          </a>
          {index !== popularSearches.length - 1 && (
            <span className='popular-item'>-</span>
          )}
        </li>
      );
    });
  };

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
            {renderPopularSearches()}
          </ul>
        </div>
      </section>
    </>
  );
}
