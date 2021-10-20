import { MAIN_CATEGORY } from '../../utils/constants';
import { ALL_CATEGORIES, MAIN_CATEGORIES } from '../../utils/data';

export default function useCategoriesBar() {
  const renderCategories = (type) => {
    const categories =
      type === MAIN_CATEGORY ? MAIN_CATEGORIES : ALL_CATEGORIES;
    return categories.map((category) => (
      <li className='category-item' key={category.id}>
        <div className={type === MAIN_CATEGORY ? 'nav-item' : 'list-items'}>
          {category.name}
        </div>
      </li>
    ));
  };

  return [renderCategories];
}
