document.addEventListener("DOMContentLoaded", () => {

//링크가 이동된 후 해당 페이지로 ?p0 인수를 전달한다.
  const para = new URLSearchParams(window.location.search); // (쿼리 스트링 부분)
  
    //페이지가 로드 된 후 실행
    const menu = document.getElementById("menu");// <iframe id ="menu">
    
    menu.addEventListener("load", () => {
        // 부모페이지에서 자식 아이프레임의 콘텐츠에 접근 가능해야 한다.
        const nav = menu.contentDocument.querySelectorAll("nav a"); // 각각각 메뉴 <a href="spring">
        nav.forEach( i => {
            i.classList.add("act");
        });
    });



});/////////////////////////끝
