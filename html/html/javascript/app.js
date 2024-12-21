
    // Mảng lưu trữ các sản phẩm đã thêm vào giỏ hàng
    let cart = [];
    const cartCountElement = document.getElementById("cart-count");

    // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
    function updateCartCount() {
        cartCountElement.textContent = cart.length; // Số lượng sản phẩm
    }

    // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(productName, productPrice) {
        const product = {
            name: productName,
            price: productPrice
        };
        cart.push(product); // Thêm sản phẩm vào mảng
        updateCartCount();  // Cập nhật số lượng hiển thị
        alert(`${productName} đã được thêm vào giỏ hàng!`);
    }

    // Thêm sự kiện Add To Cart
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productCard = button.closest(".product-card");
            const productName = productCard.querySelector("h5").textContent;
            const productPrice = productCard.querySelector(".product-price").textContent;

            addToCart(productName, productPrice);
        });
    });
