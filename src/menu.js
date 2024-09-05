
let contentDiv = document.querySelector("#content");
const menuLeftContainer = document.createElement("div");
const menuRightContainer = document.createElement("div");

const coffees = [
    {
      name: 'Espresso',
      xp: 150,
      description: 'Strong and bold, the perfect energy boost in a single shot'
    },
    {
      name: 'Americano',
      xp: 180,
      description: 'Espresso diluted with hot water for a smooth, rich flavor'
    },
    {
      name: 'Cappuccino',
      xp: 200,
      description: 'Espresso with steamed milk and a thick layer of foam'
    },
    {
        name: 'Iced Coffee',
        xp: 170,
        description: 'Chilled coffee served over ice, perfect for a refreshing pick-me-up'
      },
  ];
  

  const pizzas = [
    {
      name: 'Classic Margherita',
      xp: 600,
      description: 'Fresh mozzarella, tomatoes, and basil on a crispy crust'
    },
    {
      name: 'Pepperoni Paradise',
      xp: 650,
      description: 'Pepperoni slices on melted mozzarella with zesty marinara sauce'
    },
    {
      name: 'Veggie Delight',
      xp: 620,
      description: 'Bell peppers, onions, olives, and mushrooms with a touch of oregano'
    },
    {
      name: 'BBQ Chicken Pizza',
      xp: 700,
      description: 'Grilled chicken, tangy BBQ sauce, and red onions on a cheese-filled base'
    }
  ];

  const sandwiches = [
    {
      name: 'Classic Club',
      xp: 500,
      description: 'Triple-layered sandwich with turkey, bacon, lettuce, and tomato on toasted bread'
    },
    {
      name: 'Grilled Cheese Supreme',
      xp: 450,
      description: 'Melted cheddar and mozzarella on toasted sourdough, served golden and crispy'
    },
    {
      name: 'Chicken Pesto Panini',
      xp: 550,
      description: 'Grilled chicken, pesto, and mozzarella pressed between crunchy ciabatta'
    },
    {
      name: 'Avocado BLT',
      xp: 520,
      description: 'Bacon, lettuce, tomato, and avocado on whole wheat bread'
    }
  ];
  


  const cocktails = [
    {
      name: 'Whimsy Mojito',
      xp: 600,
      description: 'Fresh mint, lime, rum, and a splash of soda for a refreshing sip'
    },
    {
      name: 'Sunset Sangria',
      xp: 650,
      description: 'A fruity blend of wine, fresh berries, and citrus slices'
    },
    {
      name: 'Café Colada',
      xp: 700,
      description: 'An exciting mix of coconut cream, pineapple, and a shot of espresso'
    },
    {
      name: 'Berry Bliss Martini',
      xp: 680,
      description: 'A smooth cocktail with vodka, mixed berries, and a twist of lemon'
    }
  ];
  



  function appendCoffeeInfo() {
    const coffeesHeading = document.createElement("h2");
    coffeesHeading.textContent = "Coffees";
    const ul = document.createElement("ul");
    
    coffees.forEach(coffee => {
        const li = document.createElement('li');
        li.innerHTML = `${coffee.name} - ${coffee.xp}<br>${coffee.description}`;
        ul.appendChild(li);
    });

    menuLeftContainer.appendChild(coffeesHeading);
    menuLeftContainer.appendChild(ul);
    contentDiv.appendChild(menuLeftContainer);
  };



  function appendPizzaInfo() {
    const pizzasHeading = document.createElement("h2");
    pizzasHeading.textContent = "Pizzas";
    const ul = document.createElement("ul");
    
    pizzas.forEach(pizza => {
        const li = document.createElement('li');
        li.innerHTML = `${pizza.name} - ${pizza.xp}<br>${pizza.description}`;
        ul.appendChild(li);
    });

    menuLeftContainer.appendChild(pizzasHeading);
    menuLeftContainer.appendChild(ul);
    contentDiv.appendChild(menuLeftContainer);

  }




  function appendSandwichInfo() {
    const sandwichesHeading = document.createElement("h2");
    sandwichesHeading.textContent = "Sandwiches";
    
    const ul = document.createElement("ul");
  
    sandwiches.forEach(sandwich => {
      const li = document.createElement('li');
      li.innerHTML = `${sandwich.name} - ${sandwich.xp}<br>${sandwich.description}`;
      ul.appendChild(li);
    });
  
    menuRightContainer.appendChild(sandwichesHeading);
    menuRightContainer.appendChild(ul);
    contentDiv.appendChild(menuRightContainer);
  }



  
  function appendCocktailInfo() {
    const cocktailsHeading = document.createElement("h2");
    cocktailsHeading.textContent = "Cocktails";
    
    const ul = document.createElement("ul");
  
    cocktails.forEach(cocktail => {
      const li = document.createElement('li');
      li.innerHTML = `${cocktail.name} - ${cocktail.xp}<br>${cocktail.description}`;
      ul.appendChild(li);
    });
  
    menuRightContainer.appendChild(cocktailsHeading);
    menuRightContainer.appendChild(ul);
    contentDiv.appendChild(menuRightContainer);
  }
  
  



function onMenuClick() {
    contentDiv.textContent = "";
    menuRightContainer.textContent = "";
    menuLeftContainer.textContent = "";

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Xplozion's Café Menu";

    contentDiv.appendChild(menuHeading);

    appendCoffeeInfo();
    appendPizzaInfo();
    appendSandwichInfo();
    appendCocktailInfo();

}

export {onMenuClick};