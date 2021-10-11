class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness : 0.02,
            length :40 
        }
        this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world, this.sling);
   
   }
    show(){
        if(this.sling.bodyA){
        stroke ("brown")
        var posA = this.sling.bodyA.position;
        var posB = this.pointB;
        line(posA.x,posA.y,posB.x,posB.y);
    }
    }

    fly() {
    this.sling.bodyA = null
    }

    attach (body){
        this.sling.bodyA = body
    }
}