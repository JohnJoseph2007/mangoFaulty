class Ground {
    constructor() {
        var options = {
            restitution : 0,
            isStatic : true
        }
        this.body = Bodies.rectangle(400, 690, 800, 20, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(128);
        rect(pos.x, pos.y, 800, 20);
    }
}