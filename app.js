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
            mealDetails(data);
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


function mealDetails(data) {
    const addEvent = document.getElementById("displayMeal");
    addEvent.addEventListener('click', function () {
        document.getElementById('foodDetails').innerHTML = '';
        let i = 1
        const mealName = event.target.parentNode.innerText;
        data.meals.forEach(element => {
            if (element.strMeal === mealName) {
                const mealsDiv = document.createElement('div');
                mealsDiv.classList.add('card', 'foodCard', 'col-6', 'm-2', 'p-2', 'mt-6', 'rounded-7');
                mealsDiv.style.width = '20rem';
                mealsDiv.innerHTML = `
                    <img src=${element.strMealThumb} >
                    <div class="card-body">
                    <h3 class="card-text">${element.strMeal}</h3>
                    <ul id="ingredients">
                    </ul>
                    </div>`;
                document.getElementById('foodDetails').appendChild(mealsDiv);
                while (i != 10) {
                    let ingredient = 'strIngredient' + (i++);
                    if (element[ingredient] == '')
                        continue;
                    const itemNew = document.createElement('li');
                    itemNew.innerText = element[ingredient];
                    document.getElementById('ingredients').appendChild(itemNew);
                }
            }
        });
    })
}