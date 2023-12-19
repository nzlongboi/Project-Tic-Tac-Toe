const playingBoard = document.getElementById('game-board');
const displayCurrentPlayer = document.getElementById('current-player');
const playingSpace1 = document.getElementById('playing-space1');
const playingSpace2 = document.getElementById('playing-space2');
const playingSpace3 = document.getElementById('playing-space3');
const playingSpace4 = document.getElementById('playing-space4');
const playingSpace5 = document.getElementById('playing-space5');
const playingSpace6 = document.getElementById('playing-space6');
const playingSpace7 = document.getElementById('playing-space7');
const playingSpace8 = document.getElementById('playing-space8');
const playingSpace9 = document.getElementById('playing-space9');
const playingSpace = document.querySelectorAll('.playing-space');





/*gameboard object*/

const gameBoardObject = (function() {
    
    
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
            
            setTimeout(() => {
                checkWinCondition();
            }, 0);    
        };

        
        space.style.fontSize = '140px';
        space.style.textAlign = 'center';
    });

    
    function checkWinCondition() {
        const winConditions = [
            [playingSpace1, playingSpace2, playingSpace3],
            [playingSpace4, playingSpace5, playingSpace6],
            [playingSpace7, playingSpace8, playingSpace9],
            [playingSpace1, playingSpace4, playingSpace7],
            [playingSpace2, playingSpace5, playingSpace8],
            [playingSpace3, playingSpace6, playingSpace9],
            [playingSpace1, playingSpace5, playingSpace9],
            [playingSpace3, playingSpace5, playingSpace7]
        ];

        for (const condition of winConditions) {
            const [a, b, c] = condition;

            if (a.innerText === 'X' && b.innerText === 'X' && c.innerText === 'X') {
                alert('Player 1 wins');
                return;
            } else if (a.innerText === 'O' && b.innerText === 'O' && c.innerText === 'O') {
                alert('Player 2 wins');
                return;
            }
        }
    }

    

})();


(function() {
    const newGame = document.getElementById('new-game');

        newGame.onclick = () => {
            playingSpace.forEach(space => {
                space.innerText = '';
            });
        };
})();