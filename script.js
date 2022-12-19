window.addEventListener("DOMContentLoaded", () => {
// récupération des div du html pour les insérer dans 3 tableaux qui représentent 3 lignes de 3 cases chaccase1s
let nbTours = 0;
let gameTab = document.getElementsByClassName("gameTab");
let actualPlayer = "";

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

for (nbTours = 1; nbTours < 9; nbTours++){
    actualPlayer
}

console.log(firstColumnTab);
// création des 2 variables player
let xPlayer = "X";
let oPlayer = "O";

// Joueur X ou O qui commence aléatoirement
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

//  Quand je clique sur une case si c'est joueur X la case innerHTML X si c'est joueur O la case innerHTML O

function play(zone){
    if (actualPlayer === xPlayer) {
        
    }
}
    
    
    
    
// bouton reset pour relancer le jeu  
button = document.getElementById("button");
button.addEventListener("click", ()=> {
    
})
    
})