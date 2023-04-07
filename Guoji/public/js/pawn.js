/*
1 : pion
2 : rook
3 : chevalier
4 : bishop
5 : king 
6 : queen
*/

export default class Pawn {

    constructor(id, i, j, color) {
        this.i = i;
        this.j = j;
        this.id = id;
        this.color = color;
        this.nextMouv = [];
    }


    setIndices(i, j)
    {
        this.i = i;
        this.j = j;
    }

    display(i, j) {
        if(this.color == "white")
        {
            if (this.id == 1) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_pawn.png"/>';
            }
            if (this.id == 2) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn"src="img/chess/w_rook.png"/>';
            }
            if (this.id == 3) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_knight.png"/>';
            }
            if (this.id == 4) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_bishop.png"/>';
            }
            if (this.id == 5) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_king.png"/>';
            }
            if (this.id == 6) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_queen.png"/>';
            }
        }else
        {
            if (this.id == 1) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_pawn.png"/>';
            }
            if (this.id == 2) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn"src="img/chess/b_rook.png"/>';
            }
            if (this.id == 3) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_knight.png"/>';
            }
            if (this.id == 4) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_bishop.png"/>';
            }
            if (this.id == 5) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_king.png"/>';
            }
            if (this.id == 6) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_queen.png"/>';
            }
        }
        
    }

    getmoveArray()
    {
        this.nextMouv = new Array();

        switch(this.id)
        {
            case 1 :
                if(this.color == "white"){
                    this.nextMouv[0] = [this.i-1,this.j];
                    if(this.i == 6){
                        this.nextMouv[1] = [this.i-2,this.j];
                    }
                }
                else{
                    this.nextMouv[0] = [this.i+1,this.j];
                    if(this.i == 1){
                        this.nextMouv[1] = [this.i+2,this.j];
                    }
                }
                break;
            case 2 :
                for(var x = 0; x <= 7; x++)
                {
                    this.nextMouv.push([this.i - x, this.j]);
                }

                for(var x = 0; x <=  7; x++)
                {
                    this.nextMouv.push([this.i + x, this.j]);
                }

                for(var x = 0; x <=  7; x++)
                {
                    this.nextMouv.push([this.i, this.j + x]);
                }

                for(var x = 0; x <=  7; x++)
                {
                    this.nextMouv.push([this.i, this.j - x]);
                }
                break;
            case 3 :
                for(var indice = -1; indice < 2; indice+=2)
                {
                    this.nextMouv.push([this.i-2,       this.j+indice]);
                    this.nextMouv.push([this.i+2,       this.j+indice]);
                    this.nextMouv.push([this.i+indice,  this.j-2]);
                    this.nextMouv.push([this.i+indice,  this.j+2]);
                }
                break;
            
            case 4 :
                this.nextMouv.push([this.i+1, this.j+1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x-1][0] + 1, this.nextMouv[x-1][1] + 1]);
                }

                this.nextMouv.push([this.i-1, this.j-1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x+7-1][0] - 1, this.nextMouv[x+7-1][1] - 1]);
                }

                this.nextMouv.push([this.i-1, this.j+1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x+14-1][0] - 1, this.nextMouv[x+14-1][1] + 1]);
                }

                this.nextMouv.push([this.i+1, this.j-1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x+21-1][0] + 1, this.nextMouv[x+21-1][1] - 1]);
                }
                break;

                
            case 5 :
                this.nextMouv.push([this.i+1, this.j])
                this.nextMouv.push([this.i, this.j+1])
                this.nextMouv.push([this.i-1, this.j])
                this.nextMouv.push([this.i, this.j-1])
                this.nextMouv.push([this.i+1, this.j+1])
                this.nextMouv.push([this.i-1, this.j-1])
                this.nextMouv.push([this.i-1, this.j+1])
                this.nextMouv.push([this.i+1, this.j-1])
                break;
            case 6 :
                this.nextMouv.push([this.i+1, this.j+1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x-1][0] + 1, this.nextMouv[x-1][1] + 1]);
                }

                this.nextMouv.push([this.i-1, this.j-1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x+7-1][0] - 1, this.nextMouv[x+7-1][1] - 1]);
                }

                this.nextMouv.push([this.i-1, this.j+1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x+14-1][0] - 1, this.nextMouv[x+14-1][1] + 1]);
                }

                this.nextMouv.push([this.i+1, this.j-1]);
                for(var x = 1; x <=  6; x++)
                {
                    this.nextMouv.push([this.nextMouv[x+21-1][0] + 1, this.nextMouv[x+21-1][1] - 1]);
                }

                for(var x = 0; x <= 7; x++)
                {
                    this.nextMouv.push([this.i - x, this.j]);
                }

                for(var x = 0; x <=  7; x++)
                {
                    this.nextMouv.push([this.i + x, this.j]);
                }

                for(var x = 0; x <=  7; x++)
                {
                    this.nextMouv.push([this.i, this.j + x]);
                }

                for(var x = 0; x <=  7; x++)
                {
                    this.nextMouv.push([this.i, this.j - x]);
                }
                break;
        }

        return this.nextMouv;
    }

    getpreviousmovArray()
    {
        return this.nextMouv;
    }
}    