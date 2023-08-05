var cricle = document.getElementById("replacePhoto");

cricle.addEventListener("mouseover", function () {
  this.src = "/images/sad.png";
});
cricle.addEventListener("mouseout", function () {
  this.src = "/images/smiley.png";
});
