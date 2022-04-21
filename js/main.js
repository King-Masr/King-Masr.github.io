window.onload = function () {
  let type = new TypeIt("#description", {
    strings: [
      "I am a Full Stack Web Developer",
      "I have experience in PHP for 5 years",
      "My skills: HTML, CSS, JavaScript, PHP, Laravel, MySQL, JSON, and more...",
    ],
    speed: 400,
    waitUntilVisible: false,
    breakLines: false,
    startDelay: 1000,
    deleteSpeed: 500,
    nextStringDelay: 5000,
    loop: true,
    loopDelay: 1000,
  }).go();
};