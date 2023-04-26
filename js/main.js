// function loading() {
//   document.body.style.height = "100vh";
//   let sectionLoading = document.createElement("section");
//   sectionLoading.id = "loading";
//   let loadingContainer = document.createElement("main");
//   let sectionMessage = document.createElement("section");
//   sectionMessage.id = "message";
//   let myImg = document.createElement("img");
//   myImg.src = "imgs/loader-flat.gif";
//   let myParagraph = document.createElement("p");
//   myParagraph.innerText = "Wait for moment...";
//   sectionMessage.appendChild(myImg);
//   sectionMessage.appendChild(myParagraph);
//   loadingContainer.appendChild(sectionMessage);
//   sectionLoading.appendChild(loadingContainer);
//   document.body.appendChild(sectionLoading);
// }
// loading();
let myImgs = document.getElementsByTagName("img");
let imgs = Array.from(myImgs);
imgs.forEach((ele) => {
  ele.onerror = function () {
    this.src = "imgs/image-not-found.png";
  };
});
window.onload = function () {
  document.getElementById("loading").remove();
  document.body.removeAttribute("style");
  let type = new TypeIt("#description", {
    strings: [
      "I am a Full Stack Developer.",
      "I have experience in PHP for 6 years.",
      "My Skills: HTML, CSS, JavaScript, PHP, MySQL, Laravel, Ajax, JSON, and more...",
    ],
    speed: 600,
    waitUntilVisible: false,
    breakLines: false,
    startDelay: 500,
    deleteSpeed: 100,
    nextStringDelay: 5000,
    loop: true,
    loopDelay: 1000,
  }).go();
};
let upBtn = document.getElementById("up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
};
upBtn.onclick = function () {
  window.scrollTo(0, 0);
};
function more(box) {
  let moreP = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem maxime. Quae corrupti, reprehenderit praesentium rem deleniti quo ipsa qui nam vero voluptatum facere soluta ex perspiciatis, quos nihil aspernatur!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem maxime. Quae corrupti, reprehenderit praesentium rem deleniti quo ipsa qui nam vero voluptatum facere soluta ex perspiciatis, quos nihil aspernatur!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem maxime. Quae corrupti, reprehenderit praesentium rem deleniti quo ipsa qui nam vero voluptatum facere soluta ex perspiciatis, quos nihil aspernatur!",
  ];
  let myParagraph = document.querySelector(
    `#features .box:nth-child(${box}) p`
  );
  myParagraph.innerText = moreP[box - 1];
}
function less(box) {
  let lessP = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];
  let myParagraph = document.querySelector(
    `#features .box:nth-child(${box}) p`
  );
  myParagraph.innerText = lessP[box - 1];
}
for (let i = 0; i < 3; i++) {
  document.querySelectorAll("#features .box")[i].children[3].onclick =
    function (e) {
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