// toggle menu icon
function menuToggle(x) {
  x.classList.toggle("change");
}

window.onload = function(e){

  const canvas = document.querySelector('.canvas-area');

  // write fx that gets menu item src and appends new item
  function monumentItemClick(){
    const source = this.src;
    const newEl = document.createElement('img');
    newEl.src = source;
    const child = document.createElement('div');
    child.setAttribute('id', 'handle');
    child.className += 'ui-resizable-handle';
    child.className += " " + 'ui-resizable-s';

    // create new div
    const divEl = document.createElement('div');
    divEl.className += "canvas-monument";
    divEl.appendChild(child);
    divEl.appendChild(newEl);
    $(divEl).draggable().resizable({aspectRatio: true, handles: {'s': '#handle'}},);
    canvas.appendChild(divEl);


  }

  // on click of one of the menu items, create a new element and append it to the main section of thebody
  const monumentItem = Array.from(document.querySelectorAll('.monument-menu img'));
  console.log(monumentItem);

  // when you click on an item, run a fx that gets its src and console logs
  const monumentSrc = monumentItem.forEach(item => item.addEventListener('click', monumentItemClick));


}
