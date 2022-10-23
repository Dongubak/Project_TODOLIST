import { getDOM } from "./domhandle.mjs";

function onComplete(randomId) {
  const lis = getDOM(".todo_list").children;
  const completeObject = [...lis].find((e) => e.id === String(randomId))
    .children[0];
  completeObject.classList.toggle("complete");
}

export default onComplete;
