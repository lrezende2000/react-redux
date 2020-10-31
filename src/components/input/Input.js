import React from 'react';

const Input = ({ onChange, value }) => (
  <input 
    onChange={ onChange } 
    type="text" 
    value={ value } 
  />
);

export default Input;
