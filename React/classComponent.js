// class형 컴포넌트 
// 리액트에서 컴포넌트란 ? UI를 재사용 가능한 단위로 나눈 것, 독립적 
//  A highly cohesive building block for UIs loosely coupled with other components.

class Welcome extends React.Component {
  // render() 는 반드시 정의해야하는 메서드 이다. 그 외 메서드는 선택 사항. 
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

// React lifecycle
![lifecycle] (https://i.imgur.com/cNfpEph.png)

//  mount : 컴포넌트가 최초 생성되어 DOM에 삽입될때 
// 1) constructor(props) 
// 메서드를 바인딩하거나 State를 초기화 하는 작업이 없다면, 생성자를 구현하지 않아도 된다.
// 맨 먼저 super(props)를 호출하지 않으면 this.props가 정의되지 않아 버그가 생길 수 있다.
// 생성자 내부에 setState()를 호출하면 안된다. state가 필요하면 this.state에 초기 State 값을 할당
// => 생성자는 this.state를 직접 할당할 수 있는 유일한 곳, 그 외 메서드는 this.setState() 사용!
// 리액트에서 생성자의 목적: 1) State에 초기값 생성 2) 인스턴스에 이벤트 처리 메서드를 바인딩
// 2) static getDerivedStateFromProps(props,state) 
// 랜더링 직전에 호출되면 props를 바탕으로 state를 수정해야할때 사용
// 최초 마운트단계,업데이트단계에 호출되며, props에 의존적인 state 값이 있을때 유용하다. 
// null을 반환하면 아무 것도 갱신하지 않음. static 메서드 이기 때문에 this 통해 컴포넌트에 접근할 수 없음
// 3) render()
// 클래스 컴포넌트에서 유일하게 반드시 구현되어야하는 메서드
// 화면에 출력할 내용 생성하여 반환
// props와 stat값으로만 생성해야함
// Side-effect를 발생 시켜서는 안됨
// 4) componentDidMount()
// 컴포넌트가 마운트된 직후, 즉 DOM에 삽입된 직후에 호출 됩니다.
// 컴포넌트가 DOM 에 반영된 시점이므로 DOM으로부터 필요 정보 조회가능
// setState() 즉시 호출이 가능한데, 추가적인 렌더링이 발생하고 이로인해 성능 이슈가 있을 수 있으니 주의가 필요
// Side-effect코드 실행 가능

//update
// 1)static getDerivedStateFromProps()
// 2) shouldComponentUpdate(nextProps,nextState)
// 현재 state 또는 props의 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 react가 알 수 있다.
// 기본 동작은 매 State변화마다 다시 렌더링을 수행하는 것 
// 렌더링 성능 최적화만를 위한 메서드 
// 3)render()
// 4)getSnapshotBeforeUpdate()
// 가장 마지막으로 렌더링된 결과가 DOM 등에 반영되기전에 호출
// 컴포넌트가 DOM 으로부터 스크롤 위치 등과 같은 정보를 변경되기 전에 얻을 수 있다.
// 이 메서드가 반환하는 값은 componentDidUpdate(prevProps, prevState, snapshot)의 세번째 인자에 전달됨
// 5)componentDidUpdate()
// 업데이트가 일어난 직후 호출, 최초 렌더링에서는 호출되지 않는다. 
// Side-Effect 코드, setState()를 호출 할 수 있음
// 이전 prop, state를 전달받으므로 변경사항을 직접 비교할 수 있음

// Unmount
// 1) componentWillUnmount()
// 마운트 헤제되어 제거되기 직전에 호출된다. 타이머 제거, 네트워크 요청 취소, 생성된 구독 해제등 정리 작업 수행
// 다시 렌더링 되지 않으므로 setState() 호출하면 안됨
// 언마운트 되면 절대 다시 마운트 되지 않는다. 