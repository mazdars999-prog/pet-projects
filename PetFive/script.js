document.addEventListener("DOMContentLoaded", function () {
  // ======================================================
  // 1. HERO / sectionOne (слайдер + dots)
  // ======================================================

  const heroImg = document.getElementById("sliderImg");
  const heroNext = document.querySelector(".hero-next");
  const heroPrev = document.querySelector(".hero-prev");
  const heroDots = document.querySelectorAll(".hero-dot");

  const heroImages = [
    "assets/img/slaider/slideOne.png",
    "assets/img/slaider/slideTwo.png",
    "assets/img/slaider/slidethree.png",
    "assets/img/slaider/slidefour.png",
    "assets/img/slaider/slidefive.png",
  ];

  let heroIndex = 0;

  function updateHero() {
    if (!heroImg) return;

    heroImg.src = heroImages[heroIndex];

    heroDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === heroIndex);
    });
  }

  heroNext?.addEventListener("click", () => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    updateHero();
  });

  heroPrev?.addEventListener("click", () => {
    heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
    updateHero();
  });

  heroDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      heroIndex = i;
      updateHero();
    });
  });

  updateHero();

  // ======================================================
  // 2. PROMO SECTION
  // ======================================================

  const promoTrack = document.querySelector(".promo-track");
  const promoNext = document.querySelector(".promo-next");
  const promoPrev = document.querySelector(".promo-prev");

  let promoPosition = 0;
  const promoSlideWidth = 420;

  promoNext?.addEventListener("click", () => {
    promoPosition += promoSlideWidth;
    promoTrack.style.transform = `translateX(-${promoPosition}px)`;
  });

  promoPrev?.addEventListener("click", () => {
    promoPosition -= promoSlideWidth;

    if (promoPosition < 0) {
      promoPosition = 0;
    }

    promoTrack.style.transform = `translateX(-${promoPosition}px)`;
  });

  // ======================================================
  // 3. COMMAND SECTION
  // ======================================================

  const commandTrack = document.querySelector(".command-track");
  const commandNext = document.querySelector(".command-next");
  const commandPrev = document.querySelector(".command-prev");

  let commandPosition = 0;
  const commandWidth = 320;

  commandNext?.addEventListener("click", () => {
    commandPosition += commandWidth;
    commandTrack.style.transform = `translateX(-${commandPosition}px)`;
  });

  commandPrev?.addEventListener("click", () => {
    commandPosition -= commandWidth;

    if (commandPosition < 0) {
      commandPosition = 0;
    }

    commandTrack.style.transform = `translateX(-${commandPosition}px)`;
  });

  // ======================================================
  // 4. EQUIPMENT SECTION
  // ======================================================

  const equipmentTrack = document.querySelector(".equipment-track");
  const equipmentNext = document.querySelector(".equipment-next");
  const equipmentPrev = document.querySelector(".equipment-prev");

  let equipmentPosition = 0;
  const equipmentWidth = 300;

  equipmentNext?.addEventListener("click", () => {
    equipmentPosition += equipmentWidth;
    equipmentTrack.style.transform = `translateX(-${equipmentPosition}px)`;
  });

  equipmentPrev?.addEventListener("click", () => {
    equipmentPosition -= equipmentWidth;

    if (equipmentPosition < 0) {
      equipmentPosition = 0;
    }

    equipmentTrack.style.transform = `translateX(-${equipmentPosition}px)`;
  });

  // ======================================================
  // 5. REVIEWS (стрелки + dots)
  // ======================================================

  const reviewsTrack = document.querySelector(".reviews-track");
  const reviewsCards = document.querySelectorAll(".review-card");

  const reviewsNext = document.querySelector(".reviews-next");
  const reviewsPrev = document.querySelector(".reviews-prev");

  const reviewsDotsContainer = document.querySelector(".reviews-dots");

  let reviewsIndex = 0;
  const reviewsWidth = 420;

  function createReviewsDots() {
    if (!reviewsDotsContainer) return;

    reviewsCards.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");

      dot.addEventListener("click", () => {
        reviewsIndex = i;
        moveReviews();
      });

      reviewsDotsContainer.appendChild(dot);
    });
  }

  function updateReviewsDots() {
    const dots = reviewsDotsContainer.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === reviewsIndex);
    });
  }

  function moveReviews() {
    reviewsTrack.style.transform = `translateX(-${
      reviewsIndex * reviewsWidth
    }px)`;
    updateReviewsDots();
  }

  reviewsNext?.addEventListener("click", () => {
    if (reviewsIndex < reviewsCards.length - 1) {
      reviewsIndex++;
      moveReviews();
    }
  });

  reviewsPrev?.addEventListener("click", () => {
    if (reviewsIndex > 0) {
      reviewsIndex--;
      moveReviews();
    }
  });

  createReviewsDots();
  updateReviewsDots();

  // ======================================================
  // 6. RESULTS
  // ======================================================

  const resultsTrack = document.querySelector(".results-track");
  const resultsSlides = document.querySelectorAll(".result-slide");

  const resultsNext = document.querySelector(".result-next");
  const resultsPrev = document.querySelector(".result-prev");

  let resultsPosition = 0;

  const resultWidth = 220;
  const visibleSlides = 4;

  const maxPosition = (resultsSlides.length - visibleSlides) * resultWidth;

  resultsNext?.addEventListener("click", () => {
    resultsPosition += resultWidth;

    if (resultsPosition > maxPosition) {
      resultsPosition = maxPosition;
    }

    resultsTrack.style.transform = `translateX(-${resultsPosition}px)`;
  });

  resultsPrev?.addEventListener("click", () => {
    resultsPosition -= resultWidth;

    if (resultsPosition < 0) {
      resultsPosition = 0;
    }

    resultsTrack.style.transform = `translateX(-${resultsPosition}px)`;
  });
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const servicesBtn = document.querySelector(".services-toggle");
  const servicesMenu = document.getElementById("servicesMenu");

  burger?.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  servicesBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    servicesMenu?.classList.toggle("active");
    servicesBtn.classList.toggle("rotate");
  });

  document.addEventListener("click", (e) => {
    if (
      servicesMenu &&
      servicesBtn &&
      !servicesMenu.contains(e.target) &&
      !servicesBtn.contains(e.target)
    ) {
      servicesMenu.classList.remove("active");
      servicesBtn.classList.remove("rotate");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      burger?.classList.remove("active");
      navbar?.classList.remove("active");
    }
  });
  // ======================================================
  // 5.1 REVIEWS TABS
  // ======================================================

  const reviewsTabs = document.querySelectorAll(".reviews-tab");
  const reviewCards = document.querySelectorAll(".review-card");

  reviewsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.tab;

      reviewsTabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");

      reviewCards.forEach((card) => {
        const cardCategory = card.dataset.category;

        if (category === "all" || category === cardCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // после фильтрации сбрасываем слайдер в начало
      reviewsIndex = 0;
      if (reviewsTrack) {
        reviewsTrack.style.transform = `translateX(0px)`;
      }

      // обновляем точки
      if (reviewsDotsContainer) {
        reviewsDotsContainer.innerHTML = "";

        const visibleCards = Array.from(reviewCards).filter(
          (card) => card.style.display !== "none",
        );

        visibleCards.forEach((_, i) => {
          const dot = document.createElement("span");
          dot.classList.add("dot");

          if (i === 0) {
            dot.classList.add("active");
          }

          dot.addEventListener("click", () => {
            reviewsIndex = i;
            reviewsTrack.style.transform = `translateX(-${
              reviewsIndex * reviewsWidth
            }px)`;

            reviewsDotsContainer
              .querySelectorAll(".dot")
              .forEach((d, index) => {
                d.classList.toggle("active", index === reviewsIndex);
              });
          });

          reviewsDotsContainer.appendChild(dot);
        });
      }
    });
  });
});
