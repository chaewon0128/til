# 이벤트 핸들링
-  html DOM 요소의 이벤트 핸들링과 유사하지만, 문법적인 차이가 있다
- 이벤트 속성 이름은 **camelCase** 형식 (예시: onClick, onMouseEnter)
- 속성 값에 문자열 대신 JSX 형식으로 메서드를 연결 (예시: onClick = {handler})
- 브라우저 기본 동작을 중단 하려면 **e.preventDefault()** 사용해야한다.
- 이벤트 속성 안에서 함수 값만 입력해야한다. 호출 하면 안됨. 
- onClick={showModal()} 함수가 다 실행된 후 반환 된 값이 onClick에 할당 되기 때문

```HTML
// HTML
<button onclick = "showModal()">
모달창 오픈
</button>
```
```js
// React
<button onClick={function () {} }>
모달창 오픈
</button>
<button onClick={()=> {}}>
모달창 오픈
</button>

function showModal () {
    alert('모달창 등장!')
}

<button onClick={showModal}>
모달창 오픈
</button>

```

## 클래스 컴포넌트의 this
이벤트 속성에 연결된 메서드의 this는 인스턴스가 나올거 같은데 ``undefined`` 가 출력된다. 이러면 앱이 정상 작동되지 않기때문에
이를 해결하려면
- bind() 함수를 이용해서 this 참조를 임의로 변경한다. 
``` onClick={ this.handleClick.bind(this) } ```
- 화살표 함수 이용
``` onClick={ (e) => this.handleClick(e) } ```
- 클래스 필드에서 화살표 함수로 메서드를 정의
```  handleClick = (e) => {
    e.preventDefault()
    console.log(this)
  }
  ```

## 이벤트 핸들러와 this(클래스 컴포넌트 안에서)
- 함수형 컴포넌트는 내부에서 this를 사용할 수 없다.


## 이벤트 전파
이벤트가 전달되는 단계 또는 순서이다. 특정 요소에 대한 이벤트가 발생하면 해당 요소에 할당된 이벤트 핸들러가 동작하는데
이때 핸들러가 동작하면서 버블링, 캡쳐링이 발생하게 된다. 
이벤트 전파는 크게 하위요소로 전파되는 캡쳐링, 실제 타깃 요소에 전달되는 타킷 , 상위 요소로 전파되는 버블링 
캡쳐링 -> 타켓 -> 버블링 단계로 전파 

- 특정 자손 요소를 식별하는데에는 Element의 closet 이나 matches, HTMLElement의 dataset 같은 DOM API 활용

### 이벤트 target
이벤트가 발생했을때 실제로 이벤트가 발생한 요소를 타깃 요소라고 한다. event target, current target 이 있다
- event target : 이벤트가 실제로 발생한 요소
- current target : 현재 실행중인 이벤트 핸들러를 가진 요소 

이벤트 핸들러가 form에 할당되어 있다면, 어떤 요소를 클릭해도 current target을 가리킨다. 
어느 요소를 클릭하든 form 요소까지 이벤트가 핸들링 됨.

```html
<form>
    <div>div입니다
        <p>P입니다</p>
    </div>
</form>

form.onclick = function (e) {
    console.log( e.target.tagName , e.currentTarget.tagName)
}
```

### 캡쳐링
상위요소에서 하위요소로 진행되는 이벤트 전파 방식. 최상단 요소에서 하위요소로 전달되며 이벤트가 실제로 발생하는 요소인 이벤터 타깃 까지 전파
실제로 캡쳐링 단계를 사용해야하는 경우는 많지 않다.

- addEventListener(,,true/false) 세번째 인자 값으로 사용되며, false : 버블링, true: 캡쳐링

### 버블링
이벤트가 하위요소에서 상위요소로 거슬러 올라가는 방식
한 요소에 이벤트가 발생하면 핸들러가 작동하게 되고, 부모요소의 핸들러도 작동된다. 최상단 요소에 닿을때까지 반복된다. 

### 이벤트 전파 방지
버블링,캡쳐링으로 인해 연쇄적으로 일어나는 이벤트 핸들링을 막아줄 때 사용된다. 많은 요소에 핸들러를 등록 했을때 이벤트 전파로 인해 의도치 않은 이벤트가 발생할 수 있기 때문에 사용한다.

- e.stopPropagation() : 버블링 단계에서 상위 요소로 이벤트가 전달되지 못하게 막아준다. 단 해당 요소에 할당된 이벤트 핸들러들은 잘 동작

- e.preventDefault() : 이벤트 전파를 방지하는 것이 아니라 태그의 고유 동작을 취소시킨다.

## 이벤트 위임
다수의 자식 요소를 가지고 있는 상태에서 각 자식 요소에 각각 이벤트를 바인딩하는 대신
**공동된 부모 요소**에 **하나의 이벤트 핸들러**를 바인딩함으로써 성능과 메모리 사용성을 개선하는 패턴이다.

### 이벤트 위임의 작동 방식
상위 요소에 이벤트 핸들러를 할당하면 하위 노드에 각각 이벤트 핸들러를 할당할 필요 없이 상위 요소의 핸들러를 이용해 이벤트 처리 가능하다

### 위임 사용시 유의 사항 
- 버블링이 가능한 이벤트에서 이벤트 위임을 사용할 수 있다 