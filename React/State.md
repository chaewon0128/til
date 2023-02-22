# state

## props 와 state 의 비교
| |설명|특징|비고|
| :----: | ----- |------|-----|
| props | 상위 컴포넌트로부터 전달된 속성 (함수 매개변수처럼)|읽기 전용|속성 객체|
| state | 컴포넌트 자신이 가지는 상태 (함수 내 선언된 변수처럼) | 읽기/쓰기| 다양한 유형의 값 성정 가능|

![이미지](https://yamoo9.github.io/react-master/images/props-state.jpg)


## 상태를 소유한 컴포넌트
상태를 가지는 컴포넌트의 특징은 하위에 상태를 가지지 않는 컴포넌트를 포함하며 자신의 상태를 하위 컴포넌트에 제공합니다.
```
class Counter extends React.Component {
    constructior(props){

    this.state = {
        count : 9
    }
}

render() {
    <div className="counter">
    <CountDisplay count={this.state.count}>
    </div>
}
```

## 클래스필드
클래스 필드 선언을 사용하면 보다 손쉽게 상태를 설정할 수 있다. Counstroctor()를 사용하지 않아도 됨.
```
class Counter extends React.Component {
    state = {
        count: 9
    }
}
```

### 상태 업데이트
상태에 접근하는 방법
`` this.state.count`` 
그렇다면 상태를 업데이트하는 방법은?
``this.sate.count = 10`` 이 아니다.

State는 불변 객체 이다. 따라서 수정이나 업데이트가 불가하다. 대신, 비교를 통해 교체하는 방법을 사용해 불변 객체를 유지한다.

```
왜 리액트는 불변 객체를 사용할까? (정말 궁금)
일반적으로 객체가 참조를 통해 공유되어 있다면 상태가 언제든지 변경될 가능성이 크다. 반면 불변 객체는 객체를 복제할때 객체 전체가 아니라
단순 참조만 복사하고 끝낸다. 참조는 보통 객체 그 자체보다 훨씬 작아서 메머리가 절감되며 프로그램 성능 향상에 도움이 된다. 
```

## setState
setState()는 컴포넌트 state의 변경 사항을 대기열에 집어넣고, 리엑트에게 해당 컴포넌트와 그 자식들이 갱신된 state를 사용하여 다시 렌더링 되어야 한다고 알린다. 이 메서드는 이벤트 핸들러와 서버응답 등에 따라 UI를 갱신할 때에 가장 많이 사용하는 메서드이다. 
setState 호출은 비동기적으로 이뤄지기 때문에 호출 직후 새로운 값이 this.state에 반영되지 않는다. 
이전 state 값을 기준으로 값을 계산해야 한다면 객체 대신 콜백함수를 전달하면 된다.

```js
const [count, setCount] = useState(0)

<button onClick={() => {
    //이전 상태값을 인자로 주는 콜백 함수를 이용
    setCount((prev)=>{prev+1}); // 0 + 1 = 1
    setCount((prev)=>{prev+1}); // 1 + 1 = 2
    setCount((prev)=>{prev+1}); // 2 + 1 = 3
    setCount((prev)=>{prev+1}); // 3 + 1 = 4 
}}>
```

### 왜 SetState는 비동기적인가?
setSate는 현재 이벤트 핸들러 내에서 비동기적이다
이로 인해 부모, 자식이 모두 click이벤트에서 setSate를 호출한다면 자식은 두 번 렌더링 되지 않는다
대신 리액트는 브라우저 이벤트가 끝날 시점에 Stat를 일괄적으로 업데이트 한다. 
이를 통해 불필요한 렌더링을 방지하면서 성능을 향상 시킨다. 
또한 props 나 State 사이의 일관성을 해칠 수 있고, 이것든 디버깅 하기 어려운 이슈가 생길 수 있다.
