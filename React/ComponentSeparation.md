# 컴포넌트 분리
- 너무 복잡한 컴포넌트는 좋지 않다. 컴포넌트 안에 분리 가능한 컴포넌트가 있다면 분리 하는게 좋다
- 컴포넌트가 복잡한 경우 요청사항에 따라 변경이 까다로울수 있고, 재사용도 어렵다. 

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
    return (
         <div className="reply-comment">
          {/* ... */}
        </div>
    )}
       
const RatingStars = (props) => {
const {score, label} = props.rating
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

const DeliveryComment = (props) => {
  return (
    <div className="delivery-comment">
    <div className ="commentary">
    <Avatar user={user}/>
    <RatingStars rating={rating}/>
    <strong className="user-name">{user.name}</strong>
    <time className="comment-date">{user.createdAt}</time>
    <p className="comment-content">{user.contetn}</p>
    <ReplyComment />
    
    </div>
    </div>
  )
}
```
![image](https://yamoo9.github.io/react-master/images/DeliveryCommentExtractComponents.jpg)

