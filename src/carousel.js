export function initCarousel(images) {
  let slideIndex = 0;

  const slidesContainer = document.querySelector(".slides");
  const dotsContainer = document.querySelector(".dots");

  slidesContainer.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Dynamically create slides and dots based on the number of images
  images.forEach((image, index) => {
    // Create slide
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = `Image ${index + 1}`;
    slideDiv.appendChild(imgElement);
    slidesContainer.appendChild(slideDiv);

    const dotElement = document.createElement("span");
    dotElement.className = "dot";
    dotsContainer.appendChild(dotElement);
  });

  // Get all the dynamically created slides and dots
  let slides = document.querySelectorAll(".slide img");
  let dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    let offset = -slideIndex * 100;
    document.querySelector(
      ".slides"
    ).style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      dot.className = dot.className.replace(" active", "");
      if (i === slideIndex) {
        dot.className += " active";
      }
    });
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  setInterval(nextSlide, 5000);

  showSlide(slideIndex);

}
