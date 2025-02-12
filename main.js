const input = document.getElementById("input-text");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  let list = document.createElement("li");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  list.textContent = input.value;
  list.appendChild(check);
  ul.appendChild(list);
});

// Todo 객체 생성
// Dummy Data(가짜데이터)
const todos = [
  { title: "자바스크립트 공부", content: "배열메서드", date: "오늘까지" },
  { title: "자바스크립트 공부", content: "DOM", date: "내일까지" },
];

// 화면에 투두리스트 전체를 보여주는 함수
function loadTodos() {}
