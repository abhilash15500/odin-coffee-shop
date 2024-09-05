// alert("Its working!");

import { onPageLoad } from "./onPageLoad";
import { onHomeClick } from "./home";
import { onAboutUsClick } from "./aboutus";
import { onMenuClick } from "./menu";
import {cssFile} from "./styles.css";


onPageLoad();

document.querySelector("#home-btn").addEventListener("click",()=>{
    onHomeClick();
})

document.querySelector("#about-us-btn").addEventListener("click",()=>{
    onAboutUsClick();
})

document.querySelector("#menu-btn").addEventListener("click",()=>{
    onMenuClick();
})