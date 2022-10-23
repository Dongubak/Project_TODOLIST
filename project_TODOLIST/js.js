function getDOM(name) {
  return document.querySelector(name);
}
function createDOM(name) {
  return document.createElement(name);
}

function init() {
  const $btn = getDOM("#btn");
  $btn.addEventListener("click", onClick);
}

function onClick(e) {
  e.preventDefault();
  const ul = getDOM(".todo_list");

  ul.appendChild(addItem());

  return 0;
}

function addItem() {
  const inputDOM = getDOM("#input_text");
  const randomId = Math.floor(Math.random() * 10000);

  ///add textContent
  const inputText = inputDOM.value;
  const $p = createDOM("p");
  const $li = createDOM("li");
  $p.textContent = inputText;

  ///add id
  $li.id = Math.floor(randomId);

  ///add class
  $li.classList.add("item");

  ///create delete button
  const $dbtn = createDOM("button");
  $dbtn.classList.add("buttons");
  $dbtn.textContent = "삭제";
  $dbtn.addEventListener("click", () => {
    onRemove(randomId);
  });
  ///delete logic
  ///1. ul's children의 classname들에서 randomID를 찾는다.
  ///2. index를 구한 뒤

  ///apply parentsNODE
  $li.appendChild($p);
  $li.appendChild($dbtn);

  ///clear for input's content
  inputDOM.value = "";

  return $li;
}

function onRemove(randomId) {
  const lis = getDOM(".todo_list").children;
  const removeObject = [...lis].find((e) => e.id === String(randomId));
  const ul = getDOM(".todo_list");
  ul.removeChild(removeObject);
}

init();
