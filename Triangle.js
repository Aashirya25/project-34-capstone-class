class Triangle {
    constructor(x, y) {
      var options = {
        isStatic: false,
        restitution: 0.1
      };
      this.w = 25;
      this.h = 25
      this.body = Bodies.rectangle(x, y, this.w,this.h, options);
      this.image = loadImage("triangle.png");
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
