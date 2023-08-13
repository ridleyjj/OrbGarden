const AUDIO_FILES = [
    "root",
    "down2semitones",
    "down5semitones",
    "downOct",
    "upOct",
];

class Looper {
    players;
    volumeFader = new Tone.Volume(0).toDestination();

    constructor() {
        const file = `./audio/jr_singingBowl_noTransient_${
            AUDIO_FILES[Math.floor(Math.random() * AUDIO_FILES.length)]
        }.wav`;
        this.players = [
            new Tone.Player({
                mute: false,
                volume: 0,
                autostart: false,
                fadeIn: 2,
                fadeOut: 2,
                playbackRate: 1,
                reverse: false,
            }).connect(this.volumeFader),
            new Tone.Player({
                mute: false,
                volume: 0,
                autostart: false,
                fadeIn: 2,
                fadeOut: 2,
                playbackRate: 1,
                reverse: false,
            }).connect(this.volumeFader),
        ];

        Promise.all([
            this.players[0].load(file),
            this.players[1].load(file),
        ]).then((_) => {
            this.startLooping();
        });
    }

    startLooping = function () {
        this.players[0].start();
        setInterval(() => {
            if (this.players[0].state === "started") {
                this.players[0].stop();
                this.players[1].start();
            } else {
                this.players[1].stop();
                this.players[0].start();
            }
        }, 2000);
    };

    setVolume = function (volume) {
        this.volumeFader.volume.rampTo([volume], 0.05);
    };
}
