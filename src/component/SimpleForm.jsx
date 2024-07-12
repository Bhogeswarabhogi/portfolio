import React, { useState } from 'react';

const SimpleForm = () => {

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      <p>{inputValue}</p>
      <p>{displayValue}</p>
    </div>
  );
};

export default SimpleForm;
