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

   //functions and actions taken in nav-menu
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

   const startH1 = document.querySelector("#nav-start .tab-content h1");
   const workH1 = document.querySelector("#nav-work-tab .tab-content h1");
   const educationH1 = document.querySelector(
      "#nav-education-tab .tab-content h1"
   );

   //function for toggle styles between open and close.
   function toggelStyleOpenClosed(...h1Elements) {
      console.log("Function called with:", h1Elements);
      h1Elements.forEach((h1) => {
         console.log(
            `before resuestedAnimationFrame h1: ${
               h1.textContent
            }, classes: ${Array.from(h1.classList).join(" ")}`
         );
         // requestAnimationFrame is used to optimize DOM updates.
         // It ensures that animations and style changes are synchronized with the browser's rendering cycle,
         // providing better performance and smoother transitions.
         // The function is executed before the next screen repaint, typically at a rate of 60 frames per second.

         requestAnimationFrame(() => {
            console.log(
               `insides resuestedAnimationFrame h1: ${
                  h1.textContent
               }, classes: ${Array.from(h1.classList).join(" ")}`
            );
            if (h1.classList.contains("open")) {
               h1.classList.remove("open");
               h1.classList.add("closed");
            } else {
               h1.classList.remove("closed");
               h1.classList.add("open");
            }
            console.log(
               `after resuestedAnimationFrame h1: ${
                  h1.textContent
               }, classes: ${Array.from(h1.classList).join(" ")}`
            );
         });
      });
   }

   //function called in eventlisteners in nav-menu

   workTab.addEventListener("mouseenter", function () {
      console.log("mouse enter workTab");
      toggelStyleOpenClosed(workH1, startH1);
      resetTabs();
      startTab.classList.add("compressed");
      srcChange(startTabArrow, "images/filledpurplearrow.svg");
      rotateArrow(startTabArrow);
   });
   workTab.addEventListener("mouseleave", function () {
      ("mouseleave workTab");
      toggelStyleOpenClosed(workH1, startH1);
      startTab.classList.remove("compressed");
      srcChange(startTabArrow, "images/purplearrow.svg");
      resetArrow(startTabArrow);
   });
   educationTab.addEventListener("mouseenter", function () {
      console.log("mouse enter education tab");
      toggelStyleOpenClosed(workH1, startH1, educationH1);
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
      console.log("mouse leave eduvationtab");
      toggelStyleOpenClosed(workH1, startH1, educationH1);
      startTab.classList.remove("compressed");
      workTab.classList.remove("compressed");
      resetArrow(workTabArrow);
      resetArrow(startTabArrow);
      srcChange(educationTabArrow, "images/whitearrow.svg");
      srcChange(workTabArrow, "images/orangearrow.svg");
      srcChange(startTabArrow, "images/purplearrow.svg");
   });
});
//functions for header and nav ended
