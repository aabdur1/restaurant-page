import MenuLeft from "./images/menu-left.png";
import MenuRight from "./images/menu-right.png";
import Croissant from "./images/menu/croissant.jpg";
import Croque from "./images/menu/croque.jpg";
import Pain from "./images/menu/pain.jpg";
import Mont from "./images/menu/mont.jpg";
import Danish from "./images/menu/danish.jpg";
import Pastry from "./images/menu/pastry.jpg";

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

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  const menuLeft = document.createElement("img");
  menuLeft.src = MenuLeft;
  menuLeft.classList.add("menu-title-decoration");
  menuTitle.appendChild(menuLeft);
  const menuTitleText = document.createElement("h1");
  menuTitleText.classList.add("menu-title-text");
  menuTitleText.textContent = "Our signature pastries";
  menuTitle.appendChild(menuTitleText);
  const menuRight = document.createElement("img");
  menuRight.src = MenuRight;
  menuRight.classList.add("menu-title-decoration");
  menuTitle.appendChild(menuRight);
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
    {
      image: Danish,
      alt: "Spinach Feta Whisker Danish",
      label: "Spinach Feta Whisker Danish",
      description:
        "A savory delight, combining fresh spinach and creamy feta cheese in a flaky, buttery pastry",
    },
    {
      image: Pastry,
      alt: "Berry Bliss Paws",
      label: "Berry Bliss Paws",
      description:
        "Dive into the essence of summer with our Berry Bliss Paws, a delicate pastry brimming with a juicy mix of the season's finest berries. Topped with a sweet glaze and a dusting of sugar, this fruity creation is a vibrant tribute to the sun-drenched orchards that inspired Pablo. Perfect for a light, refreshing treat.",
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
