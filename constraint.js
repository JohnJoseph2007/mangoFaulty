class ConstraintClass {
    constructor(bodya, pointb) {
        var options = {
            bodyA : bodya,
            pointB : pointb,
            length : 20,
            stiffness : 0.04
        }
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
        this.a = bodya;
    }

    fly() {
        this.body.bodyA = null;
    }

    goback() {
        this.body.bodyA = this.a;
    }

    display() {
        if(this.body.bodyA) {
            var posa = this.body.bodyA.position;
            var pb = this.body.pointB;
            push();
            line(posa.x, posa.y, pb.x, pb.y);
            pop();
        }
    }
}