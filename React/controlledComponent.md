# controlled component vs uncontrolled component
## controlled component (제어 컴포넌트)
제어 컴포넌트는 사용자의 입력을 기반으로 자신의 State를 관리하고, 업데이트 한다.

즉, 입력한 데이터 상태와 저장된 데이터 상태가 같은 것을 말하고 사용자가 입력한 값과 저장되는 값이 실시간 동기화 된다. 

문제점 : 입력할때 마다 렌더링이 되기 때문에 불필요하게 리렌더링되거나 API를 호출하게 된다.
=> 이를 해결하기 위해서는 쓰로틀, 디바운스를 사용할 수 있다. 
- Throttle : 마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것
- Debounce : 연이어 호출되는 함수들 중 마지막 (혹은 맨 처음) 함수만 호출하도록 하는 것

```js
function MyApp() {
    const [name, setName] = useState(null);

    const changeName = (e) => {
        setName(e.current.value);
    }

    return (
        <input onChange={changeName} value={name}/>
    )
}
```

## uncontrolled component (비제어 컴포넌트)
비제어 컴포넌트는 기존 바닐라 자바스크립트와 크게 다르지 않은 방식이다.

```
import React, { useRef } from 'React';

function MyApp() {
    const nameRef = useRef(null);

    return (
        <input ref={nameRef}/>
    )
}

export default MyApp();
```
제어 컴포넌트와는 다르게 state로 값을 관리하지 않기 때문에 값이 바뀔때마다 리렌더링 되거나 API호출이 되지 않는 성능상
이점이 있다. 만약 버튼이 있으면 버튼을 클릭할때 실행되는 함수 내에서 ref를 통해 form 내 value에 접근 한다.
대부분의 폼을 구현하는데 제어 컴포넌트를 사용하는 것이 좋다. 