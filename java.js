let totalSeconds = 43 * 60 + 10; // 43 phút 10 giây
const timer = document.getElementById("timer");

const interval = setInterval(() => {
  if (totalSeconds > 0) {
    totalSeconds--;
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    timer.textContent = `00:${m}:${s}`;
  } else {
    clearInterval(interval);
    timer.textContent = "00:00:00";
  }
}, 1000);



let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const sliderWrapper = document.querySelector('.slider-wrapper');
const imageCountText = document.querySelector('.image-count');
const totalImages = images.length;
document.getElementById('total-images').textContent = totalImages;

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  imageCountText.innerHTML = `${currentIndex + 1} / <span id="total-images">${totalImages}</span>`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
}

updateSlider();



  document.getElementById("toggle-options").addEventListener("click", function () {
    const box = document.getElementById("options-box");
    box.style.display = box.style.display === "none" ? "block" : "none";
  });


  function togglePolicy(element) {
      element.classList.toggle('active');
    }

     function toggleReview(element) {
      element.classList.toggle('active');
    }