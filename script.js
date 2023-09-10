const TextElement = document.querySelector(".text")
const texttoType = "Hello , this is a typewriter!";

let index = 0;

function typetext(){
    if(index<texttoType.length){
        TextElement.textContent += texttoType[index];
        index++;
        setTimeout(typetext,100)
    }
}

typetext();