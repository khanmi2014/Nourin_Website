// Local-Time Countdown Function
function countdown(id, targetDateLocal) {
  // Parse the target date as LOCAL time for each viewer
  let target = new Date(targetDateLocal).getTime();

  setInterval(function () {
    let now = new Date().getTime();
    let distance = target - now;

    if (distance < 0) {
      document.getElementById(id).innerHTML = "🎉 The Day is here!";
      return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(id).innerHTML = `
    <span><strong>${days}</strong><small>Days</small></span>
    <span><strong>${hours}</strong><small>Hours</small></span>
    <span><strong>${minutes}</strong><small>Minutes</small></span>
    <span><strong>${seconds}</strong><small>Seconds</small></span>
  `;
  }, 1000);
}

countdown("anniversary", "2026-07-15T00:00:00");
countdown("nextmeet", "2026-08-02T00:00:00");

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

// Romantic Floating Hearts Effect
function createFloatingHeart() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const heart = document.createElement("span");
  const duration = Math.random() * 4 + 6;
  const drift = Math.random() * 120 - 60;
  const size = Math.random() * 1.2 + 0.9;

  heart.className = "floating-heart";
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.setProperty("--heart-duration", duration + "s");
  heart.style.setProperty("--heart-drift", drift + "px");
  heart.style.setProperty("--heart-size", size + "rem");
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createFloatingHeart, 1400);

