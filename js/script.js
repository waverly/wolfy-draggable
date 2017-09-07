$( document ).ready(function() {

  // create array of img for environment
  const enviroArray = ['./img/environments/bg1.jpg', './img/environments/bg2.jpg', './img/environments/bg3.jpg',
  './img/environments/bg4.jpg', './img/environments/bg5.jpg', './img/environments/bg6.jpg', './img/environments/bg7.jpg',
  './img/environments/bg8.jpg', './img/environments/bg9.jpg', './img/environments/bg10.jpg', './img/environments/bg11.jpg', './img/environments/bg12.jpg']
  const bg = document.querySelector('html');
  let counter = 0;

  // swap out background environments on icon click
  document.querySelector('.enviro').addEventListener('click', function(){
    if (counter < (enviroArray.length - 1)){
      counter ++;
      bg.style.background = "url(" + enviroArray[counter] + ") no-repeat center center fixed";
    }
    else{
      counter = 0;
      bg.style.background = "url(" + enviroArray[counter] + ") no-repeat center center fixed";
    }
  });


  // rotate nav icon into active state on click
  document.querySelector('.menu-icon').addEventListener('click', function() {
      this.classList.toggle("change");
  });

  // display monument nav when menu icon has been clicked
  document.querySelector('.menu-icon').addEventListener('click', menuToggle);

  const imgWrap = document.querySelector('.img-wrapper');
  function menuToggle(){
    imgWrap.classList.toggle('opacity');
  }

  // toggle sub-menu on main-nav-img click
  const mainNavImg = document.querySelectorAll('.main-nav-img');
  mainNavImg.forEach(img => img.addEventListener('click', function(){
      const subNav = img.previousElementSibling;
      subNav.classList.toggle('display-block');
      setTimeout(()=>{
        subNav.classList.toggle('display');
      }, 500);
    })
  );

  // toggle subnav on subnav img click
  const subNavImg =  document.querySelectorAll('.sub-menu > li > img');
  const subNav = document.querySelectorAll('.sub-menu');
  subNavImg.forEach(img => img.addEventListener('click', () => {
    console.log('gotta close dis');
    img.parentElement.parentElement.classList.toggle('display-block2');
  }));

  // params for jquery-ui-rotatable
  const params = {
        start: function(event, ui) {
            console.log("Rotating started")
        },
        rotate: function(event, ui) {
            if (Math.abs(ui.angle.current > 6)) {
              console.log("Rotating " + ui.angle.current)
            }
        },
        stop: function(event, ui) {
            console.log("Rotating stopped")
        },
  };

    const canvas = document.querySelector('.canvas-area');
    let canvasMonument = []

    // write fx that gets menu item src and appends new item
    function monumentItemClick(){
      const source = this.src;
      const newEl = document.createElement('img');
      newEl.src = source;
      const child = document.createElement('div');
      child.setAttribute('id', 'handle');
      child.className += 'ui-resizable-handle';
      child.className += " " + 'ui-resizable-s';

      // create div with remove className
      divRemove = document.createElement('div');
      divRemove.className = "remove";

      // create new div
      const divEl = document.createElement('div');
      divEl.className += "canvas-monument";
      divEl.appendChild(child);
      divEl.appendChild(newEl);
      divEl.appendChild(divRemove);
      $(divEl).draggable().resizable({aspectRatio: true, handles: {'s': '#handle'}},).rotatable();
      canvas.appendChild(divEl);

      // push new monument to the array of items currently on the canvas
      canvasMonument.push(divEl);
      console.log(canvasMonument);
      canvasMonument.forEach(img => {
        img.addEventListener('click', showRotate);

        const removeDiv = img.querySelector('.remove');
        console.log(removeDiv);
        // console.log(removeDiv.parentNode);
        removeDiv.addEventListener('click', function(){this.parentNode.remove();});

      });

    }
    // end of monumetItem fx

    function showRotate(){
      const draggableDiv = this.querySelector('.ui-draggable');
      draggableDiv.classList.toggle('ui-rotatable-handle');

      const divRemove = this.querySelector('.remove');
      divRemove.classList.toggle('display-none');

    }

    // remove item on click of divRemove
    function clearItem(){
      console.log(this);
    }


    // on click of one of the menu items, create a new element and append it to the main section of thebody
    const monumentItem = Array.from(document.querySelectorAll('.sub-menu li img'));

    // when you click on an item, run a fx that gets its src and console logs
    const monumentSrc = monumentItem.forEach(item => item.addEventListener('click', monumentItemClick));


});
