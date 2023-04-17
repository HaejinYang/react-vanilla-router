# react-router-vanilla
리액트에 바닐라 라우터를 달아본다

## 테스트용 UI 만들기
따라해보다가 UI 만드는게 재밌어서 UI 만드는 것부터 시작

## 1단계. 간단하게 라우팅 해보기
window 객체의 location.pathname을 기반으로 라우팅을 한다.
~~~
const ShowAccordionList = () => {
if (window.location.pathname === "/accordion") {
return <AccordionList />;
}
}; 
~~~

## 2단계. 라우팅 컴포넌트로 만들기
생략

## 3단계. 라우팅 history api를 응용
history api를 응용한다. window.history.pushState의 세 번째 인자로 바꿀 주소를 지정할 수 있다.
Link 컴포넌트에서 주소를 지정하고 호출한다. 이때, 주소가 바뀔 뿐이지 어떠한 이벤트도 발생하진 않는다.
이벤트를 발생시키기 위하여 PopStateEvent를 생성하여 dispatch한다.

Route컴포넌트에선 popstate 이벤트 핸들러를 등록하여 Link 컴포넌트가 트리거한 popstate이벤트를 받는다.
이벤트 핸들러에서 현재 주소의 path를 window.location.pathname으로 얻고, 이를 통하여 원하는 페이지를 보여준다.

## 참고
[링크](https://ncoughlin.com/posts/react-navigation-without-react-router/)