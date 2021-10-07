import { Col } from 'react-bootstrap';
import '../../assets/css/categories-bar-styles.css';
import CategoriesContainer from './components/allCategoriesContainer';
import { ALL_CATEGORIES, MAIN_CATEGORIES } from '../../utils/data';
import { MAIN_CATEGORY, DOWN_ARROW } from '../../utils/constants';

export default function CategoriesBar() {
  const renderCategories = (type) => {
    const categories =
      type === MAIN_CATEGORY ? MAIN_CATEGORIES : ALL_CATEGORIES;
    return categories.map((category) => {
      return (
        <li className='category-item' key={category.id}>
          <a className={type === MAIN_CATEGORY ? 'nav-item' : 'list-items'}>
            {category.name}
          </a>
        </li>
      );
    });
  };

  return (
    <section className='navigation'>
      <div className='container'>
        <div className='categories-bar justify-content-lg-start'>
          <div className='dropdown position-static'>
            <a
              className='all-categories-btn'
              data-bs-toggle='dropdown'
              href='#'
            >
              <div>ALL CATEGORIES</div>
              <img src={DOWN_ARROW} alt='Down Arrow' className='ms-1' />
            </a>
            <CategoriesContainer
              className='dropdown-menu'
              aria-labelledby='dropdownMenuLink'
              width={window.innerWidth}
            >
              <div className='row'>
                <Col md={3}>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                </Col>
                <Col md={3}>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                </Col>
                <Col md={3}>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                </Col>
                <Col md={3}>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                  <div className='main-category'>Category</div>
                  <ul className='categories-list'>{renderCategories()}</ul>
                </Col>
              </div>
            </CategoriesContainer>
          </div>
          <ul className='nav-list'>{renderCategories(MAIN_CATEGORY)}</ul>
        </div>
      </div>
    </section>
  );
}
