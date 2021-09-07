class Drops {
    constructor(x, y,r) {

        var options ={
            isStatic: false
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color("blue");
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
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y: random(0,10)});
        }
    }

};