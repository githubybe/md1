const bigimg = document.querySelector(".product-content-big-img");
const smallimg = document.querySelectorAll(".product-content-small-img img");
smallimg.forEach(function (imgItem, x) {
  imgItem.addEventlistener("click", function () {
    bigimg.src = imgItem.src;
  });
});
