  const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const restartBtn = document.getElementById('restart');

    let boardState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    function handleCellClick(e) {
      const clickedCell = e.target;
      const index = parseInt(clickedCell.getAttribute('data-index'));

      if (boardState[index] !== '' || !gameActive) {
        return;
      }

      updateCell(clickedCell, index);
      checkResult();
    }

    function updateCell(cell, index) {
      boardState[index] = currentPlayer;
      cell.textContent = currentPlayer;
    }

    function switchPlayer() {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `Player ${currentPlayer}'s turn`;
    }

    function checkResult() {
      let roundWon = false;

      for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (
          boardState[a] &&
          boardState[a] === boardState[b] &&
          boardState[a] === boardState[c]
        ) {
          roundWon = true;
          break;
        }
      }

      if (roundWon) {
        status.textContent = `Player ${currentPlayer} wins! 🎉`;
        gameActive = false;
        return;
      }

      if (!boardState.includes('')) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
      }

      switchPlayer();
    }

    function restartGame() {
      boardState = ['', '', '', '', '', '', '', '', ''];
      gameActive = true;
      currentPlayer = 'X';
      status.textContent = `Player ${currentPlayer}'s turn`;
      cells.forEach(cell => (cell.textContent = ''));
    }

    
    status.textContent = `Player ${currentPlayer}'s turn`;

    
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartBtn.addEventListener('click', restartGame);