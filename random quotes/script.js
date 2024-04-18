let quote = document.getElementById('quote');
let author = document.getElementById('author')
let btn = document.getElementById('btn')

const url ="https://api.quotable.io/random";

async function getQuote(){
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data.content);
    quote.innerText = data.content;
    author.innerText=data.author;
}
btn.addEventListener('click',()=>{
    getQuote();
})
