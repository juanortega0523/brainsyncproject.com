var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("bg-gradient-to-r");
    this.classList.toggle("from-violet-500");
    this.classList.toggle("via-pink-500");
    this.classList.toggle("to-yellow-300");
    this.classList.toggle("shadow");

    // console.log(this.firstChild.nextElementSibling);
    this.firstChild.nextElementSibling.classList.toggle("rotate-180");

    var panel = this.nextElementSibling;
    // console.log(panel);
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
