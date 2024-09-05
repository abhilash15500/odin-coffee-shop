import coffeeShopImage from "./images/coffee-shop-image.jpg"
const contentDiv = document.querySelector("#content");



function onPageLoad() {
    
    const homePageContainer = document.createElement("div");
    homePageContainer.classList.add("home-page-container");

    contentDiv.innerHTML = "";
    const homeLeftContainer = document.createElement("div");
    const homeRightContainer = document.createElement("div");

    homeLeftContainer.classList.add("home-left-container");
    homeRightContainer.classList.add("home-right-container");

    homeLeftContainer.innerHTML = "";
    homeRightContainer.innerHTML = "";

    
    // document.body.style.backgroundColor = "tomato";
    const homePageHeading = document.createElement("h1");
    homePageHeading.classList.add("homepage-h1")

    const homePageSubHeading = document.createElement("h2");
    const homePageParagraph = document.createElement("p");
    const homePageImage = document.createElement("img");
    // homePageImage.style.width = "20vw";
    // homePageImage.style.height = "40vh";
    homePageImage.classList.add("home-page-image")


    homePageHeading.textContent = "Welcome to Xplozion's Cafe!"
    homePageSubHeading.textContent = "Your Ultimate Coffee Adventure Awaits";
    homePageParagraph.textContent = "Welcome to Xplozion Cafe, where every sip is an exhilarating journey into a world of vibrant flavors and energizing experiences! Immerse yourself in our dynamic brews, crafted to deliver an explosion of taste that awakens your senses and revitalizes your spirit";
    homePageImage.src = coffeeShopImage;
    homePageImage.classList.add("home-page-image");


    homeLeftContainer.appendChild(homePageHeading);
    homeLeftContainer.appendChild(homePageSubHeading);
    homeLeftContainer.appendChild(homePageParagraph);
    homeRightContainer.appendChild(homePageImage);

    homePageContainer.appendChild(homeLeftContainer);
    homePageContainer.appendChild(homeRightContainer);

    contentDiv.appendChild(homePageContainer);

    
 }



 export {onPageLoad};



 