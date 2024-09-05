document.addEventListener("DOMContentLoaded", () => {
   const navItem = document.querySelectorAll(".nav__item");
   const startTab = document.getElementById("nav-start");
   const workTab = document.getElementById("nav-work-tab");
   const educationTab = document.getElementById("nav-education-tab");
   const startTabArrow = startTab.querySelector(
      ".arrow-container__startTabArrow"
   );
   const workTabArrow = workTab.querySelector(".arrow-container__workTabArrow");
   const educationTabArrow = educationTab.querySelector(
      ".arrow-container__educationtabarrow"
   );

   const compressed = document.querySelector(".compressed");

   function rotateArrow(arrow) {
      arrow.style.transform = "rotate(135deg)";
   }
   function resetArrow(arrow) {
      arrow.style.transform = "rotate(0deg)";
   }
   function resetTabs() {
      startTab.classList.remove(compressed);
      workTab.classList.remove(compressed);
   }
   function srcChange(arrow, newSrc) {
      arrow.classList.add("no-rotate");
      arrow.src = newSrc;
   }

   //function for rotation of arrows when mouseover nav.

   workTab.addEventListener("mouseenter", function () {
      resetTabs();
      startTab.classList.add("compressed");
      srcChange(startTabArrow, "images/filledpurplearrow.svg");
      rotateArrow(startTabArrow);
   });
   workTab.addEventListener("mouseleave", function () {
      startTab.classList.remove("compressed");
      srcChange(startTabArrow, "images/purplearrow.svg");
      resetArrow(startTabArrow);
   });
   educationTab.addEventListener("mouseenter", function () {
      resetTabs();
      startTab.classList.add("compressed");
      workTab.classList.add("compressed");
      rotateArrow(workTabArrow);
      rotateArrow(startTabArrow);
      srcChange(educationTabArrow, "images/filledwhitearrow.svg");
      srcChange(startTabArrow, "images/filledpurplearrow.svg");
      srcChange(workTabArrow, "images/filledorangearrow.svg");
   });
   educationTab.addEventListener("mouseleave", function () {
      startTab.classList.remove("compressed");
      workTab.classList.remove("compressed");
      resetArrow(workTabArrow);
      resetArrow(startTabArrow);
      srcChange(educationTabArrow, "images/whitearrow.svg");
      srcChange(workTabArrow, "images/orangearrow.svg");
      srcChange(startTabArrow, "images/purplearrow.svg");
   });
});
