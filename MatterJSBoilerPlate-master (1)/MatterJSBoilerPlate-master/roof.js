class Roof{

    constructor(x,y,width,height){

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    
    display(){
    push();
    fill(128,128,128);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    
    
    }
    
    
    }