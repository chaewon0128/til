import { useEffect, useRef } from "react";

export function LoginInput (props) {
    const inputElem = useRef();
    // inputElem = {current = undefined}
  
    const showModal = () => {
        alert(`${inputElem.current.value}님 로그인 되었습니다`)
        console.log(inputElem.current)
    
    }
    useEffect(()=> {
        console.log(inputElem.current)
        inputElem.current.focus()
        // 처음 렌더링 될때 인풋창에 포커스 
        console.log(inputElem.current)
    },)
    return (
        <>
    {/* ref 속성은 html에서 id를 사용하는 것 처럼 리액트에서 DOM에 이름을 다는 방법 */}
        <input ref={inputElem} type="text" />
        <button onClick={showModal}>로그인</button>
        </>
    )

}