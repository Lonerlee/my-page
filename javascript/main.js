var img = {
  home1: "025-mountain.png",
  home2: "005-fist.png",
  home3: "018-ladder.png",
  projects1: "044-cogwheel.png",
  projects2: "045-spaceship.png",
  projects3: "047-bulb.png",
  author1: "031-student.png",
  author2: "039-rising.png",
  author3: "048-diploma.png"
};

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
