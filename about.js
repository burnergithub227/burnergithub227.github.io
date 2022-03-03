firsttier = document.getElementById("firsttier");
firsttier.addEventListener('click', confirmation);

function confirmation() {
    answer = confirm("Are you sure?")
    if (answer) {
        open("mahay.html", "_self")
    }
}