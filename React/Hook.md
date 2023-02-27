# Hooks
훅 사용시 주의 사항
- React 함수형 컴포넌트 안에서만 사용
- 컴포넌트 안의 반복문, 조건문,중첩된 함수 안에서 훅 사용 x

## useState
함수형 컴포넌트에서 컴포넌트 자신의 상태를 관리할 수 있도록 하기 위해 고안된 방법입니다.
`` const [state, setState] = React.useState(initalValue);``
- 상태 유지 값과 그 값을 갱신하는 함수를 반환한다. 
- 최초 렌더링 하는 동안 반환된 State는 첫번째 전달된 인자의 값과 같다.
- setState는 State를 갱신할때 사용하는 함수이다. 
- 필요하다면 함수형 컴포넌트 안에서 1개 이상의 state를 설정해 사용 가능하다. 

```js
const Counter = props => {
    const [state,setState] = useState(0);

    return (
        <div className = "counter">
        <p>{state}번 클릭</p>
        <button 
        type ="button"
        onClick= {()=> setState(count +1)}>
        클릭 </button>
        </div>

    )
}
```
### 클래스 컴포넌트의 state와의 차이?
유사하지만 useState()로 설정된 함수형 컴포넌트의 State는 클래스와 달리 1개 이상의 상태마다 개별적 업데이트가 요구된다. 바면 클래스 컴포넌트는 상태 업데이트 시, 상태의 일부 데이터를 교체하고 합친다는 점이 다르다. 


## useEffect
클래스 컴포넌트의 아래의 라이프 사이클 훅을 하나로 통합한것
- componentDidMount
- componentDidUpdate
- componentWillUnMount

명령형, 또는 어떤 effect를 발생하는 함수를 인자로 받는다.
변형,구독,타이머,로깅 또는 다른 부작용(Side effect)은 리엑트 렌더링 단계에 따르면 함수 컴포넌트의 본문 안에서는 허용되지 않는다. 이를 수행한다면 매우 혼란스러운 버그 및 UI 불일치가 야기된다.
useEffect 을 사용하면 전달된 함수는 화면에 렌더링이 완료된 후에 (어떤 값이 변경되었을때) 수행하게 된다. 


``` js
useEffect(()=> {
    //컴포넌트가 마운트 된 이후
    // dependency array에 있는 변수들 중 하나라도 값이 변경되었을때 실행
    // dependency array에 빈 배열([])을 넣으면 마운트와 언마운트시 단 한번씩만 실행
    // dependency array 생략 시 컴포넌트 업데이트 될때마다 실행 

    return () => {
        // 컴포넌트가 마운트 해제되기 전에 실행됨 
        // componentWillUnMount()
    }
})
```

### 사이드 이펙트(side Effect)란?
- 컴포넌트가 화면에 렌더링 된 이후에 비동기적으로 처리 되어야하는 부수적인 효과들
- 함수가 실행 되면서 함수 외부에 존재하는 값이나 상태를 변경시키는 행위 예를들어 어떤 데이터를 가져오기 위해서 외부 API를 호출한 경우 일단 화면에 먼저 렌더링하고 실제 데이터는 비동기로 가져온다. 요청 즉시 1차 렌더링을 함으로서 연동하는 API가 응답이 늦거나 응답이 없어서 사용자 경험 측면에서 유리하기 때문이다. 

## useRef
레퍼런스를 사용하기 위한 훅. 리액트에서 래퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 말한다.
useRef() 은 바로 래퍼런스 객체를 반환한다. 
```js 
const refContainer = useRef(초깃값) 
// refContainer { current : 초깃값 }

```
반환된 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다.  

