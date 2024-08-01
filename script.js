"use strict";
const menu = document.querySelector(".bar-menu");
const navBar = document.querySelector(".nav-bar");
const header = document.querySelector(".navigation");
const links = document.querySelectorAll(".nav--link");
console.log(links);
menu.addEventListener("click", function (e) {
  // e.preventDefault();
  navBar.classList.toggle("open");
  header.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow");

  for (const key in links) {
    links[key].classList.toggle("querries");
  }
});
