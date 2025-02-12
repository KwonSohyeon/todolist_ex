const input = document.getElementById("input-text");
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  let list = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let delBtn = document.createElement("button");
  delBtn.textContent = "삭제";

  delBtn.addEventListener("click", () => {
    ul.removeChild(list);
  });

  list.appendChild(checkbox);
  list.appendChild(document.createTextNode(input.value));
  list.appendChild(delBtn);

  ul.appendChild(list);
});
