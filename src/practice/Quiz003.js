import React, { useState } from "react";
import './Quiz003.css';

function Quiz003() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes([...boxes, {}]); // 새로운 박스를 추가
  };

  return (
    <div className="container">
      <button className="add-button" onClick={addBox}>추가</button>
      <div className="box-container">
        {boxes.map((_, index) => (  //_: 간결하고 관례적으로 자주 사용되며, "이 값은 사용하지 않음"을 명확히 나타낸다고 함
          <div key={index} className="box">박스</div>
        ))}
      </div>
    </div>
  );
}

export default Quiz003;
