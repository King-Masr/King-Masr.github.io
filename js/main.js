window.onload = function () {
  new TypeIt("#description", {
    strings: ["I am a Web Developer Front End"],
    speed: 250,
    waitUntilVisible: false,
    breakLines: false,
    startDelay: 1000,
    // nextStringDelay: 5000,
    loop: true,
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
