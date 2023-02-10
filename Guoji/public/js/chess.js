import pawn from './pawn.js';

class Board {

    constructor(len) {
        this.lenght = len;
        this.plat = new Array();
        for(var i=0; i<this.lenght; i++){
            this.plat[i] = new Array();
        }
    }

    init() {

        this.plat[0][0] = new pawn(2);
        this.plat[0][1] = new pawn(3);
        this.plat[0][2] = new pawn(4);
        this.plat[0][3] = new pawn(5);
        this.plat[0][4] = new pawn(6);
        this.plat[0][5] = new pawn(4);
        this.plat[0][6] = new pawn(3);
        this.plat[0][7] = new pawn(2);
        for(var i=0; i<this.lenght; i++){
            this.plat[1][i]= new pawn(1);
        }

        this.plat[7][0] = new pawn(2);
        this.plat[7][1] = new pawn(3);
        this.plat[7][2] = new pawn(4);
        this.plat[7][3] = new pawn(5);
        this.plat[7][4] = new pawn(6);
        this.plat[7][5] = new pawn(4);
        this.plat[7][6] = new pawn(3);
        this.plat[7][7] = new pawn(2);
        for(var i=0; i<this.lenght; i++){
            this.plat[6][i]= new pawn(1);
        }
    }

    display(){
        for(var i=0; i<this.lenght; i++){
            for(var j=0; j<this.lenght; j++){
                if(this.plat[i][j] != null)
                {
                    this.plat[i][j].display(i, j);
                }
            }
        }
    }
}


const Game = new Board(8);
Game.init();
Game.display();
