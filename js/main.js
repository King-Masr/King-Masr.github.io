window.onload = function () {
  let type = new TypeIt("#description", {
    strings: [
      "I am a Full Stack Developer",
      "I have experience in PHP for 5 years",
      "My skills: HTML, CSS, JavaScript, PHP, MySQL, Laravel, Ajax, JSON, and more...",
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
function more(box) {
  let moreP = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem maxime. Quae corrupti, reprehenderit praesentium rem deleniti quo ipsa qui nam vero voluptatum facere soluta ex perspiciatis, quos nihil aspernatur!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem maxime. Quae corrupti, reprehenderit praesentium rem deleniti quo ipsa qui nam vero voluptatum facere soluta ex perspiciatis, quos nihil aspernatur!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem maxime. Quae corrupti, reprehenderit praesentium rem deleniti quo ipsa qui nam vero voluptatum facere soluta ex perspiciatis, quos nihil aspernatur!",
  ];
  let myParagraph = document.querySelector(`#features .box:nth-child(${box}) p`);
  myParagraph.innerText = moreP[box - 1];
}
function less(box) {
  let lessP = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];
  let myParagraph = document.querySelector(`#features .box:nth-child(${box}) p`);
  myParagraph.innerText = lessP[box - 1];
}
for (let i = 0; i < 3; i++) {
  document.querySelectorAll("#features .box")[i].children[3].onclick = function (e) {
    if (e.target.href.includes("more")) {
      e.target.innerText = "Less";
      setTimeout(function () {
        e.target.href = e.target.href.replace("more", "less");
      }, 50);
    } else {
      e.target.innerText = "More";
      setTimeout(function () {
        e.target.href = e.target.href.replace("less", "more");
      }, 50);
    }
  };
}
"aaaaaa".includes()