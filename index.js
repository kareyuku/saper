const saperGame = require('./Saper/game')

// Class Constructor options (height, width, bombsCout)
const saperBoard = new saperGame(9, 9, 6);

// You can easily access or change width, height or bombs count using .width .height .bombs
saperBoard.height = 9;
saperBoard.width = 9;
saperBoard.bombs = 6;

// To reload board you can use generateBoard()
saperBoard.generateBoard() // That function also returning objects with fields on the board

// To get array with board you can use getBoard()
const actualBoard = saperBoard.getBoard();
console.log(actualBoard)

// And last thing is showBoard() which gonna show you board in console
saperBoard.showBoard();
