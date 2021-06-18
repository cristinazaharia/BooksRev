var titles = [];
var titleInput = document.getElementById("title");
var nameInput = document.getElementById("fn");
var messageBox = document.getElementById("display");
function Allow()
{
    if (!fn.value.match(/[a-zA-Z]$/) && (!fn.value.match(/[-]$/)) && (!fn.value.match(/[" "]$/)) && fn.value !="")
    {
        fn.value="";
        alert("Please enter only alphabets");
    }
}
function insert () {
    titles.push(nameInput.value);
    titles.push(titleInput.value);
    clearAndShow();
}
function clearAndShow ()
{
    nameInput.value = "";
    titleInput.value = "";
    messageBox.innerHTML = "";
    messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}