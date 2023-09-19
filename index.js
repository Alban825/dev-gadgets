// click-button-left-right
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const image = document.getElementById("image");
    const imageSources = [
        "img/canard-jaune-1-l.png",
        "img/canard-jaune-2-l.png",
        "img/canard-jaune-3-l.png",
        "img/canard-jaune-4-l.png",
        "img/canard-jaune-5-l.png",
    ];
    const thumbs = document.querySelectorAll(".thumbs-img");
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

    prevButton.addEventListener("click", showPrevImage);

    //hover
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("mouseenter", function () {
            showImage(index);
        });

        thumb.addEventListener("mouseleave", function () {
            showImage(currentIndex);
        });
    });

    // cart
    const addToCartButton = document.querySelector(".add-cta");
    const quantityInput = document.querySelector(".add-qty");
    const cart = document.querySelector(".cart-nb");

    let cartQuantity = 0;

    function updateCart(quantity) {
        cartQuantity = quantity;
        cart.textContent = cartQuantity > 99 ? "99+" : cartQuantity;
    }

    addToCartButton.addEventListener("click", function () {
        const quantity = parseInt(quantityInput.value);

        if (!isNaN(quantity) && quantity > 0) {
            cartQuantity += quantity;
            updateCart(cartQuantity);

            addToCartButton.disabled = true;
            addToCartButton.textContent = "Déjà au panier";
        }
    });
});

// Accordion
document.addEventListener("DOMContentLoaded", function () {
    const advantagesTitle = document.querySelector(".product-acrd-lnk:nth-of-type(1)");
    const characteristicsTitle = document.querySelector(".product-acrd-lnk:nth-of-type(2)");
    const advantagesContent = document.querySelector(".product-advantages");
    const characteristicsContent = document.querySelector(".product-car");
  
    const AdvantagesOpen = localStorage.getItem("advantagesOpen") === "true";
    const CharacteristicsOpen = localStorage.getItem("characteristicsOpen") === "true";
  
    function toggleAccordion(title, content) {
      const isOpen = !title.classList.contains("closed");

      if (isOpen) {
        title.classList.add("closed");
        content.style.display = "none";
      } else {
        title.classList.remove("closed");
        content.style.display = "block";
      }
      localStorage.setItem(title.dataset.key, !isOpen);
    }
  
    advantagesTitle.addEventListener("click", function () {
      toggleAccordion(advantagesTitle, advantagesContent);
    });
  
    characteristicsTitle.addEventListener("click", function () {
      toggleAccordion(characteristicsTitle, characteristicsContent);
    });
  
    if (AdvantagesOpen) {
      toggleAccordion(advantagesTitle, advantagesContent);
    }
  
    if (CharacteristicsOpen) {
      toggleAccordion(characteristicsTitle, characteristicsContent);
    }
  });
  