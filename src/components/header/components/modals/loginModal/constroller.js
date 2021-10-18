import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useLoginModal(handleClose) {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      handleClose();
    }
  }, [user]);

  return [user, dispatch];
}
