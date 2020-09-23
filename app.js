const searchBtn = document.querySelector(".search-icon--desktop");
const modalDiv = document.querySelector(".search-modal");

searchBtn.addEventListener("click", showModal);

function showModal() {
  modalDiv.classList.toggle("showModal");
}
