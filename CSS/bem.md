# CSS BEM 방식

## BEM 방식이란?

![이미지](https://getbem.com/assets/github_captions.3a78c10d_ZfCSDb.jpg)

- block, element, modifier 로 구분지어 class명을 짓는 방법이다.
- block 이란 말 그대로 독립적으로 분리할 수 있는 형태이다.
  A functionally independent page component that can be reused
  위치에 종속되지 않고 어떠한 곳에서도 재사용이 가능한 요소를 block 이라고 한다. 예시) logo, header, menu..

- element 란 block 요소를 이루고 있는 작은 단위로 block에 의존적인 형태이다.
  자신이 속한 block외에서는 의미가 없기 때문에 재사용이 불가하다.
  예시) menu item, list item, checkbox caption

- modifier 는 block 이나 element의 속성을 말한다. 모양이나 동작을 변경하는데 사용한다.
  예시) disabled, checked, fixed, size-big, color-yellow

## BEM 방식 장점

- class 이름 만으로 범위를 이해하기 쉽다
- 재사용성이 높아 코드의 양이 줄어든다.

## BEM 방식 단점

- class 이름이 길다.
