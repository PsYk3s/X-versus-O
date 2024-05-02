const blocks = document.querySelectorAll(".block");
const heading = document.getElementById("heading");
const winnerRef = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
const wrapper = document.getElementById("wrapper");
const resetGame = document.getElementById("reset");

let whosTurn = "x";
let turn = 1;
let gameOver = false;

Array.from(blocks).forEach(element => element.addEventListener("click", () => {
   
    if (!element.innerText && gameOver === false) {
        element.innerText = whosTurn;
        whosTurn === "x"? whosTurn = "o": whosTurn = "x";
        turn++;
        };

    for (let i = 0; i < winnerRef.length; i++) {
        if ( blocks[(winnerRef[i][0])-1].innerText === blocks[(winnerRef[i][1])-1].innerText && 
             blocks[(winnerRef[i][1])-1].innerText === blocks[(winnerRef[i][2])-1].innerText && 
             blocks[(winnerRef[i][0])-1].innerText !== "" ) {
            heading.innerText = `${blocks[(winnerRef[i][0])-1].innerText.toUpperCase()} is the Winner!`
            gameOver = true;
            resetGame.innerHTML = `<button type="submit" onclick="reset()">Play Again?</button>`
            return
            };
        };

    if (turn > 9) {
        heading.textContent = "No winner";
        resetGame.innerHTML = `<button type="submit" onclick="reset()">Play Again?</button>`
        };
}));

const reset = () => {
    for ( let i = 0; i < blocks.length; i++) {
        blocks[i].innerText = " "
        };
    heading.innerText = "X versus O"
    resetGame.innerHTML = "";
    whosTurn = "x";
    turn = 1;
    gameOver = false;
    };


