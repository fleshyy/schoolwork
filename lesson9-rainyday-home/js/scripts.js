function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = fulldate;

const friday = now.getDay();
const fridayDiv = document.querySelector(".event")

if (friday != 5) {
    fridayDiv.style.display = 'none';
}