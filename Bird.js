class Bird {
    constructor(x, y) {
      this.r = 50;
      this.speed = 0.05;
      this.body = Bodies.circle(x, y, this.r);
      this.image = loadImage("bird1.png");
      World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    } 
    
}   