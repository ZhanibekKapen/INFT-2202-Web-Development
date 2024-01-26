// const restratBtn;

// Fetch the element with a class name of main-container of a variable called mainContainer
const mainContainer = document.querySelector(".main-container");
let playerTurn = "X"; 

const squares = document.querySelectorAll('.box');

function clearBoard(){
    squares.forEach((square)=>square.innerText="");
}
mainContainer.addEventListener("click", (event) => {
    console.log("box "+ event.target.classList[2] + " was clicked");
    if (playerTurn == "X"){
        event.target.innerText = "X";
        playerTurn = "O";
    } else if (playerTurn == "O"){
        event.target.innerText = "O";
        playerTurn = "X";
    }    
    checkForWinner();
});    
// const squares = document.getElementByClassName("box");

function checkForWinner(){
    console.log(squares);
    console.log(squares[0].innerText);
    
    if (
        squares[0].innerText == "X" &&
        squares[1].innerText == "X" &&
        squares[2].innerText == "X" 
    ){
        alert("X won!!!");
        clearBoard();
    } else if (
        squares[3].innerText == "X" &&
        squares[4].innerText == "X" &&
        squares[5].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }else if (
        squares[6].innerText == "X" &&
        squares[7].innerText == "X" &&
        squares[8].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }else if (
        squares[0].innerText == "X" &&
        squares[3].innerText == "X" &&
        squares[6].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }else if (
        squares[1].innerText == "X" &&
        squares[4].innerText == "X" &&
        squares[7].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }else if (
        squares[2].innerText == "X" &&
        squares[5].innerText == "X" &&
        squares[8].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }
    else if (
        squares[0].innerText == "X" &&
        squares[4].innerText == "X" &&
        squares[8].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }
    else if (
        squares[2].innerText == "X" &&
        squares[4].innerText == "X" &&
        squares[6].innerText == "X" 
    )
    {
        alert('X won!!!');
        clearBoard();
    }
}
