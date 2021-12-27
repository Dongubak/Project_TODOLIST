function init() {
    const $input = document.getElementById('input');
    $input.onkeyup = e => {
        if (e.key !== 'Enter') {
            return;
        }  
        addlist(e);
        const $contentListChildren = [...getContentList().children];
        $contentListChildren.forEach((n) => {
            n.addEventListener('click', removeList);
        });
    }
}
function addlist(e) {
    const $li = document.createElement('li');
    const $text = document.createTextNode(e.target.value);
    $li.appendChild($text);
   getContentList().appendChild($li);
    e.target.value = '';
}
function removeList(e) {
    const $contentList = document.getElementById('contentList');
    $contentList.removeChild(e.target);
}
function getContentList() {
    return document.getElementById('contentList');
}
init();