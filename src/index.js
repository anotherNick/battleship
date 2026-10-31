import "./styles.css";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";

const contentDiv = document.querySelector('#content');
contentDiv.append(homePage());

const homeBtn = document.querySelector('#home-button');
homeBtn.addEventListener('click', () => {
    contentDiv.replaceChildren(homePage());
});

const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', () => {
    contentDiv.replaceChildren(menuPage());
});

const aboutBtn = document.querySelector('#about-button');
aboutBtn.addEventListener('click', () => {
    contentDiv.replaceChildren(aboutPage());
});