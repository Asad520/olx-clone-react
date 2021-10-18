import { useState } from 'react';

export default function usePasswordModal() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return [password, setPassword, confirmPassword, setConfirmPassword];
}
