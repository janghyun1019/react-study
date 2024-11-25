import React, { useState } from "react";
import logo from './../../src/logo.svg';
import './practice001.css';


function Practice001(){

    //선생님풀이1
    let[txt,setTxt] = useState('하나');

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{txt}</p>
            <button className="button" onClick={()=>{

                if(txt == '하나')
                    setTxt('둘');
                else if(txt == '둘')
                    setTxt('셋');
                else
                    setTxt('하나');
                
            }}>
                변경버튼
            </button>
          </header>
        </div>
      );


    /*
    const [index, setIndex] = useState(0); // 현재 텍스트의 인덱스 상태

    const texts = ["하나", "둘", "셋"]; // 순환 텍스트 배열

    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="text">{texts[index]}</p>
            <button className="button" onClick={handleClick}>
                변경버튼
            </button>
          </header>
        </div>
      );
      */

}

export default Practice001;