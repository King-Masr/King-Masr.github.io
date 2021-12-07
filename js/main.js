window.onload = function () {
  let type = new TypeIt("#description", {
    strings: ["I am a Web Developer Front End", "My skills: HTML, CSS, JS, Vue.js, PHP, Json"],
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
let myTabs = document.querySelectorAll("#login #tabs li");
let tabs = Array.from(myTabs);
let mySections = document.querySelectorAll("#login #content section");
let sections = Array.from(mySections);
sections.pop();
tabs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    sections.forEach((section) => {
      section.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.id).style.display = "block";
  });
});
