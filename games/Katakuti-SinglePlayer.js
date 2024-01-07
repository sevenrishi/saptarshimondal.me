const rows = document.querySelectorAll('.row');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let moves = 0;
let isSinglePlayerMode = true;


const resetButton = document.getElementById('reset-button');


cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

resetButton.addEventListener('click', () => {
  resetBoard();
});

function handleClick(e) {
  const cell = e.target;
  if (cell.classList.contains('X') || cell.classList.contains('O')) {
    return; // Skip if the cell is already occupied
  }
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);
  moves++;

  if (checkWin()) {
    highlightWinningMoves();
    if(currentPlayer==='X'){
      currentPlayer=1;
    }
    else if(currentPlayer==='O'){
      currentPlayer=2;
    }
    setTimeout(() => {
      alert('You win! \nPlease reset the game before play again.');
      resetBoard();
    }, 100);
    return;
  } else if (moves === 9) {
    setTimeout(() => {
      alert(`It's a draw! \nPlease reset the game before play again.`);
      resetBoard();
    }, 100);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  if (isSinglePlayerMode && currentPlayer === 'O' && moves < 9) {
    setTimeout(makeBotMove, 300); // Delay bot move for better user experience
  }
}

function makeBotMove() {
  const emptyCells = Array.from(cells).filter(cell => !cell.classList.contains('X') && !cell.classList.contains('O'));

  if (moves % 2 === 0) {
    // Player's turn (X)
    currentPlayer = 'X';
    return;
  } else {
    // Bot's turn (O)
    currentPlayer = 'O';

    const movesToCheck = [
      // Rows
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      // Columns
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      // Diagonals
      [0, 4, 8], [2, 4, 6]
    ];

    let botMoveFound = false;

    for (const move of movesToCheck) {
      const [cellIndex1, cellIndex2, cellIndex3] = move;
      const cell1 = cells[cellIndex1];
      const cell2 = cells[cellIndex2];
      const cell3 = cells[cellIndex3];

      // Check for winning move or gap move
      if (
        (cell1.classList.contains('X') && cell2.classList.contains('X') && !cell3.classList.contains('O')) ||
        (cell1.classList.contains('X') && cell3.classList.contains('X') && !cell2.classList.contains('O')) ||
        (cell2.classList.contains('X') && cell3.classList.contains('X') && !cell1.classList.contains('O')) ||
        (cell1.classList.contains('O') && cell2.classList.contains('O') && !cell3.classList.contains('X')) ||
        (cell1.classList.contains('O') && cell3.classList.contains('O') && !cell2.classList.contains('X')) ||
        (cell2.classList.contains('O') && cell3.classList.contains('O') && !cell1.classList.contains('X'))
      ) {
        // Found a winning move or gap move, place 'O' in the empty cell
        if (!cell3.classList.contains('X') && !cell3.classList.contains('O')) {
          cell3.textContent = currentPlayer;
          cell3.classList.add(currentPlayer);
          moves++;
          botMoveFound = true;
          break;
        } else if (!cell2.classList.contains('X') && !cell2.classList.contains('O')) {
          cell2.textContent = currentPlayer;
          cell2.classList.add(currentPlayer);
          moves++;
          botMoveFound = true;
          break;
        } else if (!cell1.classList.contains('X') && !cell1.classList.contains('O')) {
          cell1.textContent = currentPlayer;
          cell1.classList.add(currentPlayer);
          moves++;
          botMoveFound = true;
          break;
        }
      }
    }

    if (!botMoveFound) {
      // If no winning move or gap move found, make a random move
      if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const selectedCell = emptyCells[randomIndex];
        selectedCell.textContent = currentPlayer;
        selectedCell.classList.add(currentPlayer);
        moves++;
      }
    }

    if (checkWin()) {
      setTimeout(() => {
        if (currentPlayer === 'X') {
          alert('You win! \nPlease reset the game before play again.');
        } else {
          alert('Bot wins! \nPlease reset the game before play again.');
        }
        resetBoard();
      }, 100);
      return;
    } else if (moves === 9) {
      setTimeout(() => {
        alert(`It's a draw!`);
        resetBoard();
      }, 100);
      return;
    }

    currentPlayer = 'X';
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

function highlightWinningMoves() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (const combination of winningCombinations) {
    const [index1, index2, index3] = combination;
    const cell1 = cells[index1];
    const cell2 = cells[index2];
    const cell3 = cells[index3];

    if (
      cell1.classList.contains(currentPlayer) &&
      cell2.classList.contains(currentPlayer) &&
      cell3.classList.contains(currentPlayer)
    ) {
      const cell1Rect = cell1.getBoundingClientRect();
      const cell2Rect = cell2.getBoundingClientRect();
      const cell3Rect = cell3.getBoundingClientRect();

      const x1 = cell1Rect.left + cell1Rect.width / 2;
      const y1 = cell1Rect.top + cell1Rect.height / 2;
      const x2 = cell2Rect.left + cell2Rect.width / 2;
      const y2 = cell2Rect.top + cell2Rect.height / 2;
      const x3 = cell3Rect.left + cell3Rect.width / 2;
      const y3 = cell3Rect.top + cell3Rect.height / 2;

      const line = document.createElement('div');
      line.classList.add('winning-line');
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.width = `${Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)}px`;
      line.style.transformOrigin = 'left';
      line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
      document.body.appendChild(line);

      setTimeout(() => {
        line.style.width = `${Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2)}px`;
        line.style.transform = `rotate(${Math.atan2(y3 - y1, x3 - x1)}rad)`;
        setTimeout(() => {
          line.remove();
        }, 1000);
      }, 1000);
    }
  }
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O', 'winning-cell');
  });
  currentPlayer = 'X';
  moves = 0;
}

//Dark button

var darkbtn = document.getElementById("dark-btn");
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
moonIcon.style.display = 'none';
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme", "dark");
        moonIcon.style.display = 'inline-block';
        moonIcon.style.color = '#fff'
        sunIcon.style.display = 'none';
    }
    else{
        localStorage.setItem("theme", "light");
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        sunIcon.style.color = '';
    }
}

if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");

}
if(localStorage.setItem("theme", "light")){
    moonIcon.style.display = 'none';
}
else if(localStorage.setItem("theme", "dark")){
    sunIcon.style.display = 'none';
}
