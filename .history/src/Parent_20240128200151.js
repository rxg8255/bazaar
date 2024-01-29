import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Assume this function gets the new data from somewhere
  const updateData = () => {
    const newData = 'Hello, world!';
    setInputValue(newData);
  };