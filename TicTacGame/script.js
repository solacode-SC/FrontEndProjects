
let getPlayerName1 = document.getElementById('player1');
let getPlayerName2 = document.getElementById('player2');

let player1 = {
    name: '',
    score: 0,
};

let player2 = {
    name: '',
    score: 0,
};

let putPlayerName1 = document.getElementById('putPlayerName1');
let putPlayerName2 = document.getElementById('putPlayerName2');
let roundVal = document.getElementById('roundVal');
let insertInfoDiv = document.getElementById('insertInfoDiv');
function putNames() {
    putPlayerName1.innerHTML = player1.name;
    putPlayerName2.innerHTML = player2.name;
    roundVal.innerHTML = 0;
}

function startGame() {
    player1.name = getPlayerName1.value;
    player2.name = getPlayerName2.value;
    putNames();
    insertInfoDiv.style.display = 'none';
    console.log(player1.name);
    console.log("hola");
}