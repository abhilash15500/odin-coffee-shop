import coffeeShopImage3 from "./images/about-us-image.jpg";

const contentDiv = document.querySelector("#content");

function onAboutUsClick() {
    contentDiv.textContent = "";

    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.classList.add("aboutus-container");

    const aboutUsLeftContainer = document.createElement("div");
    aboutUsLeftContainer.classList.add("aboutus-left");

    const aboutUsHeading = document.createElement("h1");
    aboutUsHeading.classList.add("aboutus-heading");
    const aboutUsParagraph = document.createElement("p");
    aboutUsParagraph.classList.add("aboutus-paragraph");

    aboutUsHeading.textContent = "Our Story!";
    aboutUsParagraph.textContent = "Xplozion Café was founded 5 years ago by Mini Xplozion, a passionate barista with a flair for creating unique coffee blends. After traveling through various countries and learning the art of coffee-making from master roasters, Mini Xplozion returned to their hometown with a dream: to open a café where people from all walks of life could enjoy handcrafted brews.";

    aboutUsLeftContainer.appendChild(aboutUsHeading);
    aboutUsLeftContainer.appendChild(aboutUsParagraph);

    const aboutUsRightContainer = document.createElement("div");
    aboutUsRightContainer.classList.add("aboutus-right");

    const aboutUsImage = document.createElement("img");
    aboutUsImage.classList.add("aboutus-image");
    aboutUsImage.style.width = "40vw";
    aboutUsImage.style.height = "60vh";

    aboutUsImage.src = coffeeShopImage3;

    aboutUsRightContainer.appendChild(aboutUsImage);

    aboutUsContainer.appendChild(aboutUsLeftContainer);
    aboutUsContainer.appendChild(aboutUsRightContainer);

    contentDiv.appendChild(aboutUsContainer);
}

export { onAboutUsClick };
