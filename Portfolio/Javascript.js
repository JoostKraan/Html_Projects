document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel img');
  let index = 0;

  function showNextImage() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  setInterval(showNextImage, 3000);
});
