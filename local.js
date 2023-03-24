function myDisplay() {
    document.getElementById('infos').innerHTML=(localStorage.getItem("review"));

window.onload =function() {
    document.getElementById("bb").onsubmit = store;
}
}