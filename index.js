const playingBoard = document.getElementById('game-board');

/*gameboard object*/

const gameBoardObject = (function() {
    let gameBoardArray = [];

    /*generate gameboard*/
    for (let i = 0; i < 9; i++) {
        const playingSpace = document.createElement('div');
        playingSpace.style.border = '1px solid black';
        playingSpace.style.boxSizing = 'border-box';

        playingBoard.appendChild(playingSpace);
    }

})();

const player1 = (function() {
    const playerToken = 'X';
})();


const player2 = (function() {
    const playerToken = 'O';
})();