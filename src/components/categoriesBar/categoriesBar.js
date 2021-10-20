import { Col } from 'react-bootstrap';
import './style.css';
import { defaultProps, propTypes } from './props';
import { CategoriesContainer, CategoriesSection } from './styled-components';
import { MAIN_CATEGORY, DOWN_ARROW } from '../../utils/constants';
import useCategoriesBar from './controller';

export function CategoriesBar({ shadow }) {
  const [renderCategories] = useCategoriesBar();

  return (
    <CategoriesSection shadow={shadow}>
      <div className='container'>
        <div className='categories-bar justify-content-lg-start'>
          <div className='dropdown position-static'>
            <div
              className='all-categories-btn'
              data-bs-toggle='dropdown'
              href='#'
            >
              <div>ALL CATEGORIES</div>
              <img src={DOWN_ARROW} alt='Down Arrow' className='ms-1' />
            </div>
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
    </CategoriesSection>
  );
}

CategoriesBar.defaultProps = propTypes;
CategoriesBar.defaultProps = defaultProps;
