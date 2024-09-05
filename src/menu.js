
let contentDiv = document.querySelector("#content");
const menuLeftContainer = document.createElement("div");
const menuRightContainer = document.createElement("div");
const menuContainer = document.createElement("div");

menuContainer.classList.add("menu-container");
menuLeftContainer.classList.add("menu-left-container");
menuRightContainer.classList.add("menu-right-container");

const coffees = [
    {
        name: 'Espresso',
        xp: '150 XP',
        description: 'Strong and bold, the perfect energy boost in a single shot'
    },
    {
        name: 'Americano',
        xp: '180 XP',
        description: 'Espresso diluted with hot water for a smooth, rich flavor'
    },
    {
        name: 'Cappuccino',
        xp: '200 XP',
        description: 'Espresso with steamed milk and a thick layer of foam'
    },
    {
        name: 'Iced Coffee',
        xp: '170 XP',
        description: 'Chilled coffee served over ice, perfect for a refreshing pick-me-up'
    },
];

const pizzas = [
    {
        name: 'Classic Margherita',
        xp: '600 XP',
        description: 'Fresh mozzarella, tomatoes, and basil on a crispy crust'
    },
    {
        name: 'Pepperoni Paradise',
        xp: '650 XP',
        description: 'Pepperoni slices on melted mozzarella with zesty marinara sauce'
    },
    {
        name: 'Veggie Delight',
        xp: '620 XP',
        description: 'Bell peppers, onions, olives, and mushrooms with a touch of oregano'
    },
    {
        name: 'BBQ Chicken Pizza',
        xp: '700 XP',
        description: 'Grilled chicken, tangy BBQ sauce, and red onions on a cheese-filled base'
    }
];

const sandwiches = [
    {
        name: 'Classic Club',
        xp: '500 XP',
        description: 'Triple-layered sandwich with turkey, bacon, lettuce, and tomato on toasted bread'
    },
    {
        name: 'Grilled Cheese Supreme',
        xp: '450 XP',
        description: 'Melted cheddar and mozzarella on toasted sourdough, served golden and crispy'
    },
    {
        name: 'Chicken Pesto Panini',
        xp: '550 XP',
        description: 'Grilled chicken, pesto, and mozzarella pressed between crunchy ciabatta'
    },
    {
        name: 'Avocado BLT',
        xp: '520 XP',
        description: 'Bacon, lettuce, tomato, and avocado on whole wheat bread'
    }
];

const cocktails = [
    {
        name: 'Whimsy Mojito',
        xp: '600 XP',
        description: 'Fresh mint, lime, rum, and a splash of soda for a refreshing sip'
    },
    {
        name: 'Sunset Sangria',
        xp: '650 XP',
        description: 'A fruity blend of wine, fresh berries, and citrus slices'
    },
    {
        name: 'Cafe Colada',
        xp: '700 XP',
        description: 'An exciting mix of coconut cream, pineapple, and a shot of espresso'
    },
    {
        name: 'Berry Bliss Martini',
        xp: '680 XP',
        description: 'A smooth cocktail with vodka, mixed berries, and a twist of lemon'
    }
];


function onMenuClick() {
    contentDiv.textContent = "";
    menuRightContainer.textContent = "";
    menuLeftContainer.textContent = "";

    const menuHeading = document.createElement("h1");
    menuHeading.classList.add("menu-heading");
    menuHeading.textContent = "Xplozion's Cafe Menu";

    contentDiv.appendChild(menuHeading);

    appendCoffeeInfo();
    appendPizzaInfo();
    appendSandwichInfo();
    appendCocktailInfo();

}


function appendCoffeeInfo() {
    const coffeesHeading = document.createElement("h2");
    coffeesHeading.textContent = "Coffees ☕";
    const ul = document.createElement("ul");

    coffees.forEach(coffee => {
        const li = document.createElement('li');
        li.innerHTML = `${coffee.name} - ${coffee.xp}<br>${coffee.description}`;
        ul.appendChild(li);
    });

    menuLeftContainer.appendChild(coffeesHeading);
    menuLeftContainer.appendChild(ul);




    menuContainer.appendChild(menuLeftContainer);
    contentDiv.appendChild(menuContainer);
};



function appendPizzaInfo() {
    const pizzasHeading = document.createElement("h2");
    pizzasHeading.textContent = "Pizzas 🍕";
    const ul = document.createElement("ul");

    pizzas.forEach(pizza => {
        const li = document.createElement('li');
        li.innerHTML = `${pizza.name} - ${pizza.xp}<br>${pizza.description}`;
        ul.appendChild(li);
    });

    menuLeftContainer.appendChild(pizzasHeading);
    menuLeftContainer.appendChild(ul);

    menuContainer.appendChild(menuLeftContainer);
    contentDiv.appendChild(menuContainer);

}




function appendSandwichInfo() {
    const sandwichesHeading = document.createElement("h2");
    sandwichesHeading.textContent = "Sandwiches 🥪 ";


    const ul = document.createElement("ul");

    sandwiches.forEach(sandwich => {
        const li = document.createElement('li');
        li.innerHTML = `${sandwich.name} - ${sandwich.xp}<br>${sandwich.description}`;
        ul.appendChild(li);
    });

    menuRightContainer.appendChild(sandwichesHeading);
    menuRightContainer.appendChild(ul);

    menuContainer.appendChild(menuRightContainer);
    contentDiv.appendChild(menuContainer);
}




function appendCocktailInfo() {
    const cocktailsHeading = document.createElement("h2");
    cocktailsHeading.textContent = "Cocktails 🍹";

    const ul = document.createElement("ul");

    cocktails.forEach(cocktail => {
        const li = document.createElement('li');
        li.innerHTML = `${cocktail.name} - ${cocktail.xp}<br>${cocktail.description}`;
        ul.appendChild(li);
    });

    menuRightContainer.appendChild(cocktailsHeading);
    menuRightContainer.appendChild(ul);

    menuContainer.appendChild(menuRightContainer);
    contentDiv.appendChild(menuContainer);
}






export { onMenuClick };