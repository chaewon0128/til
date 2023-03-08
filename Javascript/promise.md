# Promise
```js
let promise = new Promise(function(resolve,reject){
    //executor() 실행자, 실행함수 
})
```
resolve,reject는 자바스크립트에서 자체 제공하는 콜백이다. 개발자는 신경쓰지 않고 executor 안 코드만 작성하면 된다
대신, executor에선 결과를 즉시 얻든 늦게 얻든 상관 없이 상황에 따라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야한다

- resolve(value) : 일이 성공적으로 끝난 경우 그 결과를 나타내는 value와 함께 호출
- reject(error) : 에러 발생시 에러 객체를 나타내는 error 와 함께 호출

=> executor()는 자동으로 실행되는데 여기서 원하는 일을 처리한다. 처리가 끝나면 executor의 성공 여부에 따라
resolve 나 reject를 호출한다. 

new Promise 생성자가 반환하는 promise 객체가 가지는 내부 프로퍼티
1. state : 처음엔 pending(보류)이었다가 resolve가 호출되면 **fulfilled**, reject가 호출되면 **rejected** 
2. result : 처음엔 undefined 였다가, resolve가 호출되면 **value**, reject가 호출되면 **error**

promise는 성공 또는 실패만 한다.
이미 처리가 끝난 promise는 다시 상태가 변경되지 않는다. 

## .then
promise에서 가장 중요하고 기본이 되는 메서드
```js
promise.then(
    function(result){}
    function(error){}
)
```
.then의 첫번째 인수는 promise가 이행되었을때 실행되는 함수이고, 여기서 실행 결과를 받는다
.then의 두번째 인수는 promise가 거부되었을때 실행되는 함수이고, 여기서 에러를 받는다.


## catch
에러가 발생한 경우만 다르고 싶다면 
```js
// 둘 다 동일하게 작동
1. .then(null,f)
2. .catch(f)
```

## finally
promise가 처리되면 (이행이나 거부) f가 항상 실행된다는 점에서 .finally(f) 호출은 .then(f,f) 와 유사하다
쓸모가 없어진 로딩 인디케이터(Loading indicator)를 멈추는 경우 같이, 결과가 어떻든 마무리가 필요할때 사용한다
finally에서는 성공, 실패 여부를 몰라도 된다. 

```js
new Promise((resolve,reject)=> {
    시간이 걸리는 어떤 일 수행, 그 이후에 resolve,reject 호출
})
.finally(()=> 로딩 인디케이터 중지)
```

## promise 체이닝

promise 체이닝은 result가 .then 을 통해 전달되다. 
체이닝이 가능한 이유는 Promise.then을 호출하면 Promise가 반환되기 때문이다.
반환된 Promise에 다시 .then을 호출 하는 것!

## promise API
1. Promise.all
복수의 URL에 동시에 요청을 보내고, 다운로드가 모두 완료된 후에 콘텐츠를 처리할때 사용
```js
let promise = Promise.all([...promises...])
```
요소 전체가 promise인 배열을 받고 새로운 Promise를 반환한다. 
