const squares = document.getElementsByClassName('space');
let whosTurn = 'X';
let gameOver = false;
let count = 0;

for(let i=0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
        markSquare(squares[i].id);
    });
}

// Create jsBoard to track inputs
let jsBoard = [["_","_","_"],["_","_","_"],["_","_","_"]];
//console.log(jsBoard);

function markSquare(squareID){
    // Check if user should enter an input
    if(jsBoard[squareID[2]][squareID[1]] !== "_" || gameOver || count > 9) return;

    // Mark the Board
    count++;
    jsBoard[squareID[2]][squareID[1]] = whosTurn;
    document.getElementById(squareID).innerHTML = whosTurn;

    // Check if Winner
    if(winner(squareID)){
        console.log("WINNER");
        gameOver = true;
        document.getElementById("messageDiv").innerHTML = "<h2>WINNER WINNER!!!</h2>";

    } else 
        // Switch User
        (whosTurn === "X") ? whosTurn="0" : whosTurn="X";
}

// col row
function winner(id){


    // Check current row
    let won = true;
    let row = [];
    for(let i = 0; i < jsBoard[0].length; i++){
        if(jsBoard[i][id[2]] !== whosTurn){
            won = false;
            break;
        }
    }
    if(won) return won;

    won = true;
    // Check current col for winner
    for(let i = 0; i < jsBoard[0].length; i++){
        if(jsBoard[id[1]][i] !== whosTurn){
            won = false;
            break;
       }
    }
    if(won) return won;


    won = true;
    // Check first Diagonal
    for(let i = 0; i < jsBoard[0].length; i++){
        if(jsBoard[i][i] !== whosTurn){
            won = false;
            break;
       }
    }
    if(won) return won;    


    won = true;
    // Check 2nd Diagonal
    for(let i = 2, j =0; j < jsBoard[0].length; i--, j++){
        if(jsBoard[i][j] !== whosTurn){
            won = false;
            break;
       }
    }
    if(won) return won;  
    return won;
}


