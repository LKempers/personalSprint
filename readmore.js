document.getElementById("readmore__button").addEventListener("click", readmore);
function readmore() {
	document.getElementById("more").style.display = "block";
	document.getElementById("readmore__button").remove();
}