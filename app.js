function searchMealData() {
    const searchButton = document.getElementById("food-item");
    document.getElementById('displayMeal').innerHTML = "";
    document.getElementById('foodDetails').innerHTML = "";
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchButton.value;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            // console.log(data);
            displayMeal(data);
        })
}

function displayMeal(data) {
    data.meals.forEach(food => {
        const mealsDiv = document.createElement("div");
        mealsDiv.classList.add("card", "mealsCard", "col-3", "m-2", "p-2", "mt-4", "rounded-3");
        mealsDiv.style.width = '23%';
        mealsDiv.innerHTML = `
        <a href="#" style="text-decoration: none;">
            <img src="${food.strMealThumb}" class="card-img-top">
            <div class="card-body text-center bg-light">
                <h3 class="card-text">${food.strMeal}</h3>
            </div>
        </a>
        `;
        document.getElementById("displayMeal").appendChild(mealsDiv);
    });
}