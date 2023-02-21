# 컴포넌트
- 컴포넌트는 UI를 구성하는 작은 조각에 해당되며, 독립적으로 분리되어 재사용된다.
- 리액트에서 컴포넌트는 개별적인 자바스크립트 파일로 분리된다. (버튼,검색 폼, 캘린더, 모달 등) 
- 컴포넌트는 다른 컴포넌트를 포함할 수 있다. 즉, 부모-자식 관계가 형성된다. 

## 함수형 컴포넌트
- 가장 일반적인 형태. 자바스크립트 함수와 유사하다.
- 컴포넌트 외부로 부터 속성 (props)를 전달 받아 어떻게 UI를 구성해야 할지 설정하여 React 요소를 반환한다 
- 컴포넌트 이름은 항상 대문자로 (TitleCase /pascalCase 형태) 시작한다. (``<BaseButton />``)

```js
const 컴포넌트이름 = () => {
    return (
        <div>
        <h1>쇼핑 리스트</h1>
        <ul>
            <li>딸기</li>
            <li>우유</li>
            <li>빵</li>
        </ul>
        </div>
    )
}
const reactDOMRoot = ReactDOM.creatRoot(document.getElementById('root'))

reactDomRoot.render(<컴포넌트이름 />)

```

## 클래스 컴포넌트
- ES6 부터 지원되는 클래스 문법을 사용해서 작성
- React.Component 를 상속받아야만 리액트의 컴포넌트가 된다 (extends 사용)
- render() 메서드를 꼭 사용해주어야 한다. 
- constroctor () 는 클래스를 통해 생성된 인스턴스의 초기 수행과정을 처리 
- constroctor ()는  React.Component가 전달받은 속성인 props 를 super() 를 이용해서 전달받아야 수행 받을 수 있다.

```js
import React from 'react'

class 컴포넌트 이름 extends React.Component {
constructor(props){
    super(props)
}
render() {
return (JSX)}}
```

### 컴포넌트 렌더링
- 정의된 컴포넌트는 ``<컴포넌트이름 />`` 을 사용해 렌더링 해준다.



