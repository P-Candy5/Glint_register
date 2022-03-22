function get(ele) {
  return document.querySelector(ele);
}

const burg = get(".burg");
burg.style.cursor = "pointer";

burg.addEventListener("click", function () {
  get(".main-nav").classList.remove("slide-away");
});


const sign = get(".sign");

sign.addEventListener("click", function() {
get("main-nav").classList.remove("slide-in")
})