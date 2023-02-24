export default class Pawn {

    constructor(id, i, j, color) {
        this.i = i;
        this.j = j;
        this.id = id;
        this.color = color;
    }

    display(i, j) {
        if(this.color == "white")
        {
            if (this.id == 1) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=white'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/w_pawn.png"/>';
            }
            if (this.id == 2) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=white'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn"src="img/chess/w_rook.png"/>';
            }
            if (this.id == 3) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=white'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/w_knight.png"/>';
            }
            if (this.id == 4) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=white'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/w_bishop.png"/>';
            }
            if (this.id == 5) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=white'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/w_king.png"/>';
            }
            if (this.id == 6) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=white'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/w_queen.png"/>';
            }
        }else
        {
            if (this.id == 1) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=black'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/b_pawn.png"/>';
            }
            if (this.id == 2) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=black'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn"src="img/chess/b_rook.png"/>';
            }
            if (this.id == 3) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=black'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/b_knight.png"/>';
            }
            if (this.id == 4) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=black'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/b_bishop.png"/>';
            }
            if (this.id == 5) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=black'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/b_king.png"/>';
            }
            if (this.id == 6) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img draggable="true" id=black'+ i.toString() + j.toString() +' ondragstart="drag(event)" class="pawn" src="img/chess/b_queen.png"/>';
            }
        }
        
    }

    getmoveArray()
    {
        nextMove = new Array();
        nextMove[0] = [this.i+2,this.j+1]
        nextMove[1] = [this.i+2,this.j-1]

        nextMove[2] = [this.i+1,this.j-2]
        nextMove[3] = [this.i-1,this.j-2]
        
        nextMove[4] = [this.i-2,this.j+1]
        nextMove[5] = [this.i-2,this.j-1]

        nextMove[6] = [this.i-1,this.j-2]
        nextMove[7] = [this.i+1,this.j-2]

        return nextMove;
    }
}    