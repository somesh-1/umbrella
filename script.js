window.onload = function () {
  const input = document.querySelector("input");
  const preview = document.querySelector(".preview");
  const para = document.querySelector(".pic");
  const image = document.getElementById("logo-img");
  input.addEventListener("change", updateImageDisplay);
  function updateImageDisplay() {
    showLoader();
    para.style.display = "none";
    const curFiles = input.files;

    image.src = URL.createObjectURL(curFiles[0]);

    image.style.opacity = 1;
    hideLoader();
  }
};

function showLoader() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("imgChange").style.display = "none";
  document.getElementById("logo-img").style.display = "none";
}

function hideLoader() {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000);
  setTimeout(function () {
    document.getElementById("imgChange").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("logo-img").style.display = "block";
  }, 2000);
}

function changeImagePink() {
  document.getElementById("imgChange").src = "Assets/Pink_umbrella.png";
  document.body.style.background = "pink";
  showLoader();
  document.getElementById("loader").style.filter =
    "invert(77%) sepia(31%) saturate(5447%) hue-rotate(303deg) brightness(101%) contrast(101%)";

  hideLoader();
}

function changeImageBlue() {
  document.getElementById("imgChange").src = "Assets/Blue_umbrella.png";
  document.body.style.background = "#AFEEEE";
  showLoader();
  document.getElementById("loader").style.filter =
    "invert(8%) sepia(100%) saturate(10224%) hue-rotate(248deg) brightness(102%) contrast(143%)";
  hideLoader();
}

function changeImageYellow() {
  document.getElementById("imgChange").src = "Assets/Yello_umbrella.png";
  document.body.style.background = "yellow";
  showLoader();
  document.getElementById("loader").style.filter =
    "invert(39%) sepia(70%) saturate(1007%) hue-rotate(344deg) brightness(106%) contrast(108%)";
  hideLoader();
}
