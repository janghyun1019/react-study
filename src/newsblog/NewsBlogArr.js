import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlogArr() {

    let title = 'React Study';

    // 뉴스 데이터: 객체 배열로 변환
    let [news, setNews] = useState([
        { title: '오늘의 뉴스', likeCount: 0, content: '오늘 뉴스의 내용' },
        { title: '어제의 뉴스', likeCount: 0, content: '어제 뉴스의 내용' },
        { title: '내일의 뉴스', likeCount: 0, content: '내일 뉴스의 내용' },
    ]);

    let [modalFlag, setModalFlag] = useState(false);

    let [selectedNews, setSelectedNews] = useState(null); // 선택된 뉴스 데이터 저장
    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => (
                    <div className="post-list" key={index}>
                        <h4 onClick={() => {
                            setModalFlag(!modalFlag);
                            setSelectedNews(item);
                        }}>
                            {item.title} 
                            <span onClick={(event) => {
                                event.stopPropagation();
                                let tempNews = [...news];
                                tempNews[index].likeCount++;
                                setNews(tempNews);
                            }}>❤</span> {item.likeCount}
                        </h4>
                        <p>{item.content}</p>
                        <button onClick={() => {
                            let tempNews = [...news];
                            tempNews.splice(index, 1);
                            setNews(tempNews);
                        }}>
                            삭제
                        </button>
                    </div>
                ))
            }

            <button onClick={() => {
                let tempNews = [...news];
                tempNews[0].title = 'Today News';
                setNews(tempNews);
            }}>제목 변경</button>

            <div>
                <input type="text" id="input_news" value={inputText} onChange={(event) => {
                    setInputText(event.target.value);
                }} />
                <button onClick={() => {
                    inputText = inputText.trim();

                    if (inputText.length === 0) {
                        alert('값을 입력하세요!');
                        return;
                    }

                    let tempNews = [...news];
                    tempNews.push({ title: inputText, likeCount: 0, content: '새로 추가된 뉴스의 내용' });
                    setNews(tempNews);
                    setInputText('');
                }}>발행</button>
            </div>

            {
                modalFlag && selectedNews ? 
                    <Modal 
                        title={selectedNews.title} 
                        likeCount={selectedNews.likeCount} 
                        news={news} 
                        setNews={setNews} 
                        bgColor={'lightcyan'} 
                    /> 
                    : null
            }
        </div>
    );
}

export default NewsBlogArr;
