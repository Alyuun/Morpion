window.addEventListener("DOMContentLoaded", () => {
// récupération des div du html pour les insérer dans 3 tableaux qui représentent 3 lignes de 3 cases chacuns
let firstColumnTab = document.getElementsByClassName("firstLine");
let secondColumnTab = document.getElementsByClassName("secondLine");
let thirdColumnTad = document.getElementsByClassName("thirdLine");

let un = document.getElementById("1");
let deux = document.getElementById("2");
let trois = document.getElementById("3");
let quatre = document.getElementById("4");
let cinq = document.getElementById("5");
let six = document.getElementById("6");
let sept = document.getElementById("7");
let huit = document.getElementById("8");
let neuf = document.getElementById("9");

console.log(firstColumnTab);
// création des 2 variables player
let xPlayer = "";
let oPlayer = "";

/*for (let i = 0; i < 9; i++) {
    xPlayer = 0;
    oPlayer = 1;
}*/



if ((un === "x" && deux === "x" && trois === "x") || (quatre === "x" && cinq === "x" && six === "x") || (sept === "x" && huit === "x" && neuf === "x") || (un === "x" && quatre === "x" && sept === "x") || (deux === "x" && cinq === "x" && huit === "x") || (trois === "x" && six === "x" && neuf === "x")) {
    alert("Jouer X tu as gagné");
} else if ((un === "o" && deux === "o" && trois === "o") || (quatre === "o" && cinq === "o" && six === "o") || (sept === "o" && huit === "o" && neuf === "o") || (un === "o" && quatre === "o" && sept === "o") || (deux === "o" && cinq === "o" && huit === "o") || (trois === "o" && six === "o" && neuf === "o")) {
    alert("Joueur O tu as gagné")
}

    
    
    
    
    
    
    
    
    
    
    
    
    
button = document.getElementById("button");
button.addEventListener("click", ()=> {
    
})
    
})
