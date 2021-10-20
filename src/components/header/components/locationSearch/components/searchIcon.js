import { SEARCH_SVG } from '../../../../../utils/constants';
import useSearchIcon from './controller';

export function SearchIcon(props) {
  useSearchIcon(props);

  return (
    <svg width='25' height='25' viewBox='0 0 1024 1024'>
      <path d={SEARCH_SVG}></path>
    </svg>
  );
}
