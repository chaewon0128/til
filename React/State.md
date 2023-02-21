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

### setState
리액트는 불변 객체인 state를 관리하기 위한 방법으로 setState()를 사용한다. state를 비교하되 불변객체를 유지하면서 상태를 업데이트한다.
setState 호출은 비동기적으로 이뤄지기 때문에 호출 직후 새로운 값이 this.state에 반영되지 않는다. 
이전 state 값을 기준으로 값을 계산해야 한다면 객체 대신 updater 함수를 전달하면 된다.

`` this.setState({count: this.state.count +1})``

