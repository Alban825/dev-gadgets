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
    const cartCounter = document.querySelector(".cart-nb");

    let cartQuantity = 0;

    function updateCartCounter(quantity) {
        cartQuantity = quantity;
        cartCounter.textContent = cartQuantity > 99 ? "99+" : cartQuantity;
    }

    addToCartButton.addEventListener("click", function () {
        const quantity = parseInt(quantityInput.value);

        if (!isNaN(quantity) && quantity > 0) {
            cartQuantity += quantity;
            updateCartCounter(cartQuantity);

            addToCartButton.disabled = true;
            addToCartButton.textContent = "Déjà au panier";
        }
    });
});