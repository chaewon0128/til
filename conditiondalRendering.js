// 조건부 렌더링 (Conditional Rendering)
// 애플리케이션 상태에 따라 (조건에 따라) 몇 개만 렌더링 할 수 있다.

function UserGreeting(props) {
    return <h1>고객님 안녕하세요!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>손님 안녕하세요!</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    // 조건식에 따라 렌더링 되는 것이 다르다.
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 

  root.render(<Greeting isLoggedIn={true} />);

// 사용 가능한 조건
// 1. if() : 괄호안에 값이 참이면 실행
// 2. 삼항연산자 (ternary operator) : 조건문 ? 참 : 거짓
// 3. null 병합 연산자 :  a ?? b => (a !== null && a!== undefinded) ? a  : b;
// 4. 옵셔널 체이닝 : ?. 앞에 값이 null 이나 undfined 이면 평가 멈추고 undefined 반환
// 5. &&연산자 : true && expression => expression 

