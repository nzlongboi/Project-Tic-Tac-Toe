const playingBoard = document.getElementById('game-board');
const displayCurrentPlayer = document.getElementById('current-player');
let currentPlayer = 1;




/*gameboard object*/

const gameBoardObject = (function() {
    let gameBoardArray = [];
    const playingSpace = document.querySelectorAll('.playing-space');
    
    playingSpace.forEach(space => {
        space.onclick = () => {
            if (space.innerText == 'X' || space.innerText == 'O') {
                alert('This space is already taken.');
                return;
            }

            const currentPlayer = displayCurrentPlayer.innerText;

            if (currentPlayer === '1') {
                space.innerText = 'X';
            } else if (currentPlayer === '2') {
                space.innerText = 'O';
            }
            

            displayCurrentPlayer.innerText = currentPlayer === '1' ? '2' : '1';
        };

        space.style.fontSize = '140px';
        space.style.textAlign = 'center';
    });
})();

const player1 = (function() {
    const playerToken = 'X';
})();


const player2 = (function() {
    const playerToken = 'O';
})();


const gameLogic = (function() {



})();