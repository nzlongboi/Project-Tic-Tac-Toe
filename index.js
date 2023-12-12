const playingBoard = document.getElementById('game-board');
const displayCurrentPlayer = document.getElementById('current-player');
let currentPlayer = 1;




/*gameboard object*/

const gameBoardObject = (function() {
    let gameBoardArray = [];

    /*generate gameboard*/
    for (let i = 0; i < 9; i++) {
        const playingSpace = document.createElement('div');
        playingSpace.style.border = '1px solid black';
        playingSpace.style.boxSizing = 'border-box';
        playingSpace.style.textAlign = 'center';
        playingSpace.style.fontSize = '140px';
        playingSpace.onclick = () => {
            if (playingSpace.innerText == 'X' || playingSpace.innerText == 'O') {
                alert('This space is already taken.');
                return;
            }
            playingSpace.innerText = 'X';
            if (displayCurrentPlayer.innerText == '1') {
                displayCurrentPlayer.innerText = '2';
            } else if (displayCurrentPlayer.innerText == '2') {
                displayCurrentPlayer.innerText = '1';
            }
            if (displayCurrentPlayer.innerText =='2') {
                playingSpace.innerText = 'O';
            }

        }
        playingBoard.appendChild(playingSpace);
    }

})();

const player1 = (function() {
    const playerToken = 'X';
})();


const player2 = (function() {
    const playerToken = 'O';
})();


const gameLogic = (function() {



})();