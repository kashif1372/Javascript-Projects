const text = document.querySelector(".text");
const author = document.querySelector(".author");
const next_btn = document.querySelector(".next-btn");
var rnum="";

var realData = "";
const getNewQuotes = ()=>{
    rnum = Math.floor(Math.random()*100);
    text.innerHTML = realData[rnum].text;
    if(realData[rnum].author == null){
        author.innerHTML = "Unknown";
    }else{
        author.innerHTML = realData[rnum].author;
    }

    next_btn.addEventListener("click",getNewQuotes);
    
}
const getQoutes = async ()=>{
    const api = "https://type.fit/api/quotes";
    let data = await fetch(api);
    realData = await data.json();

    getNewQuotes();
}

getQoutes();

console.log(realData[rnum].text)
console.log(realData[rnum].author)

