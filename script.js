
// To run type npx live-server in the terminal to start a local server and view the portfolio website in the browser.
// Or
// Press live server in the bottom right corner of the VS code window to start a local server and view the portfolio website in the browser.

console.log('Portfolio.js is loaded.');

const introVideo = document.querySelector('.IntroBack-video');
const mainVideo = document.querySelector('.MainBack-video');
const cards = document.querySelectorAll('.card');

let currentCardIndex = 0;

console.log('Intro video element:', introVideo); // test removal 
console.log('Main video element:', mainVideo); // test removal 

introVideo.addEventListener('timeupdate', function() {
    if (introVideo.currentTime >= 7.39 ) {
        console.log('Video has reached 7.39 seconds.'); // test removal

        introVideo.classList.add('hide');
        mainVideo.classList.add('show');

        mainVideo.play()
        .then(() => {
            console.log('Main video is playing.');
        })
        .catch(error => {
            console.error('Error playing main video:', error);
        });

        cards.forEach(function(card) {
            card.classList.add('show');
        });

        document.querySelector('.card-container').classList.add('show-arrows');

        showCard(2); // Show the first card

        
    }
});

function showCard(index) {
    cards.forEach(function(card, i) {
        card.classList.remove('show-card');
    });

    cards[index].classList.add('show-card');
}

const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', function() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showCard(currentCardIndex);
});

const rightArrow = document.querySelector('.right-arrow');
rightArrow.addEventListener('click', function() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    showCard(currentCardIndex);
});





// Testing event listeners for the intro video. The video didnt end but instead paused hence the ended function not working. 
/*
introVideo.addEventListener('ended', function() {
  // Code to execute when the video ends
  console.log('Intro video has ended.');
  // You can add additional logic here, such as navigating to another section or displaying a message.
});

// GPT
introVideo.addEventListener('timeupdate', function() {
    console.log('Video time:', introVideo.currentTime);
});

//GPT 
introVideo.addEventListener('pause', function() {
    console.log('Video paused at:', introVideo.currentTime);
});
*/