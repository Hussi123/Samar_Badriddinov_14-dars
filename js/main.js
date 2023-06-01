const input=document.querySelector(".search-input");

console.log(input.value);

input.onkeyup= (element) =>{
    if(element.code==="Enter"){
        let url='https://www.google.com/search?q='+input.value;
        window.open(url, "_self");
        tozala()
    }
}

function tozala(){
    input.value="";
}
