let url;
window.addEventListener("load", myMain, false);

function myMain(evt) {
  console.log("RUNNING NO SIGNUP TIKTOK EXTENSION");

  const video = document.querySelector("video[playsinline");

  if (video?.src) {
    url = video.src;
    window.open(url, "_blank");
  }
}


