var botonCancha= document.getElementById("botonCancha");
var botonBalon = document.getElementById("botonBalon");
botonCancha.addEventListener("change", verCancha);
botonBalon.addEventListener("change", verBalon);

function verCancha (){
var futbol=document.getElementById("futbol");
var basquet=document.getElementById("basquet");
var tenis=document.getElementById("tenis");

	switch(this.value){
		case "0":
			futbol.setAttribute("hidden", true);
			basquet.setAttribute("hidden", true);
			tenis.setAttribute("hidden", true);
			break;
		case "1":
			futbol.removeAttribute("hidden");
			basquet.setAttribute("hidden", true);
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
			basquet.setAttribute("hidden", true);
			break;
	}
}

function verBalon() {
var balonFut = document.getElementById("balonFut");
var balonBasquet = document.getElementById("balonBasquet");
var pelotaTenis = document.getElementById("pelotaTenis");

	switch(this.value){
		case "0":
			balonFut.setAttribute("hidden", true);
			balonBasquet.setAttribute("hidden", true);
			pelotaTenis.setAttribute("hidden", true);
			break;
		case "1":
			balonFut.removeAttribute("hidden");
			balonBasquet.setAttribute("hidden", true);
			pelotaTenis.setAttribute("hidden", true);
			break;
		case "2":
			balonBasquet.removeAttribute("hidden");
			balonFut.setAttribute("hidden", true);
			pelotaTenis.setAttribute("hidden", true);
			break;
		case "3":
			pelotaTenis.removeAttribute("hidden");
			balonFut.setAttribute("hidden", true);
			balonBasquet.setAttribute("hidden", true);
			break;
	}
}

