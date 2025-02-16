const input = document.getElementById("input-text"); // input 태그 가져오기
const addBtn = document.getElementById("add"); // add 버튼 가져오기
const ul = document.getElementById("todo-list"); // ul 태그 가져오기

// list 객체 만들기
let todolist = JSON.parse(localStorage.getItem("todolist")) || [];

// 화면에 list 객체 불러오기
readTodo();

function savetodo() {
  localStorage.setItem("todolist", JSON.stringify(todolist));
}

// list 객체 불러오기
function readTodo() {
  ul.innerHTML = ""; // ul 요소 초기화

  todolist.forEach((item, index) => {
    const li = document.createElement("li"); // li 태그 만들기

    const checkbox = document.createElement("input"); // input 태그 만들기
    checkbox.type = "checkbox"; // checkbox 로 변경
    checkbox.checked = item.checkbox; // ✅ 체크박스 상태 반영

    const span = document.createElement("span"); // span 태그 만들기
    span.innerHTML = item.content; // span 태그 안에 list 객체 content 값 넣기

    if (item.checkbox) {
      span.classList.add("list"); // ✅ 새로고침해도 줄 유지!
    }

    let editBtn = document.createElement("button"); // button 태그 만들기
    editBtn.textContent = "수정";

    const delBtn = document.createElement("button"); // 버튼 태그 만들기
    delBtn.textContent = "삭제"; // 버튼 글씨에 "삭제" 추가

    // ✅ 체크박스 클릭 이벤트 (상태 업데이트)
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        span.classList.add("list");
      } else {
        span.classList.remove("list");
      }
      item.checkbox = checkbox.checked; // todolist 배열에 저장
      savetodo();
    });

    // 수정 버튼 클릭 이벤트
    editBtn.addEventListener("click", function editHandler() {
      editBtn.innerHTML = "확인";
      span.style.display = "none"; // span 숨기기

      let input = document.createElement("input"); // input 태그 생성
      input.value = span.textContent;
      li.insertBefore(input, editBtn);

      editBtn.remove();

      let neweditBtn = document.createElement("button"); // 새로운 버튼 생성
      neweditBtn.innerHTML = "확인";
      li.insertBefore(neweditBtn, delBtn);

      // "확인" 버튼 클릭 이벤트
      neweditBtn.addEventListener("click", () => {
        neweditBtn.remove();

        editBtn = document.createElement("button"); // 새로운 editBtn 생성
        editBtn.innerHTML = "수정";
        li.insertBefore(editBtn, delBtn);

        span.textContent = input.value;
        span.style.display = "inline";
        item.content = input.value; // ✅ 수정된 내용 저장
        input.remove();
        savetodo();

        editBtn.addEventListener("click", editHandler);
      });
    });

    // 삭제 버튼 클릭 이벤트
    delBtn.addEventListener("click", () => {
      todolist.splice(index, 1); // 클릭된 항목을 list 배열에서 제거
      readTodo(); // 화면 업데이트
      savetodo();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ul.appendChild(li);
  });
}

// 추가 버튼 클릭 이벤트
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("할일을 입력해주세요");
    return;
  }

  const todo = {
    checkbox: false, // ✅ 기본적으로 체크되지 않은 상태
    content: input.value,
  };

  todolist.push(todo);
  savetodo();
  readTodo(); // ✅ 새로운 아이템 추가 후 다시 렌더링
  input.value = "";
});
