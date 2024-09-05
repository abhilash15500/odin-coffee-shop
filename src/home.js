import coffeeShopImage from "./images/coffee-shop-image.jpg";

const contentDiv = document.querySelector("#content");




function onHomeClick() {
    const homePageContainer = document.createElement("div");
    homePageContainer.classList.add("home-page-container");

    contentDiv.innerHTML = "";
    const homeLeftContainer = document.createElement("div");
    const homeRightContainer = document.createElement("div");

    homeLeftContainer.classList.add("home-left-container");
    homeRightContainer.classList.add("home-right-container");

    homeLeftContainer.innerHTML = "";
    homeRightContainer.innerHTML = "";

    
    
    const homePageHeading = document.createElement("h1");
    homePageHeading.classList.add("homepage-h1")

    const homePageSubHeading = document.createElement("h2");
    const homePageParagraph = document.createElement("p");
    const homePageImage = document.createElement("img");
    
    homePageImage.classList.add("home-page-image")


    homePageHeading.textContent = "Welcome to Xplozion's Cafe!"
    homePageSubHeading.textContent = "Your Ultimate Coffee Adventure Awaits";
    homePageParagraph.textContent = "Welcome to Xplozion Cafe, where every sip is an exhilarating journey into a world of vibrant flavors and energizing experiences! Immerse yourself in our dynamic brews, crafted to deliver an explosion of taste that awakens your senses and revitalizes your spirit";
    homePageImage.src = coffeeShopImage;
    homePageImage.classList.add("home-page-image");


    const homePageButton = document.createElement("button");
    homePageButton.textContent = "Book a table!";
    homePageButton.classList.add("home-page-button");


    homeLeftContainer.appendChild(homePageHeading);
    homeLeftContainer.appendChild(homePageSubHeading);
    homeLeftContainer.appendChild(homePageParagraph);
    homeRightContainer.appendChild(homePageImage);
    homeLeftContainer.appendChild(homePageButton);

    homePageContainer.appendChild(homeLeftContainer);
    homePageContainer.appendChild(homeRightContainer);

    contentDiv.appendChild(homePageContainer);
}


export { onHomeClick }