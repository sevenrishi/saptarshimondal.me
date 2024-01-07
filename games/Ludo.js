// game Constants
const BOARD_SIZE = 15; // Number of tiles per row/column
const PLAYER_COUNT = 4; // Number of players

// Initialize game
let currentPlayer = 1;
let players = [];
let diceResult = 0;

// Create Players
for (let i = 1; i <= PLAYER_COUNT; i++) {
  players.push({
    id: i,
    color: getColorById(i),
    tiles: [],
    // Add additional player-specific properties if needed
  });
}

// Generate Board
const board = document.getElementById('board');

for (let row = 0; row < BOARD_SIZE; row++) {
  for (let col = 0; col < BOARD_SIZE; col++) {
    const tile = document.createElement('div');
    tile.classList.add('ludo-tile');
    tile.dataset.row = row;
    tile.dataset.col = col;
    board.appendChild(tile);
  }
}

// Add Event Listeners
const tiles = document.getElementsByClassName('ludo-tile');
for (let tile of tiles) {
  tile.addEventListener('click', handleTileClick);
}

// Handle Tile Click
function handleTileClick(event) {
  const { row, col } = event.target.dataset;
  // Handle tile click logic here
}

// Helper function to get color by player id
function getColorById(id) {
  switch (id) {
    case 1:
      return 'red';
    case 2:
      return 'green';
    case 3:
      return 'yellow';
    case 4:
      return 'blue';
    default:
      return 'black';
  }
}
