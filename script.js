// Local-Time Countdown Function
function countdown(id, targetDateLocal) {
  // Parse the target date as LOCAL time for each viewer
  let target = new Date(targetDateLocal).getTime();

  setInterval(function () {
    let now = new Date().getTime();
    let distance = target - now;

    if (distance < 0) {
      document.getElementById(id).innerHTML = "🎉 Happened!";
      return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(id).innerHTML = `
      <span>${days}d</span> 
      <span>${hours}h</span> 
      <span>${minutes}m</span> 
      <span>${seconds}s</span>`;
  }, 1000);
}

countdown("anniversary", "2026-07-15T00:00:00");
countdown("firstmet", "2026-01-01T00:00:00");
countdown("nextmeet", "2025-12-14T00:00:00");

// Confetti Effect
function throwConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Welcome Popup
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("welcome-popup");
  const goBtn = document.getElementById("go-btn");

  goBtn.addEventListener("click", function () {
    popup.style.display = "none"; // hide popup
  });
});

// Compliment Generator with Fade-In Effect
const compliments = [
  "You light up every room you walk into",
  "Your smile is my favorite thing in the world",
  "You’re my today and all of my tomorrows",
  "You make ordinary moments magical",
  "Your heart is the most beautiful thing about you",
  "You’re my favorite person to laugh with",
  "Your kindness makes this world better",
  "You’re the reason my world feels right",
  "Tomar mugdhokor chehara ta protidin dekhte bhalo lage",
  "Your mother is a very lucky woman, having a daughter as wonderful as you",
  "Tomar hasi dekhlei ami bar bar prem e pori",
  "Tomar shonge thakle shob kichu shundor lage",
  "Tumi eto shundor je chokh ferano mushkil!",
  "Tomar konther shor onek addictive",
  "Tumi shotti e ekta pori 🧚‍♀️",
  "My day is incomplete without talking to you",
  "Sometimes I lose myself in your eyes",
  "You looked stunning in every outfit I’ve ever seen you wear so far",
  "You look unbelieveably beautiful in a saree, especially Jamdani",
  "Saree er invention tomar jonnoi kora hoyeche amar mone hoy 🤭",
  "You carry yourself with such grace and beauty",
  "Every inch of you is stunning and captivating",
  "You’re a vision of beauty that takes my breath away",
  "I don't know why but Being around you makes me feel like I’m with a queen",
  "Every time you walk into a room, your presence feels larger than life"
];

const complimentBtn = document.getElementById("compliment-btn");
const complimentOutput = document.getElementById("compliment-output");

complimentBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  complimentOutput.textContent = compliments[randomIndex];

  // Trigger fade-in animation
  complimentOutput.classList.remove("fade-in");
  void complimentOutput.offsetWidth; // restart animation
  complimentOutput.classList.add("fade-in");
});

// Wedding Video Lightbox (YouTube version)
document.addEventListener("DOMContentLoaded", () => {
  const videoTrigger = document.querySelector(".video-trigger");
  const videoPopup = document.getElementById("video-popup");
  const popupVideo = document.getElementById("popup-video");
  const closeVideoBtn = document.getElementById("close-video-popup");

  // Replace with your actual YouTube video ID
  const YOUTUBE_VIDEO_ID = "oiXjDZua0YA";

  // Open popup and start playing YouTube video
  videoTrigger.addEventListener("click", () => {
    popupVideo.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;
    videoPopup.style.display = "flex";
  });

  // Close popup and stop video
  closeVideoBtn.addEventListener("click", () => {
    popupVideo.src = "";
    videoPopup.style.display = "none";
  });

  // Close popup when clicking outside the iframe
  videoPopup.addEventListener("click", (e) => {
    if (e.target === videoPopup) {
      popupVideo.src = "";
      videoPopup.style.display = "none";
    }
  });
});


// Image Popup (Lightbox)
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("close-popup");

  // Handle clicks on timeline images
  document.querySelectorAll(".timeline-img").forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
    });
  });

  // Close when clicking X or outside image
  closeBtn.addEventListener("click", () => popup.style.display = "none");
  popup.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });
});










