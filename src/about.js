import PabloImg from "./images/pablo.png";

function mainSection() {
  const section = document.createElement("section");
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");
  section.appendChild(imgWrapper);
  const pabloImg = new Image();
  pabloImg.src = PabloImg;
  pabloImg.alt = "Pablo licking his lips";
  pabloImg.classList.add("pabloImg");
  imgWrapper.appendChild(pabloImg);
  const pabloImgLabel = document.createElement("label");
  pabloImgLabel.for = pabloImg;
  pabloImgLabel.classList.add("pablo-img-label");
  pabloImgLabel.textContent = "Chef Pablo";
  imgWrapper.appendChild(pabloImgLabel);
  const mainWrapper = document.createElement("div");
  mainWrapper.className = "main-wrapper";
  section.appendChild(mainWrapper);
  const title = document.createElement("h1");
  title.textContent = "Pablo's Patisserie";
  title.className = "title";
  mainWrapper.appendChild(title);
  const aboutSnippet = document.createElement("p");
  aboutSnippet.textContent =
    "Welcome to Pablo’s Patisserie, where our friendly orange tabby cat, Pablo, crafts delectable treats that blend Parisian elegance with a cozy, community vibe. Inspired by his love for fine pastries and equipped with a whisk, a bowl, and a dream, Pablo brings to life a menu of handcrafted delights—from buttery croissants to delicate macarons. At Pablo’s Patisserie, we’re more than just a bakery; we’re a gathering place for warmth, laughter, and the sweet aroma of baking. Join us for a slice of heaven and a touch of cat magic, where every bite tells a story of passion, tradition, and the joy of sharing.";
  aboutSnippet.className = "about";
  mainWrapper.appendChild(aboutSnippet);
  return section;
}

export default mainSection;
