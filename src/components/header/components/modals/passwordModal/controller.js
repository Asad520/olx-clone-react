import { useState } from 'react';

export default function usePasswordModal(props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return {
    ...props,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
}
