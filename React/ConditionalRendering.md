# 조건부 렌더링
- 애플리케이션 상태에 따라 (조건에 따라) 몇 개만 렌더링 할 수 있다.
- 문 과 식 으로 사용이 가능하다.

## if문 사용
```
function conditionalRendering(usingList = false){
    if(fruitList){
     return (  
       <ul> 
        <li>딸기</li>
        <li>사과</li>
       </ul> 
       )
    }else {
        return <p>장보러 가야지</p>
    }
}

// 랜덤 함수 활용법
function randomBoolean(){
    return Math.random() < 0.5 ? true : false
}


const app = (
    <div className='app'>
        <h1>냉장고 속 과일</h1>
        {conditionalRendering(randomBoolean())}
    </div>
)

```

## 조건 식을 사용한 방법 (인라인 조건 처리)
- 주로 3항 연산자, 논리곱/합 연산자를 사용하여 처리한다 
- 식과 함수는 값을 반환하기 때문에 JSX 코드 내에서 사용이 가능한데, 문은 값을 반환하지 않아 바로 사용할 수 없다.

### 잠깐 팁
- {/* JSX 식 주석 입니다아~  */}
- .trim() 양쪽 공백 삭제 해주는 메서드

```
let usingList = true;
let usingStyle = true;
const a11y = {
    hiddenClass : 'a11y-hidden'
}

const app = (
    <div className='app'>
        <h1 className ={a11y.hidden || null}>냉장고 속 과일</h1>
        { usingList ? (
        <ul className={`bordered ${usingStyle ? 'bordered-red' : ''}`.trim()}>
        <li>딸기</li>
        <li>사과</li>
       </ul> 
        ) : ( 
        <p>장보러 가야지</p>
        )}
    </div>
```

### 자바스크립트 조건문 과 식
- if문 / Swith문 : 괄호안에 값이 참이면 실행 - 문은 {} 안에 들어올 수 없음
- 삼항연산자 (ternary operator) : 조건문 ? 참 : 거짓
- null 병합 연산자 :  a ?? b => (a !== null && a!== undefinded) ? a  : b;
- 옵셔널 체이닝 : ?. 앞에 값이 null 이나 undfined 이면 평가 멈추고 undefined 반환
- &&연산자 :  첫번째 falshy 한 값 true && expression => expression 
- || 연산자 : 첫번째 truthy 한 값 