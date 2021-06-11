// $(document).ready(function () {
//   $(window).scroll(function () {
//     console.log($(window).scrollTop());
//
//     if ($(window).scrollTop() > 550) {
//       $("#nav_bar").addClass("navbar-fixed-top");
//     }
//
//     if ($(window).scrollTop() < 551) {
//       $("#nav_bar").removeClass("navbar-fixed-top");
//     }
//   });
// });

//Pop up modal
let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function () {
  modal.style.display = "block";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the window is clicked on, run this function with the click event
window.onclick = function (event) {
  // If the target of the click event is the modal background (not modal content), then hide the modal
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//pop up style running

//subscribe Button
