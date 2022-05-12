import React, { useState } from 'react';
 
export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}