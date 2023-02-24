import Pawn from './Pawn.js';
export default class Board {

    constructor(len) {
        this.lenght = len;
        this.plat = new Array();
        for(var i=0; i<this.lenght; i++){
            this.plat[i] = new Array();
        }
    }

    init() {

        this.plat[0][0] = new Pawn(2,0,0, "black");
        this.plat[0][1] = new Pawn(3,0,1, "black");
        this.plat[0][2] = new Pawn(4,0,2, "black");
        this.plat[0][3] = new Pawn(5,0,3, "black");
        this.plat[0][4] = new Pawn(6,0,4, "black");
        this.plat[0][5] = new Pawn(4,0,5, "black");
        this.plat[0][6] = new Pawn(3,0,6, "black");
        this.plat[0][7] = new Pawn(2,0,7, "black");
        for(var i=0; i<this.lenght; i++){
            this.plat[1][i]= new Pawn(1,1,i, "black");
        }

        this.plat[7][0] = new Pawn(2,7,0, "white");
        this.plat[7][1] = new Pawn(3,7,1, "white");
        this.plat[7][2] = new Pawn(4,7,2, "white");
        this.plat[7][3] = new Pawn(5,7,3, "white");
        this.plat[7][4] = new Pawn(6,7,4, "white");
        this.plat[7][5] = new Pawn(4,7,5, "white");
        this.plat[7][6] = new Pawn(3,7,6, "white");
        this.plat[7][7] = new Pawn(2,7,7, "white");
        for(var i=0; i<this.lenght; i++){
            this.plat[6][i]= new Pawn(1, "white");
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

    setMovement(oldi,oldj, newi, newj)
    {
        this.plat[newi][newj] = this.plat[oldi][oldj];
        this.plat[oldi][oldj] = null;
    }

    getPawn(i,j)
    {
        return this.plat[i][j]
    }
}