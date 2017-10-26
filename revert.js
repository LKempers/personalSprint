function reverse_a_number(n)
{
	n = n + "";
	document.getElementsByClassName('photo__Left')[0].innerHTML= n.split("").reverse().join("");
}
