import { useState } from "react";

function State01(){

    //React Hooks
    //useState -> 상태를 저장하는 변수 (재렌더링 시에도 계속 유지해야하는 데이터)
    //state 변수값이 변경 된 경우 -> 재랜더링 re-redering
    //set함수를 통해서 변경 된 경우

    let cnt = 0;

    //const/let [변수명, set함수명] = useStete(초기값);
    let [count, SetCount] = useState(0); //선언방법

    return(
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={()=>{
                cnt++;
                console.log('클릭됨');
                console.log(cnt);
            }}>cnt 증가</button>

            <p>{count}</p>
            <button onClick={()=>{
                // count++;  //set함수 사용이 아닌경우, 값은 증가 o 재렌더링 x
                //SetCount( count = count + 1);  //셋팅을 할 값을 넣어야 한다
                // SetCount(1);
                SetCount( count +1 );
                console.log('count 증가 클릭됨');
                console.log(count);
            }}>cnt 증가(state)</button>



        </div>
    )
}

export default State01;