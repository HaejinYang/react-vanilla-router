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

## 3단계. 라우팅(새로고침없이)

## 참고
[링크](https://ncoughlin.com/posts/react-navigation-without-react-router/)