import { useState } from 'react';

export default function useEmailModal() {
  const [email, setEmail] = useState('');

  return [email, setEmail];
}
