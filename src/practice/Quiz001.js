import React, { useState } from 'react';
import './Quiz001.css';

function Quiz001() {
  const [number, setNumber] = useState(0);

  const handleEvenNumber = () => {
    setNumber((prev) => prev + 2);
  };

  return (
    <div className="App">
      <button onClick={handleEvenNumber}>짝수 출력</button>
      <span className="number">{number}</span>
    </div>
  );
}

export default Quiz001;