function sendPromiseKisses(button) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const rect = button.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  for (let i = 0; i < 24; i++) {
    const kiss = document.createElement("span");
    const duration = Math.random() * 1.8 + 2.8;
    const drift = Math.random() * 180 - 90;
    const lift = Math.random() * 180 + 170;
    const size = Math.random() * 1.1 + 1;

    kiss.className = "promise-kiss";
    kiss.textContent = "💋";
    kiss.style.left = startX + "px";
    kiss.style.top = startY + "px";
    kiss.style.setProperty("--promise-kiss-duration", duration + "s");
    kiss.style.setProperty("--promise-kiss-drift", drift + "px");
    kiss.style.setProperty("--promise-kiss-lift", "-" + lift + "px");
    kiss.style.setProperty("--promise-kiss-size", size + "rem");
    document.body.appendChild(kiss);

    setTimeout(() => {
      kiss.remove();
    }, duration * 1000);
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
  "Mamoni is a very lucky woman, having a daughter as wonderful as you",
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

// Memory Generator with Fade-In Effect
const memories = [
  { image: "memories/bashor.jpg", caption: "The night when we finally had our first moment of privacy. The night when our sacred bond of marriage was truly completed. The night when we shared a bed as husband and wife for the very first time. A night filled with love, intimacy, and memories that we will cherish forever. A night we shall never forget" },
  { image: "memories/first_rickshaw_ride.jpg", caption: "বিয়ের আগে তুমি কতবার বলেছিলে, “কবে আমরা একসাথে রিকশায় ঘুরবো?” সেই ছোট্ট ইচ্ছেটা অবশেষে পূরণ হলো। অনেক আনন্দ আর ভালোবাসা নিয়ে, হাত ধরে হরগ্রাম থেকে রানীনগরের পথে তোমার সাথে প্রথমবার রিকশায় চড়া, মুহূর্তটা সত্যিই ছিল অন্যরকম।" },
  { image: "memories/KL_hotel.jpg", caption: "কুয়ালালামপুর ঘুরে দেখার আগে, এই জায়গাটাতেই আমরা বের হয়ে দাঁড়াতাম, আমাদের Grab-এর জন্য অপেক্ষা করতাম। এখানে তোলা ছবিগুলো, আমাদের ছোট ছোট দুষ্টুমি আর হাসির মুহূর্তগুলো, সবকিছুই সত্যিই ভোলার মতো নয়" },
  { image: "memories/langkawi_last_dinner.jpg", caption: "Our last dinner in Langkawi. Delicious pizza, a magical Christmas atmosphere, and the most beautiful woman beside me" },
  { image: "memories/mermaid_last_dinner.jpg", caption: "A cozy candlelight dinner beside the sea, with the waves roaring and the harsh weather around us. But none of it mattered because your smile and your presence made the whole night feel magical. You filled the air with warmth and my heart with happiness. Our last Mermaid dinner was truly unforgettable" },
  { image: "memories/mermaid_room.jpg", caption: "শুধু তুমি, আমি আর অনেক অনেক খেলাধুলা ❤️😉" },
  { image: "memories/pantai_cenang.jpg", caption: "Pantai Cenang with my favorite person. I love how you always come up with the most unique and interesting picture ideas. every photo with you turns into a beautiful memory" },
  { image: "memories/putra.jpg", caption: "Our first sightseeing stop in Malaysia, and what a beautiful start it was. The Pink Mosque was truly majestic. Thank you for these lovely outfits and for making this moment even more special" },
  { image: "memories/sunset.jpg", caption: "It was the most beautiful sunset I have ever seen, but witnessing it with you made it something truly extraordinary. The whole moment felt surreal, as if time had stopped just for us. Booking that spot on the boat made me so happy. It may have been our most expensive booking in Malaysia, but seeing your smile and sharing that magical evening with you made it worth every single penny. A memory we will cherish forever" },
  { image: "memories/swimming.jpg", caption: "তোমার সাথে পুলে নামার মুহূর্তগুলো আমার ভীষণ প্রিয়। মনে হয় প্রতিটা সেকেন্ডই যেন আলাদা করে মনে রাখার মতো। ওই মুহূর্তে তোমার মুখে সেই আনন্দের হাসি দেখাটাই আমার কাছে সবচেয়ে বড় সুখ ছিল।" },
  { image: "memories/twin_tower.jpg", caption: "Visiting the Twin Towers of KL had been a childhood dream of mine. Finally standing there felt surreal, but what made the moment truly unforgettable was having you beside me. Dreams do come true, and I couldn't have imagined a better person to share this memory with." },
  { image: "memories/cable_car.jpg", caption: "A little scared, a lot excited, and completely in awe. Riding the steepest cable car in Langkawi together turned into a beautiful adventure" }
];

const memoryBtn = document.getElementById("memory-btn");
const memoryOutput = document.getElementById("memory-output");
const memoryImg = document.getElementById("memory-img");
const memoryCaption = document.getElementById("memory-caption");
let lastMemoryIndex = -1;

memoryBtn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * memories.length);

  if (memories.length > 1) {
    while (randomIndex === lastMemoryIndex) {
      randomIndex = Math.floor(Math.random() * memories.length);
    }
  }

  const memory = memories[randomIndex];
  lastMemoryIndex = randomIndex;

  memoryImg.src = memory.image;
  memoryCaption.textContent = memory.caption;
  memoryOutput.style.display = "block";

  memoryOutput.classList.remove("fade-in");
  void memoryOutput.offsetWidth; // restart animation
  memoryOutput.classList.add("fade-in");
});

// Wedding Video Lightbox (YouTube version)
document.addEventListener("DOMContentLoaded", () => {
  const videoTriggers = document.querySelectorAll(".video-trigger");
  const videoPopup = document.getElementById("video-popup");
  const popupVideo = document.getElementById("popup-video");
  const closeVideoBtn = document.getElementById("close-video-popup");

  // Open popup and start playing YouTube video
  videoTriggers.forEach(videoTrigger => {
    videoTrigger.addEventListener("click", () => {
      const videoId = videoTrigger.dataset.videoId;
      popupVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      videoPopup.style.display = "flex";
    });
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

// Song Carousel
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".songs-wrapper");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const totalSongs = document.querySelectorAll(".song-card").length;
  let index = 0;

  function updateCarousel() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSongs;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSongs) % totalSongs;
    updateCarousel();
  });

  // Swipe support for mobile
  let startX = 0;
  wrapper.addEventListener("touchstart", e => (startX = e.touches[0].clientX));
  wrapper.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextBtn.click();
    else if (endX - startX > 50) prevBtn.click();
  });
});








