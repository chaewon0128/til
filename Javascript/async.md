# async , await
## async 
```js
async function f() {
    return 1;
}
```
function 앞에 ``async``를 붙이면 해당 함수는 항상 ``promise``를 반환한다.
promise가 아닌 값을 반환하더라도 이행 상태의 프로미스로 값을 감싸 이행된 프로미스가 반환되도록 한다.

## await
``
let value = await promise;
``
await은 async함수 안에서만 동작한다.
자바스크립트는 ``await`` 키워드를 만나면 프로미스가 처리될 때까지 기다리고 그 이후 결과가 반환된다.

```js
async function f() {
    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=> resolve('완료'),1000)
    });
    let result = await promise;
    alert(result)
}
f();
``` 
함수를 호출하고, 함수 본문이 실행되는 도중에 await 줄에서 실행이 잠시 중단 되었다가 프로미스가 처리되면 실행이 재개됨
이때 프로미스 객체 result 값이 변수 result 에 할당된다. 따라서 위 예시는 1초 뒤에 완료가 출력

await는 말 그대로 프로미스가 처리될 때까지 함수 실행을 기다리게 만든다. 프로미스가 처리되면 그 결과와 함께 실행이 재개 된다.
프로미스가 처리되길 기다리는 동안에 엔진이 다른일을 할 수 있기 때문에 CPU 리소스가 낭비되지 않는다. 
