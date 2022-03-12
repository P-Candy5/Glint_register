let inputHolder = document.querySelectorAll("input");
let passHold = document.querySelector("input[type='password']");
let check = document.querySelector("input[placeholder='Confirm Password']");
const place = document.querySelector(".show");

function clickable() {
  let passwordHolder = passHold.value;
  let checkPassword = check.value;

  if (passwordHolder === checkPassword) {
    place = "";
  } else {
    place.innerText = "Incorrect Password";
  }

  console.log(place);
}
