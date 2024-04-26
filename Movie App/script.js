let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');
let key = '55bfbf67';
// let getMovie=
async function getMovie(){
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=55bfbf67'
    if (movieName.length==0) {
        result.innerHTML = `<h3 class ="msg">Please enter a movie name</h3>`
    }
    else{
        let response = await fetch(url);
        let data = await response.json();
        if(data.Response == 'True'){
            console.log(data);
        result.innerHTML =
        `<div class="info">
            <img src=${data.Poster} class="poster">
            
            <div>
                <h2>${data.Title}</h2>
                <div class="rating">
                    <img src="star-icon.svg">
                    <h4>${data.imdbRating}</h4> 
                </div>
                <div class"details">
                    <span>Rating:${data.Rated}</span>
                    <span>Year : ${data.Year}</span>
                    <span>Duration:${data.Runtime}</span>
                </div>
                <div class="genre">
                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                </div>
            </div>
        </div>
        <h3>Plot:</h3>
        <p>${data.Plot}</p>
        <h3>Cast:</h3>
        <p>${data.Actors}</p>
        `
        }else{
            result.innerHTML = `<h3>No movie exist with this name</h3>`
        }
    }
}
searchBtn.addEventListener("click",getMovie);
window.addEventListener("load",getMovie);