import Croissant from "./images/menu/croissant.jpg";
import Dough from "./images/menu/dough.jpg";
import Oven from "./images/menu/oven.jpg";
import TextDecoration from "./images/text-decoration.png";

function home() {
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");
  const homeImgWrapper = document.createElement("div");
  homeImgWrapper.classList.add("home-img-wrapper");
  homeWrapper.appendChild(homeImgWrapper);
  const doughImg = document.createElement("img");
  doughImg.src = Dough;
  doughImg.alt = "Kneading the dough";
  doughImg.classList.add("dough-img");
  homeImgWrapper.appendChild(doughImg);
  const ovenImg = document.createElement("img");
  ovenImg.src = Oven;
  ovenImg.alt = "Into the oven";
  ovenImg.classList.add("oven-img");
  homeImgWrapper.appendChild(ovenImg);
  const croissantImg = document.createElement("img");
  croissantImg.src = Croissant;
  croissantImg.alt = "Pablo’s Perfect Croissant";
  croissantImg.classList.add("croissant-img");
  homeImgWrapper.appendChild(croissantImg);
  const homeText = document.createElement("div");
  homeText.classList.add("home-content-wrapper");
  homeWrapper.appendChild(homeText);
  const homeTitle = document.createElement("h1");
  homeTitle.classList.add("home-title");
  homeTitle.textContent = "Welcome to Pablo’s Patisserie";
  homeText.appendChild(homeTitle);
  const homeTextContent = document.createElement("p");
  homeTextContent.classList.add("home-text-content");
  homeTextContent.textContent =
    "At Pablo’s Patisserie, every item is a masterpiece of flavor and artistry, promising an experience that’s as delightful as it is delicious. Enjoy the essence of Parisian chic combined with the warmth of a cozy cat nap. Welcome to our little slice of heaven, where the pastries are as sweet as Pablo’s purrs.";
  homeText.appendChild(homeTextContent);
  const textDecoration = document.createElement("img");
  textDecoration.src = TextDecoration;
  textDecoration.classList.add("home-text-decoration");
  homeText.appendChild(textDecoration);
  const viewMenu = document.createElement("p");
  viewMenu.classList.add("home-view-menu");
  viewMenu.textContent = "View full menu →";
  homeText.appendChild(viewMenu);
  return homeWrapper;
}

export default home;
