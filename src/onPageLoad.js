import coffeeShopImage from "./images/coffee-shop-image.jpg"


const contentDiv = document.querySelector("#content");

function onPageLoad() {

    contentDiv.innerHTML = "";
    // document.body.style.backgroundColor = "tomato";
    const homePageHeading = document.createElement("h1");
    const homePageSubHeading = document.createElement("h2");
    const homePageParagraph = document.createElement("p");
    const homePageImage = document.createElement("img");
    homePageImage.style.width = "20vw";
    homePageImage.style.height = "40vh";

    
    homePageHeading.textContent = "Welcome to Xplozion's Café!"
    homePageSubHeading.textContent = "Your Ultimate Coffee Adventure Awaits";
    homePageParagraph.textContent = "Step into Xplozion Café, where every sip is an explosion of flavor! Dive into our electrifying brews and vibrant atmosphere, designed to energize your day and ignite your senses.";
    homePageImage.src = coffeeShopImage;


    contentDiv.appendChild(homePageHeading);
    contentDiv.appendChild(homePageSubHeading);
    contentDiv.appendChild(homePageParagraph);
    contentDiv.appendChild(homePageImage);

 }



 export {onPageLoad};



 