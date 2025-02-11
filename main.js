const input = document.getElementById("input-text");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  let inputValue = document.getElementById("input-text").value;

  let li = document.createElement("li");
});

$(document).ready(function () {
  $("#add").on("click", function () {
    let list = $("li");
    $("ul").append(list);
  });
});

// Todo 객체 생성
// 기본 속성 : 내용, 체크여부, id
const todos = [todo, todo, todo];

const todo = {
  title: "",
  checked: false,
  id: "",
};
