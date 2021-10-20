import { useState } from 'react';
import {
  FILTER_CATEGORIES,
  FILTER_COMPANIES,
  FILTER_LOCATIONS,
} from '../../../../utils/data';

export default function useSearchFilters(props) {
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

  const renderCategories = () =>
    FILTER_CATEGORIES.map((category) => (
      <li className='cat-item' key={category.id}>
        <div className='cat-item'>
          <span className={category?.active && 'active-cat'}>
            {' '}
            {category.name}{' '}
          </span>
          <span className='categories-count'>({category.count})</span>
        </div>
      </li>
    ));

  const renderSubcategories = (subcategories) =>
    subcategories.map((subcategory) => (
      <li className='cat-item' key={subcategory.id}>
        <div className='cat-item'>
          <span> {subcategory.name} </span>
          <span className='categories-count'>({subcategory.count})</span>
        </div>
      </li>
    ));

  return {
    ...props,
    viewMoreLocations,
    setViewMoreLocations,
    viewMoreCompanies,
    setViewMoreCompanies,
    minRange,
    setMinRange,
    maxRange,
    setMaxRange,
    filterLocations,
    filterExtraLocations,
    filterCompanies,
    filterExtraCompanies,
    renderCategories,
    renderSubcategories,
  };
}
