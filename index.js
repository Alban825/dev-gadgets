document.addEventListener("DOMContentLoaded", function () {
    const previousButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const image = document.getElementById("image");
    const imageSources = [
      "img/canard-jaune-1-l.png",
      "img/canard-jaune-2-l.png",
      "img/canard-jaune-3-l.png",
      "img/canard-jaune-4-l.png",
      "img/canard-jaune-5-l.png",
    ];
    let currentIndex = 0;
  
    function showImage(index) {
      image.src = imageSources[index];
    }
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % imageSources.length;
      showImage(currentIndex);
    }
  
    function showPrevImage() {
      currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
      showImage(currentIndex);
    }
  
    nextButton.addEventListener("click", showNextImage);
  
    previousButton.addEventListener("click", showPrevImage);
  

    showImage(currentIndex);
  });
  