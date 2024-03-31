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
  title.textContent = "Our story";
  title.className = "title";
  mainWrapper.appendChild(title);
  const aboutSnippet = document.createElement("p");
  aboutSnippet.textContent =
    "Nestled in a cozy corner of town, Pablo’s Patisserie was opened in 2017 by Chef Pablo, not just any baker, but a whisk-wielding, adventurous orange tabby cat with a dream. Inspired by his escapades through Paris’s famed patisseries, Pablo vowed to sprinkle a bit of that French magic into every crumb of his creations. Pablo’s Patisserie isn’t simply a bakery; it’s a testament to a cat’s journey from curious wanderer to purveyor of fine pastries, bringing a slice of Parisian charm and a warm, welcoming nook for everyone to enjoy. Here, each treat is crafted with love and a pawful of Paris, making every visit a delightful adventure.";
  aboutSnippet.className = "about";
  mainWrapper.appendChild(aboutSnippet);
  return section;
}

export default mainSection;
