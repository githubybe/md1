const imgPossition = document.querySelectorAll(".aspect-ratio-169 img");
const imgcontainer = document.querySelector(".aspect-ratio-169");
let index = 0;
let imgNumber = imgPossition.length;
imgPossition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
});
function imgslide() {
  index++;
  console.log(index);
  if (index >= imgNumber) {
    index = 0;
  }
  imgcontainer.style.left = "-" + index * 100 + "%";
}
setInterval(imgslide, 5000);
