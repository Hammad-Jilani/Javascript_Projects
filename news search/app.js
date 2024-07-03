const apiKey ="d0d9604461ea471dbcee157e195d97cd";
const container =document.getElementById('blog-container');

async function fetchRand(){
    try {
        
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${apiKey}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        const blogCard = document.querySelectorAll('.blog-card');
        // blogCard[0].children[0].src = data.articles[0].urlToImage;
        // blogCard[1].children[0].src = data.articles[1].urlToImage
        let i=0;
        blogCard.forEach((blog)=>{
            while(data.articles[i].urlToImage == null){
                i++;
            }
            blog.children[0].src = data.articles[i].urlToImage;
            blog.children[1].innerHTML = `<h2>${data.articles[i].title}</h2>`
            blog.children[2].innerHTML = `<p>${data.articles[i].description}</p>`
            i++;
            blog.addEventListener('click',()=>{
                window.open(data.articles[i].url,"_blank")
            })
        })
        
    } catch (error) {
        console.log("Error fetching",error);
        return [];
    }
}
fetchRand();

const btn = document.getElementById("search-button");
const input = document.getElementById("search-input");
btn.addEventListener('click',()=>{
    fetchRand1(input.value);
})

async function fetchRand1(query){
    try {
        
        const apiURL = `https://newsapi.org/v2/everything?q=${query}&pageSize=20&sortBy=publishedAt&apiKey=${apiKey}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        const blogCard = document.querySelectorAll('.blog-card');
        // blogCard[0].children[0].src = data.articles[0].urlToImage;
        // blogCard[1].children[0].src = data.articles[1].urlToImage
        let i=0;
        blogCard.forEach((blog)=>{
            while(data.articles[i].urlToImage == null){
                i++;
            }
            blog.children[0].src = data.articles[i].urlToImage;
            blog.children[1].innerHTML = `<h2>${data.articles[i].title}</h2>`
            blog.children[2].innerHTML = `<p>${data.articles[i].description}</p>`
            i++;
            blog.addEventListener('click',()=>{
                window.open(data.articles[i].url,"_blank")
            })
        })
        
    } catch (error) {
        console.log("Error fetching",error);
        return [];
    }
}