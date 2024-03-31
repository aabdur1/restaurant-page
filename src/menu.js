import Croissant from "./images/menu/croissant.jpg";
import Croque from "./images/menu/croque.jpg";
import Pain from "./images/menu/pain.jpg";
import Mont from "./images/menu/mont.jpg";

function menu() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");
  // Menu title
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Our signature pastries:";
  menuWrapper.appendChild(menuTitle);

  // Croissant
  const menuCroissant = document.createElement("div");
  menuCroissant.classList.add("menu-item");
  menuWrapper.appendChild(menuCroissant);

  const croissantImg = document.createElement("img");
  croissantImg.src = Croissant;
  croissantImg.alt = "Pablo’s Purrfect Croissant";
  croissantImg.classList.add("menu-img");
  menuCroissant.appendChild(croissantImg);

  const menuCroissantText = document.createElement("div");
  menuCroissantText.classList.add("menu-text");
  menuCroissant.appendChild(menuCroissantText);

  const croissantLabel = document.createElement("p");
  croissantLabel.classList.add("menu-label");
  croissantLabel.textContent = "Pablo’s Purrfect Croissant";
  menuCroissantText.appendChild(croissantLabel);

  const croissantDescription = document.createElement("p");
  croissantDescription.classList.add("menu-description");
  croissantDescription.textContent =
    "Classic, buttery, and flaky, made with artisanal butter and a touch of feline grace.";
  menuCroissantText.appendChild(croissantDescription);

  // Croque Monsieur
  const menuCroque = document.createElement("div");
  menuCroque.classList.add("menu-item");
  menuWrapper.appendChild(menuCroque);

  const croqueImg = document.createElement("img");
  croqueImg.src = Croque;
  croqueImg.alt = "Cat’s Croque Monsieur";
  croqueImg.classList.add("menu-img");
  menuCroque.appendChild(croqueImg);

  const menuCroqueText = document.createElement("div");
  menuCroqueText.classList.add("menu-text");
  menuCroque.appendChild(menuCroqueText);

  const croqueLabel = document.createElement("p");
  croqueLabel.classList.add("menu-label");
  croqueLabel.textContent = "Cat’s Croque Monsieur";
  menuCroqueText.appendChild(croqueLabel);

  const croqueDescription = document.createElement("p");
  croqueDescription.classList.add("menu-description");
  croqueDescription.textContent =
    "Gourmet ham and cheese sandwich, with a béchamel sauce and a crispy topping.";
  menuCroqueText.appendChild(croqueDescription);

  // Pain au chocolat
  const menuPain = document.createElement("div");
  menuPain.classList.add("menu-item");
  menuWrapper.appendChild(menuPain);

  const painImg = document.createElement("img");
  painImg.src = Pain;
  painImg.alt = "Chocolat Almond Purrfection";
  painImg.classList.add("menu-img");
  menuPain.appendChild(painImg);

  const menuPainText = document.createElement("div");
  menuPainText.classList.add("menu-text");
  menuPain.appendChild(menuPainText);

  const painLabel = document.createElement("p");
  painLabel.classList.add("menu-label");
  painLabel.textContent = "Chocolat Almond Purrfection";
  menuPainText.appendChild(painLabel);

  const painDescription = document.createElement("p");
  painDescription.classList.add("menu-description");
  painDescription.textContent =
    "A luxurious twist on the traditional pain au chocolat, filled with rich chocolate and sprinkled with toasted almonds";
  menuPainText.appendChild(painDescription);

  // Mont blanc
  const menuMont = document.createElement("div");
  menuMont.classList.add("menu-item");
  menuWrapper.appendChild(menuMont);

  const montImg = document.createElement("img");
  montImg.src = Mont;
  montImg.alt = "Apple Jam Mont Blanc Claw";
  montImg.classList.add("menu-img");
  menuMont.appendChild(montImg);

  const menuMontText = document.createElement("div");
  menuMontText.classList.add("menu-text");
  menuMont.appendChild(menuMontText);

  const montLabel = document.createElement("p");
  montLabel.classList.add("menu-label");
  montLabel.textContent = "Apple Jam Mont Blanc Claw";
  menuMontText.appendChild(montLabel);

  const montDescription = document.createElement("p");
  montDescription.classList.add("menu-description");
  montDescription.textContent =
    "A delectable pastry inspired by the classic Mont Blanc, featuring sweet apple jam, creamy chestnut purée, and a delicate whipped cream topping, crafted to resemble a cat’s claw.";
  menuMontText.appendChild(montDescription);

  return menuWrapper;
}

export default menu;
