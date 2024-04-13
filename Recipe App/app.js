let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");

let url="https://www.themealdb.com/api/json/v1/1/search.php?s="
searchBtn.addEventListener('click',()=>{
    let userInp = document.getElementById('user-inp').value;
    if(userInp.length == 0){
        result.innerText="Input field is empty";
    }
    else{
        food(userInp);
    }
})
async function food(userInp){
    let response = await fetch(url+`${userInp}`);
    let data = await response.json();
    if(data.meals==null){
        let notAvailable = document.createElement('div');
        notAvailable.classList.add("unavailable");
        notAvailable.innerText="Recipe not available";
        result.appendChild(notAvailable); 
        return;
    }
    
    console.log(data);
    let myMeal = data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strInstructions);
    let count=1;
    let ingredients = [];
    for(let i in myMeal){
        let ingredient = "";
        let measure = ""
        if(i.startsWith("strIngredient") && myMeal[i]){
            ingredient=myMeal[i];
            measure = myMeal[`strMeasure` +count];
            count++;
            ingredients.push(`${measure} ${ingredient}`)
        }
    }
    console.log(ingredients);
    result.innerHTML = `<img src="${myMeal.strMealThumb}">
        <div class="details">
            <h1>${myMeal.strMeal}</h1>
            <h4>${myMeal.strArea}</h4>
        </div>
        <div id="ingredient-con">

        </div>
        <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>

        </div>
        <button id="show-recipe">View Recipe</button>
    `;
    let ingredientCon = document.getElementById('ingredient-con');
    let parent = document.createElement('ul');
    let recipe = document.getElementById('recipe');
    let hideRecipe = document.getElementById("hide-recipe");
    let showRecipe = document.getElementById("show-recipe");

    // result.innerHTML=`<img src=${myMeal.strMealThumb} alt="">`
    ingredients.forEach((i)=>{
        let child = document.createElement('li');
        child.innerText=i;
        parent.appendChild(child);
        ingredientCon.appendChild(parent);  
    })
    hideRecipe.addEventListener('click',()=>{
        recipe.style.display="none";
    })
    showRecipe.addEventListener('click',()=>{
        recipe.style.display="block";
    })
}
