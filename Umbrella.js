class Umbrella {
    constructor(x, y,r) {

        var options ={
            isStatic: true
        }
        this.r=r;
        
        this.body = Bodies.circle(x, y, this.r,options);       
        //this.color=color("blue");
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body.position.y);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};