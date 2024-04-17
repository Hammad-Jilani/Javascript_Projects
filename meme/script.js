const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke(){
    let response = await fetch(url);
    let data = await response.json();
    jokeContainer.innerText = data.joke;
    console.log(data.joke);
}
btn.addEventListener('click',()=>{
    getJoke();
})