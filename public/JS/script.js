// HAMBURGER MENU
const hamburgerIcone = document.querySelector(".hamburger-menu");
const menu = document.querySelector("nav ul");

hamburgerIcone.addEventListener("click", handleMemuHamburger);

function handleMemuHamburger() {
  menu.classList.toggle("active-menu");
  hamburgerIcone.classList.toggle("close-menu-hamburger");

  if (hamburgerIcone.classList.contains("close-menu-hamburger")) {
    hamburgerIcone.src = `public/img/close-hamburger-menu.svg`;
  } else {
    hamburgerIcone.src = `public/img/hamburger-menu.svg`;
  }
}

// Fonction qui gère les transitions en fonction du scroll et du top de l'élément pour l'afficher
function handleAnimElement(elementName, classNameToAdd, heightElementMesure) {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElement = elementName.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElement).toFixed() - clientHeight * heightElementMesure
  ) {
    elementName.classList.add(classNameToAdd);
  }
}

const mayorImg = document.querySelector(".mayor-info-container img");
const titleNameMayor = document.querySelector(".text-mayor-info h2");
const textInfo1 = document.querySelector(".text-mayor-1");
const textInfo2 = document.querySelector(".text-mayor-2");

// LOCATION TRANSITION
const titleLocation = document.querySelector(".title-location");
const iframe = document.querySelector("iframe");
const locationInfoText = document.querySelector(".location-info-text");

// HISTORY
const logoCity = document.querySelector(".history-section > img");
const imgHistory = document.querySelectorAll(".img-container-history");

function checkTitles() {
  const titleHistory = document.querySelectorAll(".title-history");
  titleHistory.forEach((title) => {
    handleAnimElement(title, "title-scroll-history", 0.8);
  });
}

function checkText() {
  const textHistoryInfo = document.querySelectorAll(".text");
  textHistoryInfo.forEach((text) => {
    handleAnimElement(text, "text-scroll-history", 0.7);
  });
}

function checkPhoto() {
  // Cette fonction gère l'arrivé des images en fonction de leur emplacement (gauche ou droite)
  imgHistory.forEach((img, index) => {
    if (index % 2) {
      handleAnimElement(img, "scroll-img-history", 0.7);
    } else {
      handleAnimElement(img, "scroll-img-history", 0.7);
    }
  });
}

// EFFECTUE LES ANIMATIONS
window.addEventListener("scroll", checkTitles);
window.addEventListener("scroll", checkText);
window.addEventListener("scroll", checkPhoto);

// -----------------------------------------------------------------------

// ALL SCROLL ANIM
window.addEventListener("scroll", () => {
  handleAnimElement(mayorImg, "transition-active", 0.8);
  handleAnimElement(titleNameMayor, "transition-active-text", 0.8);
  handleAnimElement(textInfo1, "transition-active-text", 0.8);
  handleAnimElement(textInfo2, "transition-active-text", 0.7);
  handleAnimElement(titleLocation, "location-scroll", 0.8);
  handleAnimElement(iframe, "scroll-anim-map-text", 0.7);
  handleAnimElement(locationInfoText, "scroll-anim-map-text", 0.7);

  // HISTORY LOGO
  handleAnimElement(logoCity, "animation-logo", 0.8);
});

// GALLERY

// Gestion des images en grand écran quand on clique dessus
const imgGallery = document.querySelectorAll(".container-img");
const screenPicture = document.querySelector(".screen-pictures");
const btnCloseGallery = document.querySelector(".btn-close-image-gallery");
const imgContainerSreen = document.querySelector(".img-container-screen");

imgGallery.forEach((img, index) => {
  img.addEventListener("click", () => {
    const newImg = document.createElement("img");
    newImg.src = `./public/img/gallery-${index}.jpg`;
    newImg.alt = "ferrière image";

    // Ajoute un écouteur d'événement pour empêcher la propagation des clics sur l'image et de retirer le screen seulement en cliquant sur la croix
    newImg.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    imgContainerSreen.appendChild(newImg);
    screenPicture.style.display = "flex";
  });
});

btnCloseGallery.addEventListener("click", () => {
  screenPicture.style.display = "none";
  screenPicture.querySelector("img").remove();
});

screenPicture.addEventListener("click", (e) => {
  screenPicture.style.display = "none";
  screenPicture.querySelector("img").remove();
});

// NAV MENU ANIMATION SCROLL

function handleScrollMenu(section) {
  const elementTop =
    section.getBoundingClientRect().top + window.pageYOffset - 80;
  console.log(elementTop);

  window.scrollTo({
    top: elementTop,
    behavior: "smooth",
  });
}

const navHistory = document.querySelector(".history-nav");
const navActivities = document.querySelector(".activities-nav");
const navHotel = document.querySelector(".hotel-nav");

const historySection = document.querySelector(".history-section");
const activitiesSection = document.querySelector(".activities-section");
const hotelSection = document.querySelector(".hotel");

navHistory.addEventListener("click", () => handleScrollMenu(historySection));
navActivities.addEventListener("click", () =>
  handleScrollMenu(activitiesSection)
);
navHotel.addEventListener("click", () => handleScrollMenu(hotelSection));

// ANIMATION HOTEL

const hotelCard = document.querySelectorAll(".content");

function hotelAnim() {
  hotelCard.forEach((card) => {
    handleAnimElement(card, "scroll-hotel-active", 0.7);
  });
}

window.addEventListener("scroll", hotelAnim);
