function getDOM(name) {
  return document.querySelector(name);
}
function createDOM(name) {
  return document.createElement(name);
}

export { getDOM, createDOM };
