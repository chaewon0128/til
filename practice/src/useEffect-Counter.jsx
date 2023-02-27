import { useEffect, useState } from "react";


function Counter() {
const[count,setCount] = useState(0);

// useEffect : 사이드 이펙트를 수행하기 위한 hook
// 사이드 이펙트의 예시 : 수동으로 DOM 조작, 서버에서 데이터 받아오기 등 
// 사이드 이펙트라고 부르는 이유는 해당 작업이 다른 컴포넌트에 영향을 미칠 수 있기 때문에 
// 렌더링 중에는 작업이 완료될 수 없기 때문이다. 렌더링이 끝난 이후에 실행되어야 하는 작업이다. 

// componentDidMount() , componentDidUpdate(), componentWillUnmount() 을 하나로 통합한 기능 

useEffect(()=> {
    document.title = `총 ${count}번 클릭했습니다.`
})
// DOM이 변경된 이후에 해당 이펙트 함수를 실행하라는 의미
// 기본적으로 컴포넌트가 처음 렌더링 될 때를 포함해서 매번 렌더링 될때마다 이벤트가 실행되는 것 


return(
    <div>
        <p>총 {count}번 클릭했습니다.</p>
        <button onClick={()=>{setCount(count +1)}}>클릭</button>
    </div>
)
}



export default Counter;
