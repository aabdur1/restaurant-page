import PabloImg from "./images/pablo.png";

function about() {
  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("about-wrapper");

  // About
  const section = document.createElement("section");
  aboutWrapper.appendChild(section);

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

  // Hours
  const hoursWrapper = document.createElement("div");
  hoursWrapper.classList.add("hours-wrapper");
  aboutWrapper.appendChild(hoursWrapper);

  const hoursHeader = document.createElement("h1");
  hoursHeader.classList.add("hours-header");
  hoursHeader.textContent = "Hours of Operation";
  hoursWrapper.appendChild(hoursHeader);

  const hoursTues = document.createElement("p");
  hoursTues.classList.add("hours");
  hoursTues.textContent = "- Tuesday to Friday: 7:00 AM - 6:00 PM";
  hoursWrapper.appendChild(hoursTues);

  const hoursSat = document.createElement("p");
  hoursSat.classList.add("hours");
  hoursSat.textContent = "- Saturday and Sunday: 8:00 AM - 4:00 PM";
  hoursWrapper.appendChild(hoursSat);

  const hoursMon = document.createElement("p");
  hoursMon.classList.add("hours");
  hoursMon.textContent = "* Closed on Mondays";
  hoursWrapper.appendChild(hoursMon);

  const location1 = document.createElement("p");
  location1.classList.add("location1");
  location1.textContent = "43 Whisker Way";
  hoursWrapper.appendChild(location1);

  const location2 = document.createElement("p");
  location2.classList.add("location2");
  location2.textContent = "Meowdor, Catatonia 60607";
  hoursWrapper.appendChild(location2);

  const viewMenu = document.createElement("p");
  viewMenu.classList.add("home-view-menu");
  viewMenu.textContent = "View full menu →";
  hoursWrapper.appendChild(viewMenu);

  // Disclaimer
  const disclaimerWrapper = document.createElement("div");
  disclaimerWrapper.classList.add("disclaimer-wrapper");
  aboutWrapper.appendChild(disclaimerWrapper);

  const disclaimerTitle = document.createElement("h1");
  disclaimerTitle.classList.add("disclaimer-title");
  disclaimerTitle.textContent = "Our Cherished Chef is a Cat";
  disclaimerWrapper.appendChild(disclaimerTitle);

  const disclaimer1 = document.createElement("p");
  disclaimer1.classList.add("disclaimer-text");
  disclaimer1.textContent =
    "At Pablo's Patisserie, our unique charm is not just in our pastries but in our beloved head chef, Pablo—a culinary genius who happens to be an orange tabby cat. Inspired by his adventures and equipped with unparalleled baking skills, Pablo has brought his dream of a patisserie to life.";
  disclaimerWrapper.appendChild(disclaimer1);

  const disclaimer2 = document.createElement("p");
  disclaimer2.classList.add("disclaimer-text");
  disclaimer2.textContent =
    "We understand and respect individual health concerns and preferences. Please be aware that while Pablo oversees the culinary creations and inspires our recipes, he does so under the strictest hygiene standards and without direct contact with the food served. However, if you have cat allergies or are uncomfortable with the concept of a feline chef, we advise you to consider this before visiting or placing an order.";
  disclaimerWrapper.appendChild(disclaimer2);

  const disclaimer3 = document.createElement("p");
  disclaimer3.classList.add("disclaimer-text");
  disclaimer3.textContent =
    "Your health, comfort, and satisfaction are our top priorities. We welcome any questions or concerns you may have regarding our practices. Thank you for your understanding and support in making Pablo's Patisserie a unique and inclusive experience for everyone.";
  disclaimerWrapper.appendChild(disclaimer3);

  return aboutWrapper;
}

export default about;
