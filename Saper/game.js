const findBomb = require('./utils')

class SaperGame {
    constructor(height, width, bombs) {
        if(isNaN(width) || width <= 0 ) return console.error('Board width should be more than 0!')
        if(isNaN(height) || height <= 0 ) return console.error('Board height should be more than 0!')
        if(isNaN(bombs) || bombs <= 0 ) return console.error('Board bombs count should be more than 0!')
        /// Game Options
        this.height = height
        this.width = width;
        this.bombs = bombs;

        this.board = []

        this.generateBoard()

    }
    generateBoard() {
        if(isNaN(this.width) || this.width <= 0 ) return console.error('Board width should be more than 0!')
        if(isNaN(this.height) || this.height <= 0 ) return console.error('Board height should be more than 0!')
        if(isNaN(this.bombs) || this.bombs <= 0 ) return console.error('Board bombs count should be more than 0!')
        this.board = [];
        // Generating Normal Fields
        for(let i = 1; i < this.height + 1; i++) {
            for(let x = 1; x < this.width + 1; x++) {
                this.board.push({ width: x, height: i, content: '🟫' })
            }
        }
        // Generating Bombs on Board
        for(let i = 0; i < this.bombs; i++ ) {
            let randomField = Math.floor(Math.random() * this.board.length)
            this.board[randomField].content = '💣'
        }
        // Finding bombs and adds counter how much bombs in area
        this.board.map((field, id) => {
            if(field.content != '🟫') return;
            this.board[id].content = findBomb(this.board, field)
        })

        return this.board;
    }
    showBoard() {
        let newBoard = [];
        for(let i = 0; i < this.height; i++) {
            this.board.filter( field => field.height == i).map(field => newBoard.push(field.content)) 
            newBoard.push('\n')
        }
        console.log(newBoard.join(''))
    }
    getBoard() {
        let newBoard = [];
        for(let i = 0; i < this.height; i++) {
            this.board.filter( field => field.height == i).map(field => newBoard.push(field.content)) 
        }
        return newBoard;
    }
}

module.exports = SaperGame;