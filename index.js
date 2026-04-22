import { exponentiation } from "./exponentiation.js";

const nodeInputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");



nodeBtn.addEventListener("click", ()=>{
    console.log(exponentiation(nodeInputOne.value, nodeInputTwo.value));
});

