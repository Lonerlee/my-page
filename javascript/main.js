var img = {
  home1: "mountain-large.png",
  home2: "fist-large.png",
  home3: "ladder-large.png",
  projects1: "cogwheel-large.png",
  projects2: "spaceship-large.png",
  projects3: "bulb-large.png",
  author1: "student-large.png",
  author2: "rising-large.png",
  author3: "diploma-large.png"
};

function mediaQuery(x) {
  if (x.matches) {
    img = {
      home1: "mountain-small.png",
      home2: "fist-small.png",
      home3: "ladder-small.png",
      projects1: "cogwheel-small.png",
      projects2: "spaceship-small.png",
      projects3: "bulb-small.png",
      author1: "student-small.png",
      author2: "rising-small.png",
      author3: "diploma-small.png"
    };
  } else {
    img = {
      home1: "mountain-large.png",
      home2: "fist-large.png",
      home3: "ladder-large.png",
      projects1: "cogwheel-large.png",
      projects2: "spaceship-large.png",
      projects3: "bulb-large.png",
      author1: "student-large.png",
      author2: "rising-large.png",
      author3: "diploma-large.png"
    };
  }
}

var x = window.matchMedia("(max-width: 550px)");
mediaQuery(x);

var displayed = 0;
var width = 550;

function showMenu() {
  if (displayed === 0) {
    document.getElementById("nav").style.display = "block";
    displayed++;
  } else {
    document.getElementById("nav").style.display = "none";
    displayed = 0;
  }
}

/*EventListener needed to check if resized window is greater than breakpoint and needed to always show navigation*/
window.addEventListener("resize", function() {
  if (window.innerWidth >= width) {
    document.getElementById("nav").style.display = "block";
    displayed = 1;
  }
});
function home() {
  document.getElementById("HomeMain").style.display = "block";
  document.getElementById("Home1").style.display = "block";
  document.getElementById("Home2").style.display = "block";
  document.getElementById("ProjectsMain").style.display = "none";
  document.getElementById("Projects1").style.display = "none";
  document.getElementById("Projects2").style.display = "none";
  document.getElementById("AuthorMain").style.display = "none";
  document.getElementById("Author1").style.display = "none";
  document.getElementById("Author2").style.display = "none";
  document.getElementById("mainImage").src = "images/" + img.home1;
  document.getElementById("secondaryImage").src = "images/" + img.home2;
  document.getElementById("thirdImage").src = "images/" + img.home3;
}
function projects() {
  document.getElementById("HomeMain").style.display = "none";
  document.getElementById("Home1").style.display = "none";
  document.getElementById("Home2").style.display = "none";
  document.getElementById("ProjectsMain").style.display = "block";
  document.getElementById("Projects1").style.display = "block";
  document.getElementById("Projects2").style.display = "block";
  document.getElementById("AuthorMain").style.display = "none";
  document.getElementById("Author1").style.display = "none";
  document.getElementById("Author2").style.display = "none";
  document.getElementById("mainImage").src = "images/" + img.projects1;
  document.getElementById("secondaryImage").src = "images/" + img.projects2;
  document.getElementById("thirdImage").src = "images/" + img.projects3;
}
function author() {
  document.getElementById("HomeMain").style.display = "none";
  document.getElementById("Home1").style.display = "none";
  document.getElementById("Home2").style.display = "none";
  document.getElementById("ProjectsMain").style.display = "none";
  document.getElementById("Projects1").style.display = "none";
  document.getElementById("Projects2").style.display = "none";
  document.getElementById("AuthorMain").style.display = "block";
  document.getElementById("Author1").style.display = "block";
  document.getElementById("Author2").style.display = "block";
  document.getElementById("mainImage").src = "images/" + img.author1;
  document.getElementById("secondaryImage").src = "images/" + img.author2;
  document.getElementById("thirdImage").src = "images/" + img.author3;
}
