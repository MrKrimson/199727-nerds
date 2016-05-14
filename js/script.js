var write_us = document.querySelector(".btn--contacts");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

write_us.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
