// demo ``onLoad`` function for now.

function onLoad () {
    if (typeof window === 'undefined') return;

    const play = window.HTMLAudioElement.prototype.play;

    window.HTMLAudioElement.prototype.play = function () {
        try {
            play.call(this);
        } catch (e) {
            // pass
        }
    };
}

onLoad();
