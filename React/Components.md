# 컴포넌트
- 컴포넌트는 UI를 구성하는 작은 조각에 해당되며, 독립적으로 분리되어 재사용된다.
- 리액트에서는 개별적인 자바스크립트 파일로 분리된다. (버튼,검색 폼, 캘린더, 모달 등) 
- 컴포넌트는 다른 컴포넌트를 포함할 수 있다.

## 함수형 컴포넌트
- 가장 일반적인 형태. 자바스크립트 함수와 유사하다.
- 컴포넌트 외부로 부터 속성 (props)를 전달 받아 어떻게 UI를 구성해야 할지 설정하여 React 요소를 반환한다 
- 컴포넌트 이름은 항상 대문자로 (TitleCase 형태) 시작한다. (``<BaseButton />``)

```js
const App = () => {
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

reactDomRoot.render(<App />)

```

## 클래스 컴포넌트

```js
import React from 'react'

class 컴포넌트 이름 extends React.Component {
constructor(props){
    super(props)
}
render() {
(JSX)}}
```

- constroctor () class가 전달받은 속성인 Props 를 super() 를 이용해서 전달받아야 수행 받을 수 있다.

### Props(전달 속성)
- 컴포넌트에 설정된 임의의 JSX 속성 (type,children 등) 은 React에 의해 컴포넌트에 속성 객체로 전달 합니다. 
- 컴포넌트에 전달된 props는 읽기 전용이다. 수정 하려면 state 상태를 활용해야한다. 

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

### 컴포넌트 추출
- 너무 복잡한 컴포넌트는 좋지 않다. 컴포넌트 안에 분리 가능한 컴포넌트가 있다면 분리 하는게 좋다

```js
- 아래 DeliveryComment 를 분리해보기 

const DeliveryComment = (props) => {
  return (
    <div className="delivery-comment">
      <div className="commentary">
        <img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
        <span
          className={['rating-stars', props.rating.score]}
          ariaLabel={props.rating.label}
        ></span>
        <strong className="user-name">{props.user.name}</strong>
        <time className="comment-date">{props.user.createdAt}</time>
        <p className="comment-content">{props.user.content}</p>
        <div className="reply-comment">
          {/* ... */}
        </div>
      </div>
    </div>
  )
}
```
![image](https://yamoo9.github.io/react-master/images/DeliveryComment.jpg)
```js

const ReplyComment = () => {
    const {user} = props.reply;
    return (
         <div className="reply-comment">
          {/* ... */}
        </div>
    )}
   
const userName = () => {
return (
    <strong className="user-name">{props.user.name}</strong>
    )}       
const RatingStars = () => {
const {scre, label} = props.rating
    return (
        <span className={['rating-stars',score]}
          ariaLabel={label}></span>
    )
}
const Avatar = (props) => {
    const {avatarUrl,name} = props.user
return (
 <img
    className="avatar"
    src={avatarUrl}
    alt={name}
    />
)}

const DeliveryComment = () => {
  return (
    <div className="delivery-comment">
    <div className ="commentary">
    <Avatar user={user}/>
    <RatingStars rating={rating}/>
    <strong className="user-name">{user.name}</strong>
<time className="comment-date">{user.createdAt}</time>
<p className="comment-content">{user.contetn}</p>

    <ReplyComment reply={reply}/>
    
    </div>
    </div>
  )
}
```
![image](https://yamoo9.github.io/react-master/images/DeliveryCommentExtractComponents.jpg)


