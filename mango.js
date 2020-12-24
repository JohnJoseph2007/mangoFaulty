class Mangoes {
    constructor(x, y) {
        var options = {restitution:0.4, isStatic:true, friction:1};
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        World.add(world, this.body);
        this.image = loadImage("sprites/mango.png");
    }


    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40, 40);
    }
}