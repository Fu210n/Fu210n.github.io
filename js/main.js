$( document ).ready(function() {
    $('.nav_toggle').on("click", function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("open");
    });

});




document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll(".poster-slider");
  
    slideshows.forEach(function (slideshow) {
      const slides = slideshow.querySelector(".slides");
      const slideWidth = slides.querySelector(".slide").clientWidth;
      const prevBtn = document.createElement("button");
      const nextBtn = document.createElement("button");
  
      let currentIndex = 0;
  
      function goToSlide(index) {
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
      }
  
      function showSlide(index) {
        const activeSlide = slideshow.querySelector(".slide.active");
        if (activeSlide) {
          activeSlide.classList.remove("active");
        }
        const newActiveSlide = slideshow.querySelectorAll(".slide")[index];
        if (newActiveSlide) {
          newActiveSlide.classList.add("active");
        }
      }
  
      function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.querySelectorAll(".slide").length - 1;
      }
  
      prevBtn.classList.add("left");
      nextBtn.classList.add("right");
  
      prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          goToSlide(currentIndex);
          showSlide(currentIndex);
          updateButtons();
        }
      });
  
      nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.querySelectorAll(".slide").length - 1) {
          currentIndex++;
          goToSlide(currentIndex);
          showSlide(currentIndex);
          updateButtons();
        }
      });
  
      slideshow.appendChild(prevBtn);
      slideshow.appendChild(nextBtn);
  
      const slideImages = slideshow.querySelectorAll(".slide img");
      slideImages.forEach(function (image) {
        image.addEventListener("click", function () {
          const overlay = document.createElement("div");
          overlay.classList.add("overlay");
          const imageClone = image.cloneNode(true);
          overlay.appendChild(imageClone);
          document.body.appendChild(overlay);
  
          overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
          });
        });
      });
  
      handleSwipe(slideshow);
  
      function handleSwipe(element) {
        let touchStartX = 0;
        let touchEndX = 0;
  
        element.addEventListener("touchstart", function (event) {
          touchStartX = event.touches[0].clientX;
        });
  
        element.addEventListener("touchend", function (event) {
          touchEndX = event.changedTouches[0].clientX;
          handleSwipeGesture();
        });
  
        function handleSwipeGesture() {
          const minSwipeDistance = slideWidth / 2; // Mindestabstand für einen Swipe
          const swipeDistance = touchEndX - touchStartX;
  
          if (swipeDistance > minSwipeDistance) {
            // Swipe nach links
            if (currentIndex > 0) {
              currentIndex--;
              goToSlide(currentIndex);
              showSlide(currentIndex);
              updateButtons();
            }
          } else if (swipeDistance < -minSwipeDistance) {
            // Swipe nach rechts
            if (currentIndex < slides.querySelectorAll(".slide").length - 1) {
              currentIndex++;
              goToSlide(currentIndex);
              showSlide(currentIndex);
              updateButtons();
            }
          }
        }
      }
  
      const slideCount = slides.querySelectorAll(".slide").length;
      if (slideCount <= 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      }
  
      showSlide(currentIndex);
      updateButtons();
    });
  });
















  $(document).ready(function() {
    $(".animation").hover(
        function() {
            $(this).find(".video-overlay").css("opacity", "1");
        },
        function() {
            $(this).find(".video-overlay").css("opacity", "0");
        }
    );
});











document.addEventListener("DOMContentLoaded", function(event){
  var loader = document.getElementById("loader");
  var content = document.getElementById("content");
  var loaderVideo = document.getElementById("loader-video");

  loaderVideo.oncanplaythrough = function(){
    setTimeout(function() {
      loader.style.display = "none";
      content.style.display = "block";
      loaderVideo.pause();
    }, 2750);
  };
});