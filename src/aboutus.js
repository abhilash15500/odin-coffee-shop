import coffeeShopImage3 from "./images/about-us-image.jpg";

const contentDiv = document.querySelector("#content");



function onAboutUsClick() {
    contentDiv.textContent = "";

    const aboutUsLeftContainer = document.createElement("div");

    const aboutUsHeading = document.createElement("h1");
    const aboutUsParagraph = document.createElement("p");

    aboutUsHeading.textContent = "Our Story!";
    aboutUsParagraph.textContent = "Xplozion Café was founded 5 years ago by Mini Xplozion, a passionate barista with a flair for creating unique coffee blends. After traveling through various countries and learning the art of coffee-making from master roasters, Mini Xplozion returned to their hometown with a dream: to open a café where people from all walks of life could enjoy handcrafted brews.";



    aboutUsLeftContainer.appendChild(aboutUsHeading);
    aboutUsLeftContainer.appendChild(aboutUsParagraph);



    const aboutUsRightContainer = document.createElement("div");

    const aboutUsImage = document.createElement("img");
    aboutUsImage.style.width = "40vw";
    aboutUsImage.style.height = "60vh";


    aboutUsImage.src = coffeeShopImage3;

    aboutUsRightContainer.appendChild(aboutUsImage);
   

    contentDiv.appendChild(aboutUsLeftContainer);
    contentDiv.appendChild(aboutUsRightContainer);
}


export {onAboutUsClick};