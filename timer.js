// countdown time
var time = 61;

// Update every second
var x = setInterval(function() {

// remove seconds
 time = time -  1;
console.log(time);

//identify time
document.getElementById("timer").innerHTML = time;

// change color for last 10 secondes
if (time < 11) {
    document.getElementById("timer").style.color = "red";
}

// print text after time has ended
if (time < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "SOLD OUT";
}
}, 1000);