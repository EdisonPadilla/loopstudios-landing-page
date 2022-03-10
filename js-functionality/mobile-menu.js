"use strict";

const d = document;
const menu_button = d.querySelector(".ham-btn");
const bars = d.querySelectorAll(".ham-btn span");
const header = d.querySelector("header");
const menu = d.querySelector(".nav-menu");

menu_button.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  header.classList.toggle("change-background");
  bars.forEach((child) => {
    console.log(child);
    child.classList.toggle("animation");
  });
});
