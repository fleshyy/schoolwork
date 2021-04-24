
const d = new Date();

const currentYear = d.getFullYear();

const modified = document.lastModified

document.getElementById('lastModified').textContent = modified;
document.querySelector('#currentYear').textContent = currentYear;
