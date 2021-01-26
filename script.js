var pos = 0 
let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

var direction = 0;
var focus = 0;

function Run(){
  let img = document.getElementById('PacMan');
  let imgWidth = img.Width;
  focus = (focus + 1)% 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

function clickListener(){
  setInterval(Run, 200)
}

function checkPageBounds(direction, imgWidth, pos, pageWidth){
  if (pos >= pageWidth){
    direction = 1;
  }

  if(pos < 0){
    direction = 0;
  }

  return direction;
}