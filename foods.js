// Retrieve the JSON data from the file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each item in the array
    data.foods.forEach(food => {
      // Create a new HTML element to display the food item
      if(food.category=="Pizza"){
      const foodElement = document.createElement('div');
      foodElement.innerHTML = `
      <div class="col-lg-4 menu-item">
        <a href=${food.img} class="glightbox"><img src=${food.img} class="menu-img img-fluid" alt=""></a>
        <h4>${food.name}</h4>
        <p class="ingredients">${food.description}</p>
        <p class="price">${food.price.toFixed(2)}</p>
      </div>
      `;
      // Add the HTML element to the output div
      const outputElement = document.getElementById('output');
      outputElement.appendChild(foodElement);
    }});
  });

            