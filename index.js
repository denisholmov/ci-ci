const nodeInputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");

export function exponentiation(a, b){
    if(a===0 || b===0){
        return 1;
    }

    return a**b;
}

nodeBtn.addEventListener("click", ()=>{
    console.log(exponentiation(nodeInputOne.value, nodeInputTwo.value));
});

