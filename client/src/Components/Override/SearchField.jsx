import React, { useState } from 'react';
import './SearchField.css';

export default function InputField({name}) {
  const [state, setState] = useState('')
  return (
    <div className='search-bar'>
      <input 
        type="text" 
        value={state} 
        name={name}
        onChange={(e) => setState(e.target.value)} 
      />
    </div>
  );

}
