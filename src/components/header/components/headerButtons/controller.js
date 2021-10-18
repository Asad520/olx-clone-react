import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function useHeaderButtons() {
  const [loginModal, setLoginModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const user = useSelector((state) => state.auth.user);

  return [
    user,
    loginModal,
    setLoginModal,
    emailModal,
    setEmailModal,
    passwordModal,
    setPasswordModal,
  ];
}
