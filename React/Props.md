# Props(전달 속성)
- 컴포넌트에 설정된 임의의 JSX 속성 (type,children 등) 은 React에 의해 컴포넌트에 속성 객체로 전달 합니다. 
- 부모 컴포넌트로부터 자식 컴포넌트에 전달된다. 
- 컴포넌트에 전달된 props는 읽기 전용이다. 수정 하려면 state 상태를 활용해야한다. 
- 복수의 props를 통헤 여러가지 데이터 전달도 가능하다.

```js
<BaseButton type="reset">
  <span className="a11y-hidden">초기화</span>
  <span className="icon icon-reset" aria-hidden="true"/>
</BaseButton>

// BaseButton 컴포넌트에 전달 된 props 객체
{
  type: 'reset',
  children: [<span>, <span>],
}



const BaseButton = (props) => (
  <button 
    type={props.type || 'button'} 
    className="base-button"
  >
    { props.children }
  </button>
)
```

### Props.children
- 모든 컴포넌트에서 사용할 수 있다. 컴포넌트의 여는 태그와 닫는 태그 사이의 내용을 포함 한다. 
- 주로 자식 컴포넌트가 어떻게 구성되어 있는지 모르지만, 화면에 표시해야 하는 경우 사용한다. 


## Porps type 검사

### 검사 이유
- 앱이 커짐에 따라 발생할 수 있는 버그를 초기에 잡을 수 있다. 


### 사용 방법
``npm i prop-types`` 를 통해 설치한다
`` import PropTypes from 'prop-types'`` 상단에 작성하여 prop type 불러옴

```js
컴포넌트이름.propTypes = {
  prop이름 : PropTypes.array.isRequired, // prop이 배열 타입으로 존재하지 않으면 오류
}
```
* 참고 사이트 : [React 공식문서](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
* 규모가 큰 프로젝트에서의 속성 검사
큰 코드 베이스에서 PropTypes 모듈 사용은 적합하지 않습니다. Flow (opens new window)또는 TypeScript (opens new window) 사용

