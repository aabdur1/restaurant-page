import Croissant from "./images/menu/croissant.jpg";
import Croque from "./images/menu/croque.jpg";
import Pain from "./images/menu/pain.jpg";
import Mont from "./images/menu/mont.jpg";

function createMenuItem(imageSrc, altText, label, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = altText;
  img.classList.add("menu-img");
  menuItem.appendChild(img);

  const menuItemText = document.createElement("div");
  menuItemText.classList.add("menu-text");
  menuItem.appendChild(menuItemText);

  const itemLabel = document.createElement("p");
  itemLabel.classList.add("menu-label");
  itemLabel.textContent = label;
  menuItemText.appendChild(itemLabel);

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("menu-description");
  itemDescription.textContent = description;
  menuItemText.appendChild(itemDescription);

  return menuItem;
}

function menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-wrapper");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Our signature pastries:";
  menu.appendChild(menuTitle);

  const items = [
    {
      image: Croissant,
      alt: "Pablo’s Purrfect Croissant",
      label: "Pablo’s Purrfect Croissant",
      description:
        "Classic, buttery, and flaky, made with artisanal butter and a touch of feline grace.",
    },
    {
      image: Croque,
      alt: "Cat’s Croque Monsieur",
      label: "Cat’s Croque Monsieur",
      description:
        "Gourmet ham and cheese sandwich, with a béchamel sauce and a crispy topping.",
    },
    {
      image: Pain,
      alt: "Chocolat Almond Purrfection",
      label: "Chocolat Almond Purrfection",
      description:
        "A luxurious twist on the traditional pain au chocolat, filled with rich chocolate and sprinkled with toasted almonds.",
    },
    {
      image: Mont,
      alt: "Apple Jam Mont Blanc Claw",
      label: "Apple Jam Mont Blanc Claw",
      description:
        "A delectable pastry inspired by the classic Mont Blanc, featuring sweet apple jam, creamy chestnut purée, and a delicate whipped cream topping, crafted to resemble a cat’s claw.",
    },
  ];

  items.forEach((item) => {
    menu.appendChild(
      createMenuItem(item.image, item.alt, item.label, item.description)
    );
  });

  return menu;
}

export default menu;
