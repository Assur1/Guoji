import Pawn from './Pawn.js';
export default class Board {

    constructor(len, s) {
        this.socket = s;
        this.lenght = len;
        this.color = -1;
        this.plat = new Array();
        for(var i=0; i<this.lenght; i++){
            this.plat[i] = new Array();
        }
    }


    setColor(c)
    {
        this.color = c;
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
            this.plat[6][i]= new Pawn(1,6,i, "white");
        }
    }

    clearDisplay()
    {
        const myNode = document.getElementsByClassName("box");
        
        for(var i =0; i< myNode.length; i++)
        {
            myNode[i].innerHTML = '';
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

    DragAndDrop()
    {
        var pawns = document.getElementsByClassName("pawn");
        var boxes = document.getElementsByClassName("box");
        var pos = [];
        for( var i = 0; i< pawns.length; i++)
        {
            pawns[i].addEventListener('dragstart', (ev) => {
                var colorItem = ev.target.id.slice(0,5);
                console.log(colorItem);
                if(colorItem == "white")
                {
                    colorItem = 0;
                }else
                {
                    colorItem = 1;
                }
                console.log(this.color);
                console.log(colorItem);

                if(this.color == colorItem)
                {
                    ev.dataTransfer.setData("text/plain", ev.target.id);
                    setTimeout(()=> {
                        ev.target.classList.add("hide");
                    }, 0);

                    var i = parseInt(ev.target.id.at(-1));
                    var j = parseInt(ev.target.id.at(-2));
                    
                    var movs = this.getPawn(i,j).getmoveArray();
                    for(var i = 0; i<movs.length; i++)
                    {
                        if((movs[i][0] <= 7) && (movs[i][0] >= 0) && (movs[i][1] <= 7) && (movs[i][1] >= 0))
                        {
                            document.getElementById(movs[i][0].toString() + movs[i][1].toString()).classList.add("lightingBox");
                        }
                    }
                }
            });
        }

        for( var i = 0; i< boxes.length; i++)
        {
            boxes[i].addEventListener('dragenter', (ev) => {
                ev.preventDefault();
            });

            boxes[i].addEventListener('dragover', (ev) => {
                ev.preventDefault();
            });

            boxes[i].addEventListener('drop', (ev) => {
                const id =  ev.dataTransfer.getData('text/plain');

                var colorItem = id.slice(0,5);
                console.log(colorItem);
                if(colorItem == "white")
                {
                    colorItem = 0;
                }else
                {
                    colorItem = 1;
                }
                console.log(this.color);
                console.log(colorItem);

                if(this.color == colorItem)
                {
                    const draggable = document.getElementById(id);
                    var oldi = parseInt(id.at(-1));
                    var oldj = parseInt(id.at(-2)); 

                    var movs = this.getPawn(oldi,oldj).getpreviousmovArray();

                    var newi = parseInt(ev.target.id.at(-1));
                    var newj = parseInt(ev.target.id.at(-2));

                    var element = document.getElementById(newj.toString() + newi.toString());

                    if(document.getElementById(newj.toString() + newi.toString()).classList.contains("lightingBox"))
                    {
                        if (element.hasChildNodes()) {
                            if (element.firstChild.id == "white73" || element.firstChild.id == "black03") {
                                this.end();
                            }
                            element.removeChild(element.firstChild);
                        }
                        draggable.id =  this.getPawn(oldi,oldj).getcolor()+newj+newi;
                        this.getPawn(oldi,oldj).setIndices(newj, newi);

                        this.setMovement(oldi,oldj, newi, newj)
                        element.appendChild(draggable);
                        pos = [[oldi, oldj], [newi, newj]];
                        document.body.style.cursor = 'none';
                        this.socket.emit("movment", pos);
                    }

                    for(var i = 0; i<movs.length; i++)
                    {
                        if((movs[i][0] <= 7) && (movs[i][0] >= 0) && (movs[i][1] <= 7) && (movs[i][1] >= 0))
                        {
                            document.getElementById(movs[i][0].toString() + movs[i][1].toString()).classList.remove("lightingBox");
                        }                 
                    }               
                    draggable.classList.remove('hide');  
                }             
            });
        }
    }


    setMovement(oldi,oldj, newi, newj)
    {
        this.plat[newj][newi] = this.plat[oldj][oldi];
        this.plat[oldj][oldi] = null;
    }

    getPawn(i,j)
    {
        return this.plat[j][i]
    }

    end()
    {
        console.log("C'est la fin !");
    }
}