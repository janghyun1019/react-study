
function TextItem(props){   //title : '', content :''
    return (
        <div className='textItem'>
            <p className='title'>제목 : {props.title}</p>
            <p>내용 : 내용{props.content}</p>
        </div>
    );

}

export default TextItem;