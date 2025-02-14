const input = document.getElementById("input-text"); // input태그 가져오기
const addBtn = document.getElementById("add"); // add버튼 태그 가져오기

// list 객체 만들기 (가짜데이터)
const todolist = [
  { content: "운동하기", id: 1 },
  { content: "노래듣기", id: 2 },
];

readTodo(); // 가짜데이터을 화면에 불러오기

// list 객체 불러오기
function readTodo() {
  const ul = document.getElementById("todo-list"); //  ul태그 가져오기
  ul.innerHTML = ""; // ul요소 초기화

  // list 배열의 각 아이템을 하나씩 가져오기
  todolist.forEach((item, index) => {
    const li = document.createElement("li"); // li 태그 만들기

    const checkbox = document.createElement("input"); // input태그 만들기
    checkbox.type = "checkbox"; // checkbox 로 변경
    checkbox.checked = false; // check false값으로 받기

    const span = document.createElement("span"); // span태그 만들기
    span.innerHTML = item.content; //  span태그 안에 list객체 content 키 값 넣기

    const delBtn = document.createElement("button"); //  버튼태그 만들기
    delBtn.textContent = "삭제"; // 버튼 글씨에 "삭제" 추가

    // 삭제버튼 클릭시 이벤트
    delBtn.addEventListener("click", () => {
      todolist.splice(index, 1); // 클릭된 항목을 list 배열에 제거
      readTodo(); // readTodo 다시 로드
    });

    li.appendChild(checkbox); // checkbox를 li 자식으로 추가
    li.appendChild(span); // span를 li 자식으로 추가
    li.appendChild(delBtn); // delBtn를 li 자식으로 추가

    ul.appendChild(li); // li를 ul 자식으로 추가
  });
}

//  추가버튼 클릭시 이벤트
addBtn.addEventListener("click", () => {
  window.addEventListener("keydown", (e) => {
    const key = document.getElementById(e.key);
  });
  // input 필드에 값이 없을 경우
  if (input.value.trim() === "") {
    alert("할일을 입력해주세요"); // alert로 경고창 발생
    return;
  }

  let ul = document.querySelector("ul"); //ul태그 가져오기
  let list = document.createElement("li"); // li태그 만들기

  let checkbox = document.createElement("input"); // input태그 만들기
  checkbox.type = "checkbox"; // checkbox 로 변경

  let delBtn = document.createElement("button"); // button 태그 만들기
  delBtn.textContent = "삭제"; // button에 글씨 "삭제" 추가

  // 삭제버튼 클릭시 이벤트
  delBtn.addEventListener("click", () => {
    ul.removeChild(list); // ul태그에 삭제할 자식 list

    // todolist에서 해당 항목을 찾아서 삭제
    todolist.splice(
      todolist.findIndex((item) => item.content === input.value), // todolist 배열에서 content 값이 input 값과 일치하는 항목 찾기
      1 // 해당 항목을 1개만 삭제
    );
  });

  list.appendChild(checkbox); // checkbox를  list 자식으로 추가
  list.appendChild(document.createTextNode(input.value)); // 생성한 input에 값을  list 자식으로 추가
  list.appendChild(delBtn); // 삭제버튼을 list 자식으로 추가
  ul.appendChild(list); // list를 ul 자식으로 추가

  todolist.push({ content: input.value, id: todolist.length + 1 }); //  새로 생성된  객체값을 todolist에 추가
  console.log(todolist);

  input.value = ""; // input에 값은 초기화

  localStorage.setItem("todolist", JSON.stringify(todolist));
  const newList = JSON.parse(localStorage.getItem("todolist"));
});
