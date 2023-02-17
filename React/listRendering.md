# 리스트 렌더링 
- 데이터 타입이 List 인 경우 (일반적으로 배열) 각 아이템들은 반복적으로 동적 생성 할 수 있다.
- 자바스크립트 Array 객체의 .map() 메서드를 이용해 데이터를 순환하고 리액트 요소를 만들 수 있다.
- 리스트 렌더링시 반복되는 아이템은 고유 키를 가지고 있어야 한다. key는 어떤 항목을 변경, 추가, 삭제 할지 식별해준다.
- key 사용하지 않으면 오류 발생 한다.

```
const numbers = [500,50,5,0.5] // 0,1,2,3

const app = (
    <div className = 'app'>
    <h1>리스트 렌더링</h1>
    <ul>{number.map((n,index) => <li key={index}>{n*2}</li>}</ul>
    </div>
)
```


```
const studentReact = [
{
    id: 'student1',
    name: '김리액트',
    src: 'a1234',
    profile: '',
},
{
    id: 'student2',
    name: '함채원',
    src: 'nwaehc',
    profile: ''
},
]

const app = (
    <div className='app'>
        <h1>학생들</h1>
        <ul className='students'>
            {
                studentReact.map((s) => 
                <li className='student' key={studentReact.id}>
                <a href='https://www.instagram.com/{studentReact.src}'>
                <figure className = 'studentInfo'>
                <img src={studentReact.profile} alt = '' className='photo'>
                <figcaption> {student.name} 인스타그램 바로가기</figcaption>
                </figure>
        </li>
        )
            }
        </ul>

)