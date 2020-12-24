class Stone { 
    constructor() {
        var options = {
            restitution : 0.4,
            isStatic : false
        }
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.rectangle(120, 590, 30, 30, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30, 30);
    }
}