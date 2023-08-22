class Orb {
    distance = 0;
    r = 0;
    pallete;
    looper;
    maxRadius = 150;
    growthSpeed = 5;

    constructor(x_, y_) {
        this.r = 10;
        this.x = x_;
        this.y = y_;

        let randomIndex = floor(COLOURS.length * Math.random());
        this.pallette = COLOURS[randomIndex];
        this.looper = new Looper();
    }

    update = function () {
        this.distance = Math.abs(mouseX - this.x) + Math.abs(mouseY - this.y);
        this.distance = map(this.distance, 0, this.r * 4, 0, 1);
        this.distance = constrain(this.distance, 0, 1);
        this.looper.setVolume(
            constrain(map(this.distance, 0.3, 1, 0, -70), -70, 0)
        );
    };

    display = function () {
        fill(this.pallette.primary.p5Color());
        const strokeCol = this.pallette.secondary.p5Color();
        strokeCol.setAlpha(80 - this.distance * 80);
        stroke(strokeCol);
        strokeWeight(this.r - this.distance * this.r);
        ellipse(this.x, this.y, this.r, this.r);
    };

    increaseRadius = function () {
        if (this.r < this.maxRadius) {
            this.r += this.growthSpeed;
        }
        return this.r < this.maxRadius;
    };
}
