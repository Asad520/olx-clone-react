import { useDispatch } from 'react-redux';
export default function useProfileDropdown(props) {
  const dispatch = useDispatch();
  return { ...props, dispatch };
}
