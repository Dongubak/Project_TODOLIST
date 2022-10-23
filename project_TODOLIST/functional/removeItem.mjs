import { getDOM } from "./domhandle.mjs";

function onRemove(randomId) {
  const lis = getDOM(".todo_list").children;
  const removeObject = [...lis].find((e) => e.id === String(randomId));
  const ul = getDOM(".todo_list");
  ul.removeChild(removeObject);
}

export default onRemove;
