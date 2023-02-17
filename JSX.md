# JSX (Javascript Syntax eXtension) 
- 자바스크립트 문법의 확장으로 Html과 유사하다. xml 문법을 따르고 있음.
- 리액트 제작 시 꼭 필요한건 아니지만, 빠르고 편리하게 제작이 가능하다.
- 리액트 요소를 만드는 역할을 한다. (리액트 요소는 가상 DOM요소)

```
- JSX 사용해서 리액트 요소 작성하는 방법
const container = (
    <div className='container'>
    <h1>JSX</h1>
    </div>
)
* 괄호는 개행해서 쓰고 싶을때 사용
```

```
- JSX 안쓰고 리액트 요소 작성하는 방법 (React.createElement()를 사용)
React.createElement('div' {className: 'container'},React.createElement('h1',null.'JSX'))
```

### React.creatElement() 
```
기본 형태
React.creatElement(
    type,
    [props],
    [...children]
)
```
- 인자로 주어지는 타입에 따라 새로운 리액트 엘리먼트를 생성, 반환 한다.
- type 인자로는 태그 이름 ('div','span' 등), React 컴포넌트 타입, React Fragment 타입 중 하나가 올 수 있다
- JSX 를 사용할 경우 React.createElement()를 직접 호출하는 일은 거의 없다.



```
- 너무 길어서 작성하기 힘들다면 변수에 넣어서 사용해도 된다.
const e = React.createElement;

e('div',null,'hello world');

- 혹은 모듈로 가져올때 
import {createElement as e} from 'react'
```



## Babel
- ES6를 ES5로 호환해주는 컴파일러 
- JSX 코드를 React.createElement() 로 바꿔주는 것 

## JSX 활용
- 자바스크립트 표현식을 중괄호({})로 묶어 데이터를 바인딩 한다.
- 분리해서 상태 데이터 값을 관리하고, 데이터 값을 바인딩 하는 것

```
Data === state 
const stste = {
    appClassName : 'app',
    appTitleClassName : 'app-title',
    appHeadlineContents : [
        'React',
        '앱'
    ]
}


const app = (
    <div className = {state.appClassName}>
        <h1 className = {state.appTitleClassName}>
            <span lang="en">{state.appHeadlineContents[0]}</span>{state.HeadlineContents[1]}
        </h1>
    </div>
)

```

## 콘텐츠 바인딩
- {} 내부에는 자바스크립트 표현식의 연산된 결과 값을 처리하여 콘텐츠를 컴파일 한다
- {} 내부에는 문을 사용할 수는 없다. 

### 문자값 (template literal 사용)
`` <h1>{`${headline}(${abbrs.jsx})`}</h1> ``
### 숫자 값
`` <span>{number % 4}</span> ``
### 함수 (메서드 값)
`` <p>{formatCount()}</p>``

    - 잠깐 팁 : /\s/g (정규표현식 공백)

## 속성 컴파일
- 동적으로 속성에 테이터를 바인딩 하는 방법 {} 묶어 자바스크립트 표현식을 넣어주면 된다

## 스타일 속성 (인라인) 
- 바깥쪽 {} 바인딩 역할, 안쪽 {} 객체 
`` const figure = <figure style={{margin: '10px'}} />``

## 스타일 속성 (객체)
```
const figureStyle = <figure style={{margin: '10px'}}

const figure <figure style={figureStyle} />
```

## 스타일 속성 (클래스)
- 클래스를 지정해주고 (className 이라고 지정해줘야 함), css에 작성하는 방식

```
let borderColor = 'red';

const list = <li className = {`bordered bordered-${borderColor}`}>

---
css

.bordered-red {
    color: red;
}
.bordered-green{
    color: green;
}
```