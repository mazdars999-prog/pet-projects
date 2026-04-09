document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const SELECTORS = {
    heroImage: "#sliderImg",
    heroNext: ".hero-next",
    heroPrev: ".hero-prev",
    heroDots: ".hero-dot",

    promoTrack: ".promo-track",
    promoNext: ".promo-next",
    promoPrev: ".promo-prev",

    commandTrack: ".command-track",
    commandCards: ".command-track .specialist-card",
    commandNext: ".command-next",
    commandPrev: ".command-prev",

    equipmentTrack: ".equipment-track",
    equipmentCards: ".equipment-track .specialist-card",
    equipmentNext: ".equipment-next",
    equipmentPrev: ".equipment-prev",

    reviewsTrack: ".reviews-track",
    reviewsCards: ".review-card",
    reviewsNext: ".reviews-next",
    reviewsPrev: ".reviews-prev",
    reviewsDots: ".reviews-dots",
    reviewsTabs: ".reviews-tab",

    resultsTrack: ".results-track",
    resultsSlides: ".result-slide",
    resultsNext: ".result-next",
    resultsPrev: ".result-prev",

    burger: ".burger",
    navbar: ".navbar",
    servicesToggle: ".services-toggle",
    servicesMenu: "#servicesMenu",
  };

  const HERO_IMAGES = [
    "assets/img/slaider/slideOne.png",
    "assets/img/slaider/slideTwo.png",
    "assets/img/slaider/slidethree.png",
    "assets/img/slaider/slidefour.png",
    "assets/img/slaider/slidefive.png",
  ];

  const BREAKPOINTS = {
    mobileSlider: 1000,
    desktopMenu: 920,
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) =>
    Array.from(scope.querySelectorAll(selector));

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function debounce(callback, delay = 100) {
    let timeoutId = null;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    };
  }

  function getGap(element) {
    if (!element) return 0;

    const styles = window.getComputedStyle(element);
    return parseInt(styles.columnGap || styles.gap, 10) || 0;
  }

  function setTranslateX(element, value) {
    if (!element) return;
    element.style.transform = `translateX(-${value}px)`;
  }

  function createHeroSlider() {
    const image = $(SELECTORS.heroImage);
    const nextButton = $(SELECTORS.heroNext);
    const prevButton = $(SELECTORS.heroPrev);
    const dots = $$(SELECTORS.heroDots);

    if (!image || !HERO_IMAGES.length) return;

    let currentIndex = 0;

    const render = () => {
      image.src = HERO_IMAGES[currentIndex];

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    };

    const goTo = (index) => {
      currentIndex = (index + HERO_IMAGES.length) % HERO_IMAGES.length;
      render();
    };

    nextButton?.addEventListener("click", () => goTo(currentIndex + 1));
    prevButton?.addEventListener("click", () => goTo(currentIndex - 1));

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goTo(index));
    });

    render();
  }

  function createBasicTrackSlider({
    trackSelector,
    nextSelector,
    prevSelector,
    step,
    getMaxOffset,
  }) {
    const track = $(trackSelector);
    const nextButton = $(nextSelector);
    const prevButton = $(prevSelector);

    if (!track) return;

    let offset = 0;

    const render = () => {
      const maxOffset = Math.max(0, getMaxOffset());
      offset = clamp(offset, 0, maxOffset);
      setTranslateX(track, offset);
    };

    nextButton?.addEventListener("click", () => {
      offset += step();
      render();
    });

    prevButton?.addEventListener("click", () => {
      offset -= step();
      render();
    });

    window.addEventListener("resize", debounce(render, 120));
    render();
  }

  function createCardsSlider({
    trackSelector,
    cardsSelector,
    nextSelector,
    prevSelector,
    getVisibleCards,
  }) {
    const track = $(trackSelector);
    const nextButton = $(nextSelector);
    const prevButton = $(prevSelector);

    if (!track) return;

    let currentIndex = 0;

    const getCards = () => $$(cardsSelector);
    const getStep = () => {
      const cards = getCards();
      if (!cards.length) return 0;
      return cards[0].offsetWidth + getGap(track);
    };

    const render = () => {
      const cards = getCards();
      const visibleCards = getVisibleCards();
      const maxIndex = Math.max(0, cards.length - visibleCards);

      currentIndex = clamp(currentIndex, 0, maxIndex);
      setTranslateX(track, currentIndex * getStep());
    };

    nextButton?.addEventListener("click", () => {
      const maxIndex = Math.max(0, getCards().length - getVisibleCards());
      if (currentIndex < maxIndex) {
        currentIndex += 1;
        render();
      }
    });

    prevButton?.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        render();
      }
    });

    window.addEventListener("resize", debounce(render, 120));
    render();
  }

  function createResultsSlider() {
    createBasicTrackSlider({
      trackSelector: SELECTORS.resultsTrack,
      nextSelector: SELECTORS.resultsNext,
      prevSelector: SELECTORS.resultsPrev,
      step: () => 220,
      getMaxOffset: () => {
        const slides = $$(SELECTORS.resultsSlides);
        const visibleSlides = 4;
        const slideWidth = 220;

        return Math.max(0, (slides.length - visibleSlides) * slideWidth);
      },
    });
  }

  function createPromoSlider() {
    createBasicTrackSlider({
      trackSelector: SELECTORS.promoTrack,
      nextSelector: SELECTORS.promoNext,
      prevSelector: SELECTORS.promoPrev,
      step: () => 420,
      getMaxOffset: () => {
        const track = $(SELECTORS.promoTrack);
        if (!track || !track.parentElement) return 0;

        const maxOffset = track.scrollWidth - track.parentElement.clientWidth;
        return Math.max(0, maxOffset);
      },
    });
  }

  function createResponsiveCardsSliders() {
    createCardsSlider({
      trackSelector: SELECTORS.commandTrack,
      cardsSelector: SELECTORS.commandCards,
      nextSelector: SELECTORS.commandNext,
      prevSelector: SELECTORS.commandPrev,
      getVisibleCards: () =>
        window.innerWidth <= BREAKPOINTS.mobileSlider ? 2 : 4,
    });

    createCardsSlider({
      trackSelector: SELECTORS.equipmentTrack,
      cardsSelector: SELECTORS.equipmentCards,
      nextSelector: SELECTORS.equipmentNext,
      prevSelector: SELECTORS.equipmentPrev,
      getVisibleCards: () =>
        window.innerWidth <= BREAKPOINTS.mobileSlider ? 2 : 4,
    });
  }

  function createReviewsSlider() {
    const track = $(SELECTORS.reviewsTrack);
    const nextButton = $(SELECTORS.reviewsNext);
    const prevButton = $(SELECTORS.reviewsPrev);
    const dotsContainer = $(SELECTORS.reviewsDots);
    const tabs = $$(SELECTORS.reviewsTabs);

    if (!track || !dotsContainer) return;

    let currentIndex = 0;

    const getAllCards = () => $$(SELECTORS.reviewsCards);
    const getVisibleCards = () =>
      getAllCards().filter((card) => card.style.display !== "none");

    const getCardWidth = () => {
      const firstVisibleCard = getVisibleCards()[0];
      if (!firstVisibleCard) return 0;
      return firstVisibleCard.offsetWidth + getGap(track);
    };

    const renderDots = () => {
      const visibleCards = getVisibleCards();

      dotsContainer.innerHTML = "";

      visibleCards.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.classList.toggle("active", index === currentIndex);

        dot.addEventListener("click", () => {
          currentIndex = index;
          render();
        });

        dotsContainer.appendChild(dot);
      });
    };

    const render = () => {
      const visibleCards = getVisibleCards();
      const maxIndex = Math.max(0, visibleCards.length - 1);

      currentIndex = clamp(currentIndex, 0, maxIndex);
      setTranslateX(track, currentIndex * getCardWidth());

      const dots = $$(".dot", dotsContainer);
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    };

    const filterCards = (category) => {
      getAllCards().forEach((card) => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === "all" || cardCategory === category;
        card.style.display = shouldShow ? "block" : "none";
      });

      currentIndex = 0;
      renderDots();
      render();
    };

    nextButton?.addEventListener("click", () => {
      const maxIndex = Math.max(0, getVisibleCards().length - 1);
      if (currentIndex < maxIndex) {
        currentIndex += 1;
        render();
      }
    });

    prevButton?.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        render();
      }
    });

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.tab || "all";

        tabs.forEach((button) => button.classList.remove("active"));
        tab.classList.add("active");

        filterCards(category);
      });
    });

    window.addEventListener("resize", debounce(render, 120));

    renderDots();
    render();
  }

  function createHeaderMenu() {
    const burger = $(SELECTORS.burger);
    const navbar = $(SELECTORS.navbar);
    const servicesToggle = $(SELECTORS.servicesToggle);
    const servicesMenu = $(SELECTORS.servicesMenu);

    const closeMobileMenu = () => {
      burger?.classList.remove("active");
      navbar?.classList.remove("active");
    };

    const closeServicesMenu = () => {
      servicesMenu?.classList.remove("active");
      servicesToggle?.classList.remove("rotate");
      servicesToggle?.setAttribute("aria-expanded", "false");
    };

    burger?.addEventListener("click", () => {
      const isActive = burger.classList.toggle("active");
      navbar?.classList.toggle("active", isActive);
      burger.setAttribute("aria-expanded", String(isActive));
    });

    servicesToggle?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const willOpen = !servicesMenu?.classList.contains("active");

      servicesMenu?.classList.toggle("active", willOpen);
      servicesToggle.classList.toggle("rotate", willOpen);
      servicesToggle.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", (event) => {
      const target = event.target;

      if (
        servicesMenu &&
        servicesToggle &&
        target instanceof Node &&
        !servicesMenu.contains(target) &&
        !servicesToggle.contains(target)
      ) {
        closeServicesMenu();
      }
    });

    window.addEventListener(
      "resize",
      debounce(() => {
        if (window.innerWidth > BREAKPOINTS.desktopMenu) {
          closeMobileMenu();
        }
      }, 120),
    );
  }

  createHeroSlider();
  createPromoSlider();
  createResponsiveCardsSliders();
  createReviewsSlider();
  createResultsSlider();
  createHeaderMenu();
});
