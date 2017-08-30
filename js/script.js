// toggle menu icon
function iconToggle(x) {
  x.classList.toggle("change");
}

window.onload = function(e){

  // display monument Nav when menu icon has been clicked
  document.querySelector('.menu-icon').addEventListener('click', menuToggle);
  const imgWrap = document.querySelector('.img-wrapper');
  console.log(imgWrap);

  function menuToggle(){
    console.log(imgWrap);
    imgWrap.classList.toggle('opacity');
    // if( this.classList.contains("change") ){
    //
    // }
    // else{
    //   console.log('nope, sorry');
    // }
  }


  // toggle sub-menu on main-nav-img click
  const mainNavImg = document.querySelectorAll('.main-nav-img');
  mainNavImg.forEach(img => img.addEventListener('click', function(){
      const subNav = img.previousElementSibling;
      subNav.classList.toggle('display-block');
    })
  );

  // toggle subnav on subnav img click
  const subNavImg =  document.querySelectorAll('.sub-menu img');
  const subNav = document.querySelectorAll('.sub-menu');
  subNavImg.forEach(img => img.addEventListener('click', () => {
    console.log('up in dis bis');
    console.log(img.parentElement);
    img.parentElement.parentElement.classList.toggle('display-block');
  }))




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
  const monumentItem = Array.from(document.querySelectorAll('.sub-menu li img'));

  // when you click on an item, run a fx that gets its src and console logs
  const monumentSrc = monumentItem.forEach(item => item.addEventListener('click', monumentItemClick));


}