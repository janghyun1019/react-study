import { useState } from 'react';
import './NewsBlog.css';
import Modal from './Modal';

function NewsBlogMe(){

    let title = 'React Study';

    let [new1, setNews1] = useState('오늘의 뉴스');
    let [new2, setNews2] = useState('어제의 뉴스');
    let [new3, setNews3] = useState('내일의 뉴스');

    let[news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의뉴스']);
    let [likes, setLikes] = useState([0, 0, 0]); // 각 뉴스의 좋아요 수를 저장

    let [likeCount, setLikeCount] = useState(0);

    //let modalFlag = true;
    
    let [modalFlag, setModalFlag] = useState(false);


    return (
        <div>

            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{color:'orange', fontSize:'20px'}}>{title}</div>
            </div>

            <div className='post-list'>
               <h4 onClick={()=>{
                    if(modalFlag){
                        setModalFlag(false);
                    } else {
                        setModalFlag(true);
                    }
               }}>{news[0]}
                <span onClick={(enent)=>{
                    enent.stopPropagation();  // 이벤트 추가 전달 stop
                    console.log('클릭');
                    setLikeCount(likeCount +1); //likeCount = likeCount +1
                    console.log(likeCount);
                }}>♥</span> {likeCount} </h4>
                <p>내용 무</p>
            </div>




            
            {/* <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용 무</p>
            </div> */}


            
            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>어제의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>내일의 뉴스</h4>
                <p>내용 무</p>
            </div> */}

            <button onClick={()=>{
                    // new[0] = 'Today News';
                    // setNews(news);  //배열 : 참조변수 : 주소 : 주소가 바뀌어야한다 : 새로운 배열로 만들어줘아햠
                    
                    // setNews(['Today News', '어제의 뉴스', '내일의뉴스']);  //주소가 바뀌면 리랜더링이 된다
                    
                    //array 새로운 배열 deep copy
                    let temp = [...news];
                    temp[0] = 'Today News';
                    setNews(temp);
            }}>제목 변경</button>

            {
                modalFlag == true ? <Modal /> : null
            }

            {
                // modalFlag && <Modal />
            }

        </div>
    )
}

export default NewsBlogMe;