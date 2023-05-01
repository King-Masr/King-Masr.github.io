var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "109599243728023");
chatbox.setAttribute("attribution", "biz_inbox");
window.onload = function () {
  document.getElementById("loading").remove();
  document.body.removeAttribute("style");
  let type = new TypeIt("#description", {
    strings: [
      "I am a Full Stack Developer.",
      "I have experience in PHP for 6 years.",
      "My Skills: HTML, CSS, JavaScript, PHP, MySQL, Laravel, Ajax, JSON, and more...",
    ],
    speed: 1000,
    waitUntilVisible: true,
    breakLines: false,
    startDelay: 500,
    deleteSpeed: 100,
    nextStringDelay: 5000,
    loop: true,
    loopDelay: 1000,
  }).go();
  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v15.0'
    });
  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  (function (w, d, s, o, f, js, fjs) {
    w["Mintable_Widget"] = o;
    w[o] = w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "widget", "https://unpkg.com/mintable-widget/dist/index.js");
  widget("init", { targetElementId: "mintable-widget" });
  widget("shownft", {
    size:"mini", ids:["art/listing/C_A_AVMicbM8SQj","art/listing/oqgv3MjTxMyWj3j","/listing/FwxoSpoMwBORwe3","/listing/bn_ShuSUuY64lLa","art/listing/fnz77a9dvX1WFXB","art/listing/5FiWZkY1sX-GYJ0","art/listing/Uarb3v77e9peDvJ","art/listing/b_-Lj1JMDiroCNE","art/listing/P9ib2nkcMWhzMUt","art/listing/OWNHTRWrClE3ojY","art/listing/0gaqFXgVGfzwKDM","art/listing/sBrk8r_PY8HcPCb","art/listing/ZRiodaWLW9UI69S","art/listing/zgw8z2ov7pDccpl","art/listing/HL1fecaL4NVPr1s","art/listing/PgPc0TZPJw2qyYJ","art/listing/gIdBsjgwSETWVkB","art/listing/qNhHmL0SyEFcAsw","art/listing/xyPygIee0fbCFzz","art/listing/6VjxygOIfHInKOI","art/listing/W0XUgf7ezoPrst0","art/listing/oxMST0Yyf9pZ5y-","art/listing/VGnevmE5HuOjFHI","art/listing/-k_GnBhZRP20Y8P","art/listing/8rwNLfhjJi9KdIy","art/listing/oFeS4gBlcHt7fG0","art/listing/Ovm40I_Rhfy-KsL","art/listing/hoM07ZL66rQHn6n","art/listing/BklcylfseRya08l","art/listing/TlkkT9CcAh3iKhy","art/listing/vvVlyi5S8dv0ZH-","art/listing/9lNQAtfyCcRzwwO","art/listing/uP4hcRDMEpsCB3U","art/listing/qeH4XDeHfS1JSi2","art/listing/CR5ZiKtJ5W46tzz","art/listing/ufUCPukNfY158uU","art/listing/2Zhc4St-_dRODoT","art/listing/zBJ3KzTenzPCEz0","art/listing/c2eCVWBGaTTh2xO","art/listing/IPVrJRY9qL4oYGC","art/listing/KL38Vf9bhbE-qxa","art/listing/GjBq-IylXZ4RUs0","art/listing/G61DH2tfuvIIpdC","/listing/kVyYoO3_nS8kQYh","art/listing/YlEtkfvd-dyfFC4","art/listing/XWycLM118vi18f1","art/listing/JbRf1_ECgCYbqGW","art/listing/w8FfCib0vTjInXx","art/listing/N-h2xIuGZhpRLIN","art/listing/4JadKuR_M3osuOW","art/listing/BhoSwlamSgF5FGS","art/listing/7GnHWbsQFg2tNZM","art/listing/H77jd17qDzIipcb","art/listing/GPRdugClFWdwIp-","/listing/FwxoSpoMwBORwe3","/listing/bn_ShuSUuY64lLa"], fontFamily:"Verdana", backgroundColor:"#ffffff", fontColor:"#2d2d2d", subtitleColor:"#727272", buttonColor:"#1877f2", buttonTextColor:"#ffffff", boxShadow:true
  });
  let myImgs = document.getElementsByTagName("img");
  let imgs = Array.from(myImgs);
  imgs.forEach((ele) => {
    if (ele.alt == undefined) ele.alt = "Unknown";
    if (ele.title == undefined) ele.alt = "Unknown";
    ele.onerror = function () {
      this.src = "imgs/image-not-found.png";
    };
  });
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