window.onload = function () {
  let type = new TypeIt("#description", {
    strings: [
      "I am a Web Developer Front End",
      "My skills: HTML, CSS, JavaScript, Vue.js, JSON, PHP, MySQL, Python",
    ],
    speed: 300,
    waitUntilVisible: false,
    breakLines: false,
    startDelay: 2000,
    deleteSpeed: 200,
    nextStringDelay: 5000,
    loop: true,
    loopDelay: 1000,
  }).go();
};