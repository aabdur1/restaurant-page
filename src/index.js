import "./style.css";
import header from "./header.js";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

document.body.appendChild(header());
document.body.appendChild(home());

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

const title = document.querySelector(".header-title-wrapper");
title.addEventListener("click", function () {
  document.body.lastElementChild.remove();
  document.body.appendChild(home());
  const viewFullMenu = document.querySelector(".home-view-menu");
  viewFullMenu.addEventListener("click", function () {
    document.body.lastElementChild.remove();
    document.body.appendChild(menu());
  });
});

const viewFullMenu = document.querySelector(".home-view-menu");
viewFullMenu.addEventListener("click", function () {
  document.body.lastElementChild.remove();
  document.body.appendChild(menu());
});

homeBtn.addEventListener("click", function () {
  document.body.lastElementChild.remove();
  document.body.appendChild(home());
  const viewFullMenu = document.querySelector(".home-view-menu");
  viewFullMenu.addEventListener("click", function () {
    document.body.lastElementChild.remove();
    document.body.appendChild(menu());
  });
});

menuBtn.addEventListener("click", function () {
  document.body.lastElementChild.remove();
  document.body.appendChild(menu());
});

aboutBtn.addEventListener("click", function () {
  document.body.lastElementChild.remove();
  document.body.appendChild(about());
  const viewFullMenu = document.querySelector(".home-view-menu");
  viewFullMenu.addEventListener("click", function () {
    document.body.lastElementChild.remove();
    document.body.appendChild(menu());
  });
});
