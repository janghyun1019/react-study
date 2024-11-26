import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //javascript 코드
    let title = 'React Study';

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    //글 제목 3개
    let [likeCount, setLikeCount] = useState([0, 0, 0]);
    //좋아요 갯수 3개

    let [modalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag);
                            }}>{news[index]} <span onClick={(event) => {
                                event.stopPropagation(); //이벤트 추가 전달 stop
                                let temp = [...likeCount];
                                temp[index]++;
                                setLikeCount(temp);
                            }}>❤</span> {likeCount[index]} </h4>
                            <p>내용 무</p>
                        </div>
                    )
                })
            }

            <button onClick={() => {
                let temp = [...news];
                temp[0] = 'Today News';
                setNews(temp);
            }}>제목 변경</button>
            {
                modalFlag == true ? <Modal news={news} setNews={setNews} bgColor={'lightcyan'} /> : null
            }
        </div>
    )
}

export default NewsBlog;