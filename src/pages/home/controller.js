import { useEffect } from 'react';
import { HOME_TITLE } from '../../utils/constants';

export default function useHome(props) {
  useEffect(() => {
    document.title = HOME_TITLE;
  }, []);

  return { ...props };
}
