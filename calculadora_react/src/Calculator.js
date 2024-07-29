import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        setResult(eval(displayValue));
      } catch {
        setResult('Erro');
      }
    } else if (label === 'C') {
      setDisplayValue('');
      setResult('');
    } else {
      setDisplayValue(displayValue + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={result || displayValue} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map(label => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;