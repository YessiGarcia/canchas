var botonCancha= document.getElementById("botonCancha");
var futbol=document.getElementById("futbol");
var basquet=document.getElementById("basquet");
var tenis=document.getElementById("tenis");

botonCancha.addEventListener("change", verCancha);

function verCancha (){
	switch(this.value){
		case "0":
			futbol.setAttribute("hidden", true);
			basquet.setAttribute("hidden" , true);
			tenis.setAttribute("hidden", true);
			break;
		case "1":
			futbol.removeAttribute("hidden");
			basquet.setAttribute("hidden" , true);
			tenis. setAttribute("hidden", true);
			break;
		case "2":
			basquet.removeAttribute("hidden");
			futbol.setAttribute("hidden", true);
			tenis.setAttribute("hidden", true);
			break;
		case "3":
			tenis.removeAttribute("hidden");
			futbol.setAttribute("hidden", true);
			basquet.setAttribute("hidden" , true);
			break;
	}
}
