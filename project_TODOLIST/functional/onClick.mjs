import addItem from "./addItem.mjs";
import { getDOM } from "./domhandle.mjs";

function onClick(e) {
  e.preventDefault();
  const ul = getDOM(".todo_list");

  ul.appendChild(addItem());

  return 0;
}

export default onClick;
