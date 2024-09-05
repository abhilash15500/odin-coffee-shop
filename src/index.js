
import { onPageLoad } from "./onPageLoad";
import { onHomeClick } from "./home";
import { onAboutUsClick } from "./aboutus";
import { onMenuClick } from "./menu";
import {cssFile} from "./styles.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutUsbtn = document.querySelector("#about-us-btn");
const logo = document.querySelector("#logo");


onPageLoad();

homeBtn.addEventListener("click",()=>{
    onHomeClick();
    menuBtn.style.textDecoration = "none";
    aboutUsbtn.style.textDecoration = "none";
    homeBtn.style.textDecoration = "underline";
});

menuBtn.addEventListener("click",()=>{
    onMenuClick();
    aboutUsbtn.style.textDecoration = "none";
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "underline"; 
});

aboutUsbtn.addEventListener("click",()=>{
    onAboutUsClick();
    menuBtn.style.textDecoration = "none";
    homeBtn.style.textDecoration = "none";
    aboutUsbtn.style.textDecoration = "underline";
});

logo.addEventListener("click",()=>{
    onPageLoad();
    menuBtn.style.textDecoration = "none";
    homeBtn.style.textDecoration = "none";
    aboutUsbtn.style.textDecoration = "none";
});