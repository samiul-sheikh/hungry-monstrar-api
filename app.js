function searchMealData(){
    const searchButton = document.getElementById("food-item");
    document.getElementById('displayMeal').innerHTML = "";
    document.getElementById('foodDetails').innerHTML = "";
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchButton.value;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
    })
}