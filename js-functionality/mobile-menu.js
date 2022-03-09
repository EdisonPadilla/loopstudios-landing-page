"use strict";

const d = document;
const menu_button = d.querySelector(".ham-btn");
const bars = d.querySelectorAll(".ham-btn span");
console.log(bars);
const menu = d.querySelector(".nav-menu");
console.log(menu);
const nav = d.querySelector("header nav");
console.log(nav);
menu_button.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  nav.classList.toggle("change-background");
  bars.forEach((child) => {
    console.log(child);
    child.classList.toggle("animation");
  });
});
