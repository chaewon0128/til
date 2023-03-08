#fetch API
AJAX는 페이지 새로고침없이 비동기적으로 서버에서 추가 정보를 가져올 수 있게 해주는 포괄적인 기술 용어이다.
fetch(js 내장 함수)는 그 중 한 가지 방법이다. (최근에는 axios 같은 다른 라이브러리를 많이 사용한다.)

```js
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```
**url** : 접근 하고자 하는 url
**options**: method나 header을 지정할 수 있는 선택 매개변수 (작성하지 않으면 GET - url로 부터 콘텐츠 다운로드됨)

fetch() 를 호출하면 브라우저는 네트워크 요청을 보내고 프로미스가 반환된다. 
반환된 프로미스는 fetch() 를 호출하는 코드에서 사용된다.

**fetch로 받아온 데이터는 바로 사용할 수가 없다.**
fetch를 사용할 땐 두 단계를 거쳐야만 한다. 먼저 올바른 url로 요청을 보내고, 응답에 대해 json()을 해줘야 한다.
(axios는 json()과정을 자동으로 해줌)
```js
fetch('링크주소')
.then((res) => {
    return res.json() 
})
.then((json)=> {
    console.log(json) // 서버에서 받아온 json데이터 출력됨
})
```
응답 단계
1. 서버에서 응답 헤더를 받자마자 fetch 호출시 반환받은 promise가 내장 클래스 response의 인스턴스와 함께 이행 상태가 된다
(아직 본문에 도착 전이지만 개발자는 응답 헤더를 보고 요청이 성공했는지 아닌지 확인 가능하다, 네트워크 문제시 404로 거부 됨)
```js
let response = await fetch(url)
if (response.ok) { HTTP 상태 코드가 200-299 사이 인 경우
    let json = await response.json();
}
```
2. 추가 메서드를 호출해 응답 본문을 받는다.
response에는 프로미스를 기반의 다양한 메서드가 있다. 
- response.text() - 응답을 읽고 텍스트 반환
- response.json() - 응답을 JSON 형태로 파싱
- response.formData() - 응답을 FormData 객체 형태로 반환

일반적인 fetch 요청은 두 개의 await 호출로 구성된다.

