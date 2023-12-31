const synth = new Tone.Synth({
    volume: -12,
    detune: 0,
    portamento: 0.05,
    envelope: {
        attack: 0.05,
        attackCurve: "exponential",
        decay: 0.2,
        decayCurve: "exponential",
        release: 1.5,
        releaseCurve: "exponential",
        sustain: 0.2,
    },
    oscillator: {
        partialCount: 0,
        partials: [],
        phase: 0,
        type: "sine",
    },
}).toDestination();
const player = new Tone.Player({
    mute: false,
    volume: 0,
    autostart: false,
    fadeIn: 2,
    fadeOut: 2,
    playbackRate: 1,
    reverse: false,
    url: "./audio/jr_singingBowl_noTransient_root.wav",
}).toDestination();
const player2 = new Tone.Player({
    mute: false,
    volume: 0,
    autostart: false,
    fadeIn: 2,
    fadeOut: 2,
    playbackRate: 1,
    reverse: false,
    url: "./audio/jr_singingBowl_noTransient_root.wav",
}).toDestination();

started = false;

NOTES = ["C", "E", "F", "G", "A", "B"];
orbs = new Array();
newOrb = false;

document.addEventListener("click", () => {
    if (!started) {
        started = true;
        initAudio();
    } else {
        this.orbs[0].looper.setVolume(-40);
    }
});

function initAudio() {
    Tone.start();
}

function getRandomNote() {
    note = `${NOTES[Math.floor(4 * Math.random())]}4`;
    return note;
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 200);
}

function draw() {
    background(240);
    orbs.forEach((orb) => {
        orb.update();
        orb.display();
    });
    if (mouseIsPressed && newOrb) {
        orbs.at(-1).increaseRadius();
    }
}

function mousePressed() {
    if (!isMouseOverCanvas()) {
        overCanvas = false;
        return;
    }
    overCanvas = true;
    orbs.push(new Orb(mouseX, mouseY));
    newOrb = true;
}

function mouseReleased() {
    if (newOrb) {
        orbTriggerSound();
        newOrb = false;
    }
}

function orbTriggerSound() {
    synth.triggerAttackRelease(getRandomNote(), "8n");
}

function isMouseOverCanvas() {
    return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
}
