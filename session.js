function myDisplay1() {
    document.getElementById('info').innerHTML=(sessionStorage.getItem("name"));

    window.onload =function() {
        document.getElementById("bb").onsubmit = store;
    }
}