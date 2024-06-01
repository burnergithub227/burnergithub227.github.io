firsttier = document.getElementById("firsttier");
firsttier.addEventListener('click', confirmation);

function confirmation() {
    answer = confirm("Are you sure? Proceed if you have Mahay's consent.\nYou may want to consult with your lawyer first.");
    if (answer) {
        open("mahay.html", "_self");
    }
}