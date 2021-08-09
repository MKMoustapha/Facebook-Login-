//javascript to show log when we click on facebook logo


var fac = document.getElementById("fac");
var log = document.getElementById("log");

fac.onclick = function() {
    fac.style.display = 'none';
    log.style.display = 'block';
}