import { useState } from 'react';
import { useHistory } from 'react-router';

export default function useItemSearch() {
  const [itemSearch, setItemSearch] = useState('');
  const history = useHistory();

  const redirectToSearch = () => () => {
    if (itemSearch) {
      history.push(`/search/${itemSearch}`);
    } else {
      history.push('/search/Famous');
    }
  };

  return [itemSearch, setItemSearch, redirectToSearch];
}
