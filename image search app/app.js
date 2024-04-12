let accessKey = "LxL4nFKdJjfX0zimpLuSQN5VwAXn3MUyDszIE5a12t4";

const formEl = document.querySelector('form');
const inputEl = document.querySelector('#search-input');
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById('show-more-button');

let inputData = "";
let page = 1;

async function searchImage(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if(page===1){
        searchResults.innerHTML = "";
    }
    results.map((result)=>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const link = document.createElement('a');
        link.href = result.links.html;
        link.target = "_blank";
        link.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(link);
        searchResults.appendChild(imageWrapper);

    });
    page++;
    if(page>1){
        showMore.style.display = 'block';
    }
}
formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
});
showMore.addEventListener('click',(e)=>{
    
    searchImage();
});

