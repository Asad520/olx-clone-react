const renderPopularSearches = (popularSearches) =>
  popularSearches.map((item, index) => (
    <li key={item.id}>
      <span className='popular-item'>{item.name}</span>
      {index !== popularSearches.length - 1 && (
        <span className='popular-item'>-</span>
      )}
    </li>
  ));

export { renderPopularSearches };
