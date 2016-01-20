function init () {
	//var title = document.getElementById("donedigital");
	//console.log(title);
	//var title2 = document.createTextNode(title.innerHTML);

	var wrapper = document.getElementById("starWarsWrapper");
	//wrapper.innerHTML = "<div><h1>DONE DIGITAL</h1></div>";

	for (i = 0; i < 10; i++) {
		wrapper.innerHTML = wrapper.innerHTML + "<div><h1>DONE DIGITAL</h1></div>";
	}	
}


window.onload = init();

function moveYaAss (){
	var elem = document.getElementById("starWarsWrapper");
	var pos = 0;
	var id = setInterval(frame,5);
	function frame() {

			pos++;
			elem.style.top = "-"+ pos + 'px';
	
	}


}