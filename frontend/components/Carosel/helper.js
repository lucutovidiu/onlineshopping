const animationArray = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shake",
  "headShake",
  "swing",
  "tada",
  //   "wobble",
  "jello",
  //   "bounceIn",
  //   "bounceInDown",
  //   "bounceInLeft",
  //   "bounceInRight",
  //   "bounceInUp",
  // "bounceOut",
  // "bounceOutDown",
  // "bounceOutLeft",
  // "bounceOutRight",
  // "bounceOutUp",
  "fadeIn",
  //   "fadeInDown",
  //   "fadeInDownBig",
  //   "fadeInLeft",
  //   "fadeInLeftBig",
  //   "fadeInRight",
  //   "fadeInRightBig",
  //   "fadeInUp",
  //   "fadeInUpBig",
  // "fadeOut",
  // "fadeOutDown",
  // "fadeOutDownBig",
  // "fadeOutLeft",
  // "fadeOutLeftBig",
  // "fadeOutRight",
  // "fadeOutRightBig",
  // "fadeOutUp",
  // "fadeOutUpBig",
  "flipInX",
  // "flipInY",
  // "flipOutX",
  // "flipOutY",
  //   "lightSpeedIn",
  // "lightSpeedOut",
  //   "rotateIn",
  //   "rotateInDownLeft",
  //   "rotateInDownRight",
  //   "rotateInUpLeft",
  //   "rotateInUpRight",
  // "rotateOut",
  // "rotateOutDownLeft",
  // "rotateOutDownRight",
  // "rotateOutUpLeft",
  // "rotateOutUpRight",
  //   "hinge",
  "jackInTheBox",
  //   "rollIn",
  // "rollOut",
  "zoomIn",
  //   "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  // "zoomOut",
  // "zoomOutDown",
  // "zoomOutLeft",
  // "zoomOutRight",
  // "zoomOutUp",
  // "slideInDown",
  //   "slideInLeft",
  //   "slideInRight",
  "slideInUp"
  // "slideOutDown",
  // "slideOutLeft",
  // "slideOutRight",
  // "slideOutUp",
  // "heartBeat"
];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setCurrentImage(imageArray) {
  if (
    typeof imageArray === "undefined" ||
    imageArray === null ||
    imageArray.length === 0
  ) {
    return null;
  } else {
    return imageArray[0];
  }
}

export { animationArray, getRndInteger, setCurrentImage };
