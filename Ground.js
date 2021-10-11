class Ground {
    constructor(x, y,w,h) {
      var options = {
        isStatic: true
      };
      this.w = w;
      this.h = h
      this.body = Bodies.rectangle(x, y, this.w,this.h, options);
      this.image = loadImage("ground.png");
      World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    } 
}
