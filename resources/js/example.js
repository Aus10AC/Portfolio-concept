const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Mar 5, 2019 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);

$('.landing').particles();

$('.landing').particles({
  maxParticles: 100,
  size: 3,
  speed: 0.5,
  color: '#000000',
  minDist: 140,
  connectParticles: false
});

// Button animation

var button = document.getElementById("button");
var d3 = document.getElementById("d3");
function showMore() {
    button.style.display="none";
    d3.style.display="block";
}

function showLess() {
    button.style.display="inline-block";
    d3.style.display="none";
}
