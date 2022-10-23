import onComplete from "./completeItem.mjs";
import { createDOM, getDOM } from "./domhandle.mjs";
import onRemove from "./removeItem.mjs";

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

  ///create complete button
  const $cbtn = createDOM("button");
  $cbtn.classList.add("buttons");
  $cbtn.textContent = "완료";
  $cbtn.addEventListener("click", () => {
    onComplete(randomId);
  });

  ///create delete button
  const $dbtn = createDOM("button");
  $dbtn.classList.add("buttons");
  $dbtn.textContent = "삭제";
  $dbtn.addEventListener("click", () => {
    onRemove(randomId);
  });

  ///button container
  const $div = createDOM("div");
  $div.classList.add("button_container");
  $div.appendChild($cbtn);
  $div.appendChild($dbtn);

  ///apply parentsNODE
  $li.appendChild($p);
  $li.appendChild($div);

  ///clear for input's content
  inputDOM.value = "";

  return $li;
}

export default addItem;
