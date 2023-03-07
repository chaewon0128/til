# try catch 문 aka 에러 처리 하기

```js
try {
    // 코드
} catch(e) {
    // 에러 핸들링
}
```
실행 순서
1. try 안에 코드 실행
2. 에러가 없다면 try안에 끝까지 실행되고 catch 블록 실행안됨
3. 에러가 있다면 try 블록 실행 중단 되고 catch 블록으로 넘어감. error 객체 반환됨 

try안에 에러가 발생해도 cath 블록이 에러를 처리하기 때문에 **스크립트가 죽지 않는다**
주의) try.. catch 는 유효한 코드(유효한 자바스크립트 코드) 만 에러 처리를 한다. 

주의) try.. catch 는 동기적으로 동작한다. setTimeout 같은 비동기 코드에서 발생한 에러는
잡아낼 수 없다. 따라서 setTimeout 함수 내에 try.. catch를 작성해 줘야 한다.
```js
setTimeout(function() {
    try{
        eeeerrrrooorrr;
    }catch(e){
        alert('에러 캐치')
    },1000
})
```
업뎃) 에러에 대한 정보가 필요하지 않으면 error 인수 생략 가능하다. (최근 추가)

## 에러 객체
에러가 발생하면 에러 상세내용이 담긴 객체를 생성하고, catch 블록에 객체를 인수로 전달한다.

### 에러 객체내 주요 프로퍼티
1. name : 에러 이름, 정의되지 않은 변수 때문에 발생한 에러라면 "ReferenceError" 가 에러 이름이다
2. message : 에러 상세 내용을 담고 있는 문자 메시지
3. stack : (비표준이지만 가장 널리 사용되는 비표준 프로퍼티) 현재 호출 스택. 에러를 유발한 중첩 호출들의 순서 정보를
가진 문자열로 디버깅 목적으로 사용된다. 
```js
try {
    errorrr;
} catch(e) {
    console.log(e.name) // ReferenceError
    console.log(e.message) // errorrr is not defined
    console.log(e.stack) // ReferenceError : errorrr is not defined at .. (호출 스택)

    conaole.log(e) // 에러 전체가 출력 됨
}
```

### 예시 
실제 웹 사이트에서 스크립트가 죽어도 사용자는 개발 콘솔을 열지 않는 이상 원인을 절대 알 수 없다

```js
let json = "{bad json}"

try {
    let user = JSON.parse(json) // 여기서 에러 발생
    alert(user.name) // 실행 안됨
} catch(e) {
    alert("데이터 에러가 발생했습니다")
    alert(e)
}
```
보통 catch안에 새로운 네트워크 요청 보내기, 사용자에게 대안 제안하기, 로깅 장치에 에러 정보 보내기 등 구체적인 일을 수행

## throw 연산자
```js
throw <error object>
```
이론적으로 숫자,문자열 같은 원시형 자료를 포함한 어떤 것이든 에러 객체로 사용할 수 있다. 
하지만 내장 에러와의 호환을 위해 되도록 에러객체에 name,message 프로퍼티를 넣어주는 것을 권장

자바스크립츠는 Error, SyntaxError, TypeError 등의 표준 에러 객체 관련 생성자를 지원한다. 
이 생성자들을 이용해 에러 객체를 만들 수도 있다. 

### 직접 에러 만들어서 던지기
```js
let json = '{"age" : 30}' // 불완전한 데이터

try {
let user = JSON.parse(json) // 에러가 안나옴

if(!user.name) {
    throw new SyntaxError("불완전한 데이터 : name이 없다")
}
alert(user.name)
}catch(e) {
console.log("JSON Error : " + e.massage) // JSON Error : 불완전한 데이터 : name이 없다

}
```
## 에러 다시 던지기
에러는 어떤 상황에서도 발생할 수 있고, 다양한 에러가 생길 수 있다. 하지만 에러 종류와 상관 없이 동일한 방식으로
에러를 처리하는 것은 디버깅을 어렵게 만들어 좋지 않다.
따라서, catch는 알고 있는 에러만 처리하고 나머지는 **다시 던져야 한다**

### 다시 던지기 방법
1. catch가 모든 에러를 받는다
2. catch(err) {} 블록 안에서 에러 객체를 분석한다
3. 에러 처리 방법을 알지 못하면 throw err 한다
보통 에러 타입을 ``instanceof`` 로 확인한다.  
``obj instanceof class``는 obj가 class에 속하는지 확인하는 연산자 

``` js
let json = '{"age" : 30}' // 불완전한 데이터

try {
let user = JSON.parse(json) // 에러가 안나옴

if(!user.name) {
    throw new SyntaxError("불완전한 데이터 : name이 없다")
}
blabla() // 예상치 못한 에러
alert(user.name)
}catch(e) {

    if (e instanceof SyntaxError) {
    console.log("JSON Error : " + e.massage) // JSON Error : 불완전한 데이터 : name이 없다
    } else {
        throw e; // syntax error 가 아니면 에러 다시 던지기
    }

}
```
에러를 던지면 try catch 문 밖으로 던져진다. 이때 바깥에 try catch가 있으면 여기서 에러를 잡고, 아니면 스크립트가 죽는다. 이렇게 하면 알고 있는 에러는 처리하고 알 수 없는 에러는 건너 뛰게 된다. 


## finally 
finally는 무언가를 실행하고, 실행 결과에 상관 없이 실행을 완료하고 싶은 경우 사용된다
finally는 다음과 같은 상황에서 실행된다.
1. 에러가 없는 경우 : try 실행이 끝난 후
2. 에러가 있는 경우 : catch 실행이 끝난 후

```js
try {
    //코드 실행
} catch(e) {
    //에러 핸들링
} finally {
    // 항상 실행
}
```

### finally 와 return
finally절은 try catch 절을 빠져나가는 어떤 경우에도 실행됩니다. return을 사용하 명시적으로 빠져나가려는 경우에도 마찬가지로 실행된다.
```js
function func() {
    try {
        return 1;
    } catch (e) {

    } finally {
        alert('finally')
    }
}

alert(func()) // finally 안의 alert이 실행되고 난 후에 실행됨. 
```