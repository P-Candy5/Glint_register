function get(ele) {
  return document.querySelector(ele);
}

const burg = get(".burg");
burg.style.cursor = "pointer";

burg.addEventListener("click", function () {
  get(".main-nav").classList.toggle("slide-away");
});

const sign = get(".sign");

sign.addEventListener("click", function () {
  get(".main-nav").classList.add("slide-away");
});
