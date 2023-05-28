const kickoneEl = document.querySelector(".kick.one");
const kicktwoEl = document.querySelector(".kick.two");
const snareEl = document.querySelector(".snare");
const tomoneEl = document.querySelector(".tom.one");
const tomtwoEl = document.querySelector(".tom.two");
const tomthreeEl = document.querySelector(".tom.three");
const crashbigEl = document.querySelector(".crash-big");
const splashEl = document.querySelector(".splash");
const crashsmallEl = document.querySelector(".crash-small");
const rideEl = document.querySelector(".ride");
const closehatEl = document.querySelector(".close.hat");
const openhatEl = document.querySelector(".open.hat");

const kickoneAudioEl = document.querySelector(".kickone-audio");
const kicktwoAudioEl = document.querySelector(".kicktwo-audio");
const snareAudioEl = document.querySelector(".snare-audio");
const tomoneAudioEl = document.querySelector(".tomone-audio");
const tomtwoAudioEl = document.querySelector(".tomtwo-audio");
const tomthreeAudioEl = document.querySelector(".tomthree-audio");
const crashbigAudioEl = document.querySelector(".crashbig-audio");
const splashAudioEl = document.querySelector(".splash-audio");
const crashsmallAudioEl = document.querySelector(".crashsmall-audio");
const rideAudioEl = document.querySelector(".ride-audio");
const closehatAudioEl = document.querySelector(".closehat-audio");
const openhatAudioEl = document.querySelector(".openhat-audio");



const audioElements = [
    kickoneAudioEl,
    kicktwoAudioEl,
    snareAudioEl,
    tomoneAudioEl,
    tomtwoAudioEl,
    tomthreeAudioEl,
    crashbigAudioEl,
    splashAudioEl,
    crashsmallAudioEl,
    rideAudioEl,
    closehatAudioEl,
    openhatAudioEl
];

function preloadAudio(audioElements) {
    audioElements.forEach((audio) => {
        audio.preload = "auto";
    });
}

preloadAudio(audioElements);



kickoneEl.addEventListener("click", () => {
    handleElementClick(kickoneAudioEl);
})

kicktwoEl.addEventListener("click", () => {
    handleElementClick(kicktwoAudioEl);
})

snareEl.addEventListener("click", () => {
    handleElementClick(snareAudioEl);
})

tomoneEl.addEventListener("click", () => {
    handleElementClick(tomoneAudioEl);
})

tomtwoEl.addEventListener("click", () => {
    handleElementClick(tomtwoAudioEl);
})

tomthreeEl.addEventListener("click", () => {
    handleElementClick(tomthreeAudioEl);
})

crashbigEl.addEventListener("click", () => {
    handleElementClick(crashbigAudioEl);
})

splashEl.addEventListener("click", () => {
    handleElementClick(splashAudioEl);
})

crashsmallEl.addEventListener("click", () => {
    handleElementClick(crashsmallAudioEl);
})

rideEl.addEventListener("click", () => {
    handleElementClick(rideAudioEl);
})

closehatEl.addEventListener("click", () => {
    handleElementClick(closehatAudioEl);
})

openhatEl.addEventListener("click", () => {
    handleElementClick(openhatAudioEl);
})


function handleElementClick(audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();
}




const keyMappings = {
    v: { audioEl: kickoneAudioEl, element: kickoneEl },
    b: { audioEl: kicktwoAudioEl, element: kicktwoEl },
    g: { audioEl: snareAudioEl, element: snareEl },
    f: { audioEl: tomoneAudioEl, element: tomoneEl },
    t: { audioEl: tomtwoAudioEl, element: tomtwoEl },
    h: { audioEl: tomthreeAudioEl, element: tomthreeEl },
    e: { audioEl: crashbigAudioEl, element: crashbigEl },
    r: { audioEl: splashAudioEl, element: splashEl },
    y: { audioEl: crashsmallAudioEl, element: crashsmallEl },
    u: { audioEl: rideAudioEl, element: rideEl },
    j: { audioEl: closehatAudioEl, element: closehatEl },
    n: { audioEl: openhatAudioEl, element: openhatEl },
};

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const mapping = keyMappings[key];
    if (mapping) {
        const { audioEl, element } = mapping;
        audioEl.currentTime = 0;
        audioEl.play();
        element.style.transform = "scale(.98)";
        setTimeout(() => {
            element.style.transform = "scale(1)";
        }, 100);
    }
});