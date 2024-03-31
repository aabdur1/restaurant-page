import Logo from "./images/logo.png";
import Flag from "./images/flag.png";

function header() {
  const header = document.createElement("header");
  header.classList.add("header");
  const headerTitleWrapper = document.createElement("div");
  headerTitleWrapper.classList.add("header-title-wrapper");
  header.appendChild(headerTitleWrapper);
  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("header-title");
  headerTitle.textContent = "Pablo's Patisserie";
  headerTitleWrapper.appendChild(headerTitle);
  const flag = document.createElement("img");
  flag.src = Flag;
  flag.alt = "Flag of France";
  flag.classList.add("header-flag");
  headerTitleWrapper.appendChild(flag);
  const logo = document.createElement("img");
  logo.src = Logo;
  logo.alt = "Logo";
  logo.classList.add("logo");
  header.appendChild(logo);
  const nav = document.createElement("nav");
  nav.classList.add("header-nav");
  header.appendChild(nav);
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.classList.add("home-btn");
  homeBtn.textContent = "Home";
  nav.appendChild(homeBtn);
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Menu";
  nav.appendChild(menuBtn);
  const aboutBtn = document.createElement("button");
  aboutBtn.classList.add("nav-btn");
  aboutBtn.classList.add("about-btn");
  aboutBtn.textContent = "About us";
  nav.appendChild(aboutBtn);
  return header;
}

export default header;
