import { useState } from 'react';
import '../../../../assets/css/search-filters-styles.css';
import {
  FILTER_CATEGORIES,
  FILTER_COMPANIES,
  FILTER_LOCATIONS,
} from '../../../../utils/data';

export default function SearchFilters() {
  const [viewMoreLocations, setViewMoreLocations] = useState(true);
  const [viewMoreCompanies, setViewMoreCompanies] = useState(true);
  const [minRange, setMinRange] = useState(250);
  const [maxRange, setMaxRange] = useState(100000);

  const filterLocations = FILTER_LOCATIONS.filter(
    (location) => location.id <= 5
  );
  const filterExtraLocations = FILTER_LOCATIONS.filter(
    (location) => location.id > 5
  );

  const filterCompanies = FILTER_COMPANIES.filter((company) => company.id <= 5);
  const filterExtraCompanies = FILTER_COMPANIES.filter(
    (company) => company.id > 5
  );

  const renderCategories = () => {
    return FILTER_CATEGORIES.map((category) => {
      return (
        <li className='cat-item' key={category.id}>
          <div className='cat-item'>
            <span className={category?.active && 'active-cat'}>
              {' '}
              {category.name}{' '}
            </span>
            <span className='categories-count'>({category.count})</span>
          </div>
        </li>
      );
    });
  };

  const renderSubcategories = (subcategories) => {
    return subcategories.map((subcategory) => {
      return (
        <li className='cat-item' key={subcategory.id}>
          <div className='cat-item'>
            <span> {subcategory.name} </span>
            <span className='categories-count'>({subcategory.count})</span>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <div className='filters-heading'>Filters</div>

      <section className='container categories-container'>
        <div className='categories'>
          <span className='main-filter'> CATEGORIES </span>
          <div className='subcategory-1'>All categories</div>
          <div className='subcategory-2'> Mobiles</div>
          <div className='subcategory-3'>
            <ul className='subcategory-list'>{renderCategories()}</ul>
          </div>
        </div>
      </section>

      <section className='container categories-container'>
        <div className='categories'>
          <span className='main-filter'> LOCATIONS </span>
          <div className='subcategory-1 active-cat'>Pakistan</div>
          <div>
            <ul className='subcategory-list'>
              {renderSubcategories(filterLocations)}
            </ul>
            <ul className='collapse' id='moreLocations'>
              {renderSubcategories(filterExtraLocations)}
            </ul>

            <button
              className='view-more-locations'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#moreLocations'
              onClick={() => setViewMoreLocations(!viewMoreLocations)}
            >
              {viewMoreLocations ? 'View More ' : 'View Less'}
            </button>
          </div>
        </div>
      </section>

      <section className='container categories-container'>
        <div className='categories'>
          <span className='main-filter'> PRICE </span>
          <div className='range-container'>
            <div className='range-container'>
              <input
                type='number'
                value={minRange}
                className='min-range'
                onChange={(event) => setMinRange(event.target.value)}
              />
            </div>
            <div className='range-container'>
              <input
                type='number'
                value={maxRange}
                className='min-range'
                onChange={(event) => setMaxRange(event.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='container categories-container'>
        <div className='categories'>
          <span className='main-filter'> MAKE </span>
          <div className='companies-list-container'>
            <ul className='subcategory-list make-list'>
              {renderSubcategories(filterCompanies)}
            </ul>
            <ul className='collapse make-list' id='moreMakes'>
              {renderSubcategories(filterExtraCompanies)}
            </ul>

            <button
              className='view-more-companies'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#moreMakes'
              onClick={() => setViewMoreCompanies(!viewMoreCompanies)}
            >
              {viewMoreCompanies ? 'View More' : 'View Less'}
            </button>
          </div>
        </div>
      </section>

      <section className='container condition-container'>
        <div className='categories'>
          <span className='main-filter'> CONDITION </span>
          <div className='checkboxes-container'>
            <div className='used-container'>
              <input
                type='checkbox'
                id='used'
                name='used'
                className='checkbox'
              />
              <label className='check-label'>
                <span className='check-text'>Used</span>
                <span className='check-count'>(154634)</span>
              </label>
            </div>
            <div className='used-container'>
              <input
                type='checkbox'
                id='used'
                name='used'
                className='checkbox'
              />
              <label className='check-label'>
                <span className='check-text'>New</span>
                <span className='check-count'>(42518)</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
