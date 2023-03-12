window.addEventListener("scroll", function () {
  var instagramIcon = document.querySelector(".instagram-icon");
  var iconPosition = instagramIcon.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;
  if (iconPosition < screenPosition) {
    instagramIcon.classList.add("show");
  }
});
