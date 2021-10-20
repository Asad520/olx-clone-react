import './style.css';
import { propTypes, defaultProps } from './props';
import {
  DOWN_ARROW,
  LIST_VIEW_ICON,
  GRID_VIEW_ICON,
  BIG_VIEW_ICON,
  SELECTED_ITEM,
} from '../../../../utils/constants';

export function SortBar() {
  return (
    <>
      <section className='sort-bar'>
        <div className='ad-count'>10,000+ ads</div>
        <section className='sort-menu'>
          <div className='sort-icons'>
            <span className='view-text'>VIEW</span>
            <button className='active-layout-btn'>
              <img src={LIST_VIEW_ICON} alt='List View' />
            </button>
            <button className='layout-btn'>
              <img src={GRID_VIEW_ICON} alt='Grid View' />
            </button>
            <button className='layout-btn'>
              <img src={BIG_VIEW_ICON} alt='Big View' />
            </button>
          </div>
          <div className='sort-dropdown'>
            <div
              className='sort'
              id='sortDropdown'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <span className='sort-text'> SORT BY: </span>
              <span className='active-sort'> Newly listed </span>
              <img src={DOWN_ARROW} className='sort-arrow' alt='Down Arrow' />
            </div>
            <div
              className='dropdown-menu sort-dropdown'
              aria-labelledby='sortDropdown'
            >
              <ul className='sort-list'>
                <li>
                  <div className='sort-item'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 1024 1024'
                      className='sort-tick'
                    >
                      <path d={SELECTED_ITEM}></path>
                    </svg>
                    <span className='sort-item-text'> Newly Listed </span>
                  </div>
                </li>
                <li>
                  <div className='sort-item'>
                    <span className='sort-item-text'> Most Relevant </span>
                  </div>
                </li>
                <li>
                  <div className='sort-item'>
                    <span className='sort-item-text'> Lowest Price </span>
                  </div>
                </li>
                <li>
                  <div className='sort-item'>
                    <span className='sort-item-text'> Highest Price </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

SortBar.propTypes = propTypes;
SortBar.defaultProps = defaultProps;
