import './Quiz002.css';
import { useState } from 'react';
import TextItem from './TextItem';

function Quiz002(){

  let title = ['하나', '둘', '셋', '넷', '다섯'];
  let content = ['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯'];

  return(
    <div className='App'>
      {
        title.map((item, index)=>{
          return<TextItem title = {title[index]}/>
          //return<TextItem title = {item}/>
        })
      }
      {/* {
        <TextItem title={title[0]} content={content[0]} />
        <TextItem title={title[1]} content={content[1]} />
        <TextItem title={title[2]} content={content[2]} />
        <TextItem title={title[3]} content={content[3]} />
        <TextItem title={title[4]} content={content[4]} />
      } */}

      {
        // <TextItem />
        // <TextItem />
        // <TextItem />
        // <TextItem />
        // <TextItem />
      }
    </div>
  )

}



// function TextItem({ title, content }) {
//   return (
//     <div className='textItem'>
//       <p className='title'>제목 : {title}</p>
//       <p>내용 : {content}</p>
//     </div>
//   );
// }

// function Quiz002() {
//   const items = [
//     { title: '하나', content: '내용하나' },
//     { title: '둘', content: '내용둘' },
//     { title: '셋', content: '내용셋' },
//     { title: '넷', content: '내용넷' },
//     { title: '다섯', content: '내용다섯' },
//   ];

//   return (
//     <div className="App">
//       {items.map((item, index) => (
//         <TextItem key={index} title={item.title} content={item.content} />
//       ))}
//     </div>
//   );
// }

export default Quiz002;