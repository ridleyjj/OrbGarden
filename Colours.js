class Colour {
    r;
    g;
    b;

    constructor(red, green, blue) {
        this.r = red;
        this.g = green;
        this.b = blue;
    }

    p5Color() {
        return color(this.r, this.g, this.b);
    }
}

class Pallette {
    primary;
    secondary;

    constructor(primary_, secondary_) {
        this.primary = primary_;
        this.secondary = secondary_;
    }
}

const COLOURS = [
    new Pallette(new Colour(1, 83, 157), new Colour(238, 164, 127)),
    new Pallette(new Colour(250, 97, 102), new Colour(252, 231, 126)),
    new Pallette(new Colour(226, 210, 249), new Colour(49, 120, 116)),
    new Pallette(new Colour(60, 145, 128), new Colour(100, 155, 28)),
];
