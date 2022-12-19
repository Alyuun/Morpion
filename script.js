document.addEventListener("DOMContentLoaded", () => {
    // récupération des div du html pour les insérer dans 3 tableaux qui représentent 3 lignes de 3 cases chaccase1s
    let nbTours = 0;
    let gameTab = document.getElementsByClassName("gameTab");
    let startPlayer = "";
    let carre = document.getElementsByClassName("carre");

    let case1 = document.getElementById("0");
    let case2 = document.getElementById("1");
    let case3 = document.getElementById("2");
    let case4 = document.getElementById("3");
    let case5 = document.getElementById("4");
    let case6 = document.getElementById("5");
    let case7 = document.getElementById("6");
    let case8 = document.getElementById("7");
    let case9 = document.getElementById("8");

    let tableau = [case1, case2, case3, case4, case5, case6, case7, case8, case9]
    let verifTab = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function verif() {
        if (verifTab[0]) {
            console.log('dede');
        }
    }

    verif();

    tableau.forEach(element => element.addEventListener("click", () => {
        console.log("test")
        if (element.innerText === "" && startPlayer === xPlayer) {
            element.innerText = "X"
            startPlayer = oPlayer;
        }
        else if (element.innerText === "" && startPlayer === oPlayer) {
            element.innerText = "O";
            startPlayer = xPlayer;
        }
    }))

    // création des 2 variables player
    let xPlayer = "X";
    let oPlayer = "O";

    // Joueur X ou O qui commence aléatoirement
    function quiCommence() {
        startPlayer = Math.floor(Math.random() * (3 - 1) + 1)
        if (startPlayer === 1) {
            startPlayer = xPlayer;
        }
        else if (startPlayer === 2) {
            startPlayer = oPlayer;
        }
    }

    quiCommence();
    console.log(`C'est joueur ${startPlayer} qui commence !`)

    //  Quand je clique sur une case si c'est joueur X la case innerHTML X si c'est joueur O la case innerHTML O

    /*function play(zone){
        if (startPlayer === xPlayer) {
            if (document.getElementById(zone).className.indexOf("occupé") >= 0){
                alert("Case déjà occupée veuillez en choisir une autre");
            } else {
                document.getElementById(zone).innerHTML = 'X';
                document.getElementById(zone).className += "occupé";
                startPlayer = oPlayer;
            }
        }  else if (startPlayer === oPlayer){
        if (document.getElementById(zone).className.indexOf("occupé") >=0){
            alert("Case déjà occupée veuillez en choisir une autre");
        } else {
            document.getElementById(zone).innerHTML = 'O';
            document.getElementById(zone).className += "occupé";
            startPlayer = xPlayer;
        }
    }
    }

    play();*/



    // bouton reset pour relancer le jeu  
    button = document.getElementById("button");
    button.addEventListener("click", () => {

    })

})

//  zdklcvghpoQHJOPLODFBGHDQOKLQqsdrgfolmjy35WEIRTU