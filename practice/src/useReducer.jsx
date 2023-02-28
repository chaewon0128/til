import React ,{ useState, useReducer } from "react";

const reducer = (state, action) => {
switch (action.type) {
    case 'deposit' : 
    return state + action.payload
    case 'withdraw' :
    return state - action.payload
    default :
    return state; 
}};


export default function Bank() {
    const [number,setNumber] = useState(0)
    const [money, dispatch] = useReducer(reducer, 0)
    return (
        <>
           <h2>은행에 오신걸 환영합니다.</h2>
           <p>잔고: {money}원</p>
           <input type="number" value={number} step="1000" onChange={(e) => setNumber(parseInt(e.target.value))} /> 
           <button onClick={ () => {
            dispatch({type:'deposit', payload: number})
           }} >예금</button>
           <button onClick={()=> {
            dispatch({type:'withdraw', payload:number})
           }}>출금</button>
        </>
    )
}