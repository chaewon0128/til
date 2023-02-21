# 컴포넌트 라이프 사이클
![라이프사이클](https://i.imgur.com/cNfpEph.png)

- 마운트 : 컴포넌트 생성
- 업데이트 : 컴포넌트 갱신
- 언 마운트 : 컴포넌트 제거 

## 생성 시점의 라이프 훅 (마운팅)
컴포넌트 인스턴스를 만들고 DOM에 삽입할때 다움 순서대로 훅 메서드가 실행된다.
- constructor() : 컴포넌트 생성 시점에 호출
- Static getDerivedStateFromProps() : 전달된 상태 및 속성을 가져와 설정하는 시점에 호출 
    - 컴포넌트 상태의 업데이트하고 싶은 시점, 일반적으로 잘 사용되진 않는다.
- render() : 컴포넌트에 레더링 시점에 호출
- componentDidMount() : DOM에 마운트 된 이후 시점에 호출 (실제 돔에 접근하는 시점) - 돔스크립트 사용 가능 
    - 사이드 이펙트를 가진다. 사이드 이펙트란 리액트에서 관리를 해주지 않는다는 것

```js
class LifeCycleDemo extends Component {
  // 1.1 컴포넌트 생성
  constructor(props) {
    super(props)
    console.log('컴포넌트 생성')
  }
  // 1.2 전달된 속성, 상태를 가져와 설정
  static getDerivedStateFromProps(props, state) {
    console.log('전달된 속성 및 상태를 가져와 설정')
  }
  // 1.3 컴포넌트 렌더링
  render() {
    console.log('컴포넌트 렌더링')
    return <div />
  }
  // 1.4 컴포넌트 마운팅 됨
  componentDidMount() {
    console.log('컴포넌트 마운팅 됨')
  }
}
```

## 업데이트 시점의 라이프 사이클 훅
업데이트 훅은 props 또는 State가 변경될 경우 발생한다. 
1. static getDerivedStateFromProps(): 전달된 상태 및 속성을 가져와 설정하는 시점에 호출
2. shouldComponentUpdate() : 컴포넌트 업데이트 예정 시점에 호출(업데이트 하거나, 안 하거나)
3. render() : 컴포넌트 렌더링
4. getSnapshotBeforeUpdate(): 컴포넌트 업데이트 전 스냅샷 가져오는 시점에 호출
5. componentDidUpdate(): 컴포넌트 업데이트 이후 시점에 호출

```js
class LifeCycleDemo extends Component {
  // 2.1 속성, 상태 설정
  static getDerivedStateFromProps(props, state) {
    console.log('(업데이트) 전달된 속성 및 상태를 가져와 설정')
    return null
  }
  // 2.2 업데이트 할 예정
  shouldComponentUpdate(nextProps, nextState) {
    console.log('성능 최적화 용도로 사용 됨')
    return true // false를 반환할 경우 컴포넌트 렌더링이 취소
  }
  // 2.3 렌더링
  render() {
    console.log('(업데이트) 렌더링')
    return <div />
  }
  // 2.4 DOM에 커밋되기 전
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('DOM에 커밋되기 전 스냅샷 가져오기')
    return null
  }
  // 2.5 업데이트 됨
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('업데이트 됨')
  }
}
```

## 제거 시점의 라이프 사이클 훅 (언마운트)
컴포넌트가 DOM에서 제거될 때 실행되는 메서드 입니다.
- componentWillUnmount() : 컴포넌트 제거 예정 시점에 호출 

```js
class LifeCycleDemo extends Component {
  // 3.1 DOM에서 언 마운트 되어 제거되기 직전에 실행
  componentWillUnmount() {
    console.log('DOM에서 언 마운트 되어 제거되기 직전에 실행 됨')
  }
}
```

## 오류처리 시점의 라이프 사이클 훅
오류가 날 것 같은 곳에 미리 작성하여 사용자에게 오류 메세지를 알려줄 수 있다. 
- static getDerivedStateFromError() : 자손 컴포넌트 오류 발생시 호출
- componentDidCatch() : 자손 컴포넌트 오류 발생시 호출 

getDerivedStateFromError() 메서드는 자식 컴포넌트에서 오류가 발생되면 이를 감지하여 컴포넌트의 State.hasError를 업데이트 한다.
render()메서드는 업데이트 된 hasError() 값을 조건 처리하여 오류를 렌더링 한다. 

```js
class LifeCycleDemo extends Component {
  state = { hasError: false }
  // 자식 컴포넌트의 오류를 throw한 후 실행
  static getDerivedStateFromError(error) {
    // throw된 오류가 감지되면, hasError 상태 값을 true 처리
    return { hasError: true }
  }
  render() {
    // 오류 발생 시, 렌더링 과정에서 오류 메시지를 반환
    if (this.state.hasError) {
      return <h1>오류가 발생했습니다.</h1>
    }
    return <div />
  }
}
```