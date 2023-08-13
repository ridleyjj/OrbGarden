class Orb {
    distance = 0;
    r = 0;
    pallete;
    looper;

    constructor(x_, y_) {
        this.r = Math.floor(10 + 140 * Math.random());
        this.x = x_;
        this.y = y_;
        this.pallette = COLOURS[floor(COLOURS.length * Math.random())];
        this.looper = new Looper();
    }

    update = function () {
        this.distance = Math.abs(mouseX - this.x) + Math.abs(mouseY - this.y);
        this.distance = map(this.distance, 0, 300, 0, 1);
        this.distance = constrain(this.distance, 0, 1);
        this.looper.setVolume(
            constrain(map(this.distance, 0.3, 1, 0, -40), -40, 0)
        );
    };

    display = function () {
        fill(
            this.pallette.primary.r,
            this.pallette.primary.g,
            this.pallette.primary.b
        );
        stroke(
            this.pallette.secondary.r,
            this.pallette.secondary.g,
            this.pallette.secondary.b,
            80 - this.distance * 80
        );
        strokeWeight(this.r - this.distance * this.r);
        ellipse(this.x, this.y, this.r, this.r);
    };
}
