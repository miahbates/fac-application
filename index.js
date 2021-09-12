// grab button from html and store in a variable
const colorModeButton = document.getElementById("button-click");

// create function to change colours to different modes when clicked.
// store body in a variable to access more easily.
// use if to remove current mode and add the the next mode.

colorModeButton.addEventListener("click", function changeMode() {
  let body = document.getElementById("body");
  if (body.classList.contains("mode-1")) {
    body.classList.remove("mode-1");
    body.classList.add("mode-2");
  } else if (body.classList.contains("mode-2")) {
    body.classList.remove("mode-2");
    body.classList.add("mode-3"); 
  } else if (body.classList.contains("mode-3")) {
    body.classList.remove("mode-3");
    body.classList.add("mode-4"); 
  } else if (body.classList.contains("mode-4")) {
    body.classList.remove("mode-4");
    body.classList.add("mode-5"); 
  } else {
    body.classList.remove("mode-5");
    body.classList.add("mode-1");
  }
 })

// Decided to try an use a switch and case to add several modes instead, however
// I found it difficult to identify the if body had a string containing one of the modes and ran out of time to explore further.

// colorModeButton.addEventListener("click", function changeMode() {
//   let body = document.querySelector("body");
//   let modeName = ""
//   switch(body) {
//     case: 'body.classList.contains("mode-1")',
//   }
// })


// Img carousel 
// grab, right/left buttons, images from html and store in variables.

const rightArrow = document.getElementById("right-arrow")
const leftArrow = document.getElementById("left-arrow")
const image1 = document.getElementById("me")
const image2 = document.getElementById("gus")
const image3 = document.getElementById("painting")

// When clicking right arrow, hide pic 1 and show pic 2. (1st attempt)
// leftArrow.addEventListener("click", function imageCarouselLeft() {
//   if (image1.classList.contains("carousel-hidden")) {
//     image1.classList.remove("carousel-hidden");
//     image2.classList.add(carousel-hidden);
//   } else {
//     image2.classList.remove("carousel-hidden");
//     image1.classList.add("carousel-hidden");
//   }
// })

// 2nd attempt using three images. realised need to flip logic, 
// if image 1 does not contain the hidden class, this means image 1
// must be visible, therefore hide image 1 and 3 by adding the class 
// and remove class on image 2 to allow it to be displayed.

rightArrow.addEventListener("click", function imageCarouselRight() {
  if (!image1.classList.contains("carousel-hidden")) {
    image1.classList.add("carousel-hidden");
    image2.classList.remove("carousel-hidden");
    image3.classList.add("carousel-hidden");
  } else if (!image2.classList.contains("carousel-hidden")) {
    image2.classList.add("carousel-hidden");
    image1.classList.add("carousel-hidden");
    image3.classList.remove("carousel-hidden");
  } else {
    image3.classList.add("carousel-hidden");
    image1.classList.remove("carousel-hidden");
    image2.classList.add("carousel-hidden");
  }
})

leftArrow.addEventListener("click", function imageCarouselRight() {
  if (!image1.classList.contains("carousel-hidden")) {
    image1.classList.add("carousel-hidden");
    image2.classList.remove("carousel-hidden");
    image3.classList.add("carousel-hidden");
  } else if (!image2.classList.contains("carousel-hidden")) {
    image2.classList.add("carousel-hidden");
    image1.classList.add("carousel-hidden");
    image3.classList.remove("carousel-hidden");
  } else {
    image3.classList.add("carousel-hidden");
    image1.classList.remove("carousel-hidden");
    image2.classList.add("carousel-hidden");
  }
})


