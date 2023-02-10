export default class pawn {

    constructor(i) {
        this.id = i;
    }

    display(i, j) {
        if (this.id == 1) {
            document.getElementById(i.toString() + j.toString()).innerHTML = '<img class="pawn" src="img/chess/w_pawn.png"/>';
        }
        if (this.id == 2) {
            document.getElementById(i.toString() + j.toString()).innerHTML = '<img class="pawn"src="img/chess/w_rook.png"/>';
        }
        if (this.id == 3) {
            document.getElementById(i.toString() + j.toString()).innerHTML = '<img class="pawn" src="img/chess/w_knight.png"/>';
        }
        if (this.id == 4) {
            document.getElementById(i.toString() + j.toString()).innerHTML = '<img class="pawn" src="img/chess/w_bishop.png"/>';
        }
        if (this.id == 5) {
            document.getElementById(i.toString() + j.toString()).innerHTML = '<img class="pawn" src="img/chess/w_king.png"/>';
        }
        if (this.id == 6) {
            document.getElementById(i.toString() + j.toString()).innerHTML = '<img class="pawn" src="img/chess/w_queen.png"/>';
        }
    }
}    