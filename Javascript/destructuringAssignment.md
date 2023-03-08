# 구조 분해 할당
구조 분해 항당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담는 자바스크립트 표현식이다
배열을 변수로 분해 할 수 있게 하거나, 함수의 매개변수가 많거나, 매개변수의 기본값이 필요한 경우 사용된다.

## 배열 구조 분해 할당
1. 기본형
```js
let arr = ["chaewon", "ham"]
let [firstName, lastName] = arr

alert(firstName) // chaewon (arr[0])
alert(lastName) // ham (arr[1])

```

2. split() 메서드
```js
// String.split() 메서드 사용하는 방법 (문자열을 괄호 안에 내용을 기준으로 배열로 만드는 매서드)
let [firstName, lastName] = "chaewon ham".spilt(' ')
```

3. 요소 무시하기
```js
let [firstName, ,surname] = ["chawon", "jen", "ham"]

console.log(surname) // jen
``` 
4. 나머지 요소 가져오기
```js
let [name1, name2, ...rest] = ["nicole", "lisa", "ray", "amy"]
console.log(rest) // ["ray","amy"] 

```
rest는 나머지 요소들이 새로운 배열에 저장된다. 

5. 기본 값
```js
let [firstName,lastName] = []

console.log(firstName) // undefined
```


## 객체 구조 분해 할당

```js
let {id, name, age} = {id : 06, age:22 , name: "nicole"}

console.log(id) // 06
console.log(name) // nicole
```
할당 연산자 우측엔 분해하고자 하는 객체를, 좌측에는 상응하는 객체 프로퍼티 패턴을 넣는다. 
객체는 순서가 중요하지 않다.

```js
let person = {identification : 06, age:22 , personName: "nicole"}

let {identification : i , personName : p, age : a} = person;

console.log(i) // 06
console.log(p) // nicole
console.log(a) // 22
```
할당 연산자 좌측에 좀 더 복잡한 패턴이 올 수 있다. 분해하려는 객체의 프로퍼티와 변수의 연결을 
원하는대로 조정 할 수 있다. 좌측 패턴에 콜론 (:)을 사용하면 긴 프로퍼티를 변수로 변경 가능하다.  

```js
let {id = 01, name, age} = {age:22 , name: "nicole"}

console.log(id) // 01
console.log(name) // nicole
```
프로퍼티가 없는 경우를 대비하여 기본 값 설정을 할 수도 있다. 

```js
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = 이름이 title인 프로퍼티
// rest = 나머지 프로퍼티들
let {title, ...rest} = options;

// title엔 "Menu", rest엔 {height: 200, width: 100}이 할당됩니다.
alert(rest.height);  // 200
alert(rest.width);   // 100
```

```js
let title, width, height;

({title,width,height} = {title: "Menu", width:200, height: 100});

alert(title) // Menu
```
기존에 있던 변수에 분해한 값을 할당하라면 구조분해할당을 위해 사용한 중괄호{} 를 괄호() 로 묶어줘야한다. 
이렇게 하면 자바스크립트가 코드 블록이 아닌 표현식으로 해석하게 된다.

## 중첩 구조 분해

```js
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
  size: { // size는 여기,
    width,
    height
  },
  items: [item1, item2], // items는 여기에 할당함
  title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```
객체나 배열이 다른 객체나 배열을 포함하는 경우, 좀 더 복잡한 패턴을 사용하면 중첩 배열이나 객체 정보를 추출할 수 있다


## 함수 매개변수
매개변수 모두를 객체에 모아 함수에 전달해, 함수가 전달받은 객체를 분해하여 변수에 할당하고 원하는 작업을 수행하게 한다. 
```js
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({title = "Untitled", width = 200, height = 100 , items = []}) {
    // title, items는 객체 options에서 가져옴
    // width, height 는 기본값

}

showMenu(options)
```
함수 매개변수를 구조 분해할땐 반드시 인수가 전달된다고 가정되고 사용하는 점을 유의해야 한다.
모든 인수에 기본값을 할당해 주려면 빈 객체를 명시적으로 전달해야 한다,
``showMenu({})``

이 문제를 예방하려면 인수 전체의 기본 값으로 {} 빈 객체를 넣어주면 된다.
```js
function showMenu({title = "menu", width = 100, height = 200} = {}){
    alert(title)
}
```
