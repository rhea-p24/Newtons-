class Bob {
    constructor(x,y) {
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8
        }

        thisbody= Bodies.circle(x,y,25,options);
    World.add(world, this.body);

    console.log(this.body);
    }
display(){
    push();
    fill(254,0,255);
    pop();
}

}