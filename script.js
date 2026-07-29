
/* =========================================
   LETTER MESSAGE
========================================= */

const message = `Happy National Girlfriend Day! 💕

I just wanted to make this little surprise for you because you deserve something special today.

Thank you for all the little moments, the laughs, the conversations, and all the memories we've made together.

Sometimes it's not the big things that matter most. It's the random conversations, the silly moments, the pictures, and the simple times that somehow become the memories we remember the most.

So I made this little place where I can keep some of those memories of us.

I hope this makes you smile, even just a little. 💗`;

let messageIndex = 0;


/* =========================================
   GET ELEMENTS
========================================= */

const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typewriter = document.getElementById("typewriter");

const memoriesSection = document.getElementById("memories");
const finalSection = document.getElementById("final");

const memoryButton = document.getElementById("memoryButton");
const nextButton = document.getElementById("nextButton");

const memoryImage = document.getElementById("memoryImage");
const photoTitle = document.getElementById("photoTitle");
const photoQuote = document.getElementById("photoQuote");
const counter = document.getElementById("counter");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");


/* =========================================
   TYPEWRITER
========================================= */

function typeMessage() {

    if (messageIndex < message.length) {

        const character = message.charAt(messageIndex);

        if (character === "\n") {
            typewriter.innerHTML += "<br>";
        } else {
            typewriter.innerHTML += character;
        }

        messageIndex++;

        setTimeout(typeMessage, 25);
    }
}


/* =========================================
   OPEN ENVELOPE
========================================= */

envelope.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        opening.style.display = "none";
        letter.style.display = "block";

        typeMessage();

        startMusic();

    }, 900);

});


/* =========================================
   MEMORY DATA
========================================= */

const memories = [

    {
        type: "image",
        src: "pics/pic1.jpg",
        title: "Just Us",
        quote: "My favourite kind of moment is simply being with you. 💗"
    },

    {
        type: "image",
        src: "pics/pic2.jpg",
        title: "Our First Date 💕",
        quote: "One memory I'll always be happy to look back on. ✨"
    },

    {
        type: "image",
        src: "pics/pic3.jpg",
        title: "Little Moments",
        quote: "It's the little things that become the biggest memories. 🌷"
    },

    {
        type: "image",
        src: "pics/pic4.jpg",
        title: "Our Story",
        quote: "Another little page in our story. Here's to many more. 💕"
    },

    {
        type: "image",
        src: "pics/pic5.jpg",
        title: "With You",
        quote: "Somehow, ordinary moments feel a little more special with you."
    },

    {
        type: "image",
        src: "pics/pic6.jpg",
        title: "Forever Favorite",
        quote: "A moment worth keeping close to my heart. 🥹"
    },

    {
        type: "video",
        src: "pics/vid1.mp4",
        title: "A Little Moment 🎥",
        quote: "Some moments are even better when we can watch them again. 💗"
    },

    {
        type: "image",
        src: "pics/pic8.jpg",
        title: "More To Come",
        quote: "This is only one chapter. I hope we get to make many more. 💗"
    }

];


let currentMemory = 0;


/* =========================================
   SHOW MEMORY
========================================= */

function showMemory(index) {

    const memory = memories[index];

    photoTitle.innerText = memory.title;
    photoQuote.innerText = memory.quote;

    counter.innerText =
        `${index + 1} / ${memories.length}`;


    /* VIDEO */

    if (memory.type === "video") {

        memoryImage.style.display = "none";

        let video = document.getElementById("memoryVideo");

        if (!video) {

            video = document.createElement("video");

            video.id = "memoryVideo";

            video.controls = true;

            video.playsInline = true;

            video.style.width = "100%";

            video.style.maxHeight = "500px";

            video.style.objectFit = "contain";

            memoryImage.parentNode.insertBefore(
                video,
                memoryImage
            );
        }

        video.src = memory.src;

        video.style.display = "block";

    }


    /* IMAGE */

    else {

        const video = document.getElementById("memoryVideo");

        if (video) {
            video.pause();
            video.style.display = "none";
        }

        memoryImage.style.display = "block";

        memoryImage.src = memory.src;

        memoryImage.alt = memory.title;
    }

}


/* =========================================
   OPEN MEMORIES
========================================= */

memoryButton.addEventListener("click", function () {

    letter.style.display = "none";

    memoriesSection.style.display = "block";

    currentMemory = 0;

    showMemory(currentMemory);

});


/* =========================================
   NEXT MEMORY
========================================= */

nextButton.addEventListener("click", function () {

    currentMemory++;


    /* FINISHED ALL MEMORIES */

    if (currentMemory >= memories.length) {

        memoriesSection.style.display = "none";

        finalSection.style.display = "block";

        return;
    }


    /* FADE OUT */

    memoryImage.style.opacity = "0";


    setTimeout(function () {

        showMemory(currentMemory);

        memoryImage.style.opacity = "1";

    }, 300);


    /* LAST MEMORY */

    if (currentMemory === memories.length - 1) {

        nextButton.innerText = "Finish 💗";

    } else {

        nextButton.innerText = "Next 💕";

    }

});


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;


function startMusic() {

    music.play()

        .then(function () {

            musicPlaying = true;

            musicButton.innerText = "🔊";

        })

        .catch(function () {

            musicPlaying = false;

        });

}


/* =========================================
   MUSIC BUTTON
========================================= */

musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerText = "🎵";

    } else {

        music.play()

            .then(function () {

                musicPlaying = true;

                musicButton.innerText = "🔊";

            })

            .catch(function () {

                musicPlaying = false;

            });

    }

});