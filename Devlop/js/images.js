// navbar function
// variable
// var nav = $("#navbar-nav");
// var burger = $("#burger");
// var appear = $(".appear");

// const navAppear = () => {
//      burger.on('click', () => {
//         console.log("help");
//         $(nav).toggleClass("appear", appear);
//      });
// }

// navAppear();

var nav = document.getElementById("navbar-nav");
var burger = document.getElementById("burger");
var appear = document.querySelector(".appear");

burger.addEventListener("click", function () {
    console.log("help");
    nav.classList.toggle("appear");

});


// lightbox function
// Variables
var modal = document.getElementById("back");
var span = document.querySelector("#close");
var images = document.querySelector(".image");
var modalImg = document.querySelector(".modal-content");
var content = document.querySelector("#content");
var nav = document.querySelector("#main-header");

// Event delegation for images
const parent = document.querySelector(".container");

parent.addEventListener("click", event => {
  if(event.target.className === "image") {
  console.log(event.target)
  modal.style.display = "block";
  //if you console.log(this) -> returns the whole window object which has no src value
  //using event.target can make us target exactly what we need
  modalImg.src = event.target.src;
  content.classList.remove("hide");
  span.classList.remove("hide");
  }
  })

// When the user clicks on (x), close the modal
span.addEventListener("click",() => {
    modal.style.display = "none";
    content.classList.add("hide");
    nav.classList.add("hide");
});