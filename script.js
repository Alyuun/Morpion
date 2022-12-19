window.addEventListener("DOMContentLoaded", () => {
// récupération des div du html pour les insérer dans 3 tableaux qui représentent 3 lignes de 3 cases chaccase1s
let firstColumnTab = document.getElementsByClassName("firstLine");
let secondColumnTab = document.getElementsByClassName("secondLine");
let thirdColumnTad = document.getElementsByClassName("thirdLine");
let nbTours = 0;

let case1 = document.getElementById("1");
let case2 = document.getElementById("2");
let case3 = document.getElementById("3");
let case4 = document.getElementById("4");
let case5 = document.getElementById("5");
let case6 = document.getElementById("6");
let case7 = document.getElementById("7");
let case8 = document.getElementById("8");
let case9 = document.getElementById("9");

let startPlayer = " ";

console.log(firstColumnTab);
// création des 2 variables player
let xPlayer = "X";
let oPlayer = "O";

/*for (let i = 0; i < 9; i++) {
    xPlayer = 0;
    oPlayer = 1;
}*/

function quiCommence() {
    startPlayer = Math.floor(Math.random() * (3 - 1) + 1)
    if (startPlayer === 1) {
        startPlayer = xPlayer;
    } else if (startPlayer === 2) {
        startPlayer = oPlayer;
    }
}

quiCommence();
console.log(`C'est joueur ${startPlayer} qui commence !`)

let cases = document.getElementsByClassName("container")
console.log(cases)

cases.addEventListener("click", () => {
    if (actualPlayer = XPlayer) {
        
    }
})

if ((case1 === "x" && case2 === "x" && case3 === "x") || (case4 === "x" && case5 === "x" && case6 === "x") || (case7 === "x" && case8 === "x" && case9 === "x") || (case1 === "x" && case4 === "x" && case7 === "x") || (case2 === "x" && case5 === "x" && case8 === "x") || (case3 === "x" && case6 === "x" && case9 === "x")) {
    alert("Jouer X tu as gagné");
} else if ((case1 === "o" && case2 === "o" && case3 === "o") || (case4 === "o" && case5 === "o" && case6 === "o") || (case7 === "o" && case8 === "o" && case9 === "o") || (case1 === "o" && case4 === "o" && case7 === "o") || (case2 === "o" && case5 === "o" && case8 === "o") || (case3 === "o" && case6 === "o" && case9 === "o")) {
    alert("Joueur O tu as gagné")
}

// 
    
    
    
    
    
    
    
    
    
    
    
    
button = document.getElementById("button");
button.addEventListener("click", ()=> {
    
})
    
})


// Joueur X ou O qui commence aléatoirement. Quand je clique sur une case si c'est joueur X la case innerHTML X si c'est joueur O la case innerHTML O
// si 3 cases de suite sont X alors joueur X a gagné 
// si 3 cases de suite sont O alors joueur O a gagné

