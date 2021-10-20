import { useState } from 'react';

export default function useEmailModal(props) {
  const [email, setEmail] = useState('');

  return { ...props, email, setEmail };
}
