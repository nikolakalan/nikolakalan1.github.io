// Function to add item to cart and transfer to cart.html
function addToCartAndRedirect(quantity) {
    // Retrieve other item details as needed
    var itemName = "AORUS Nvidia RTX 4080";
    var itemPrice = 59000.00;

    // Construct the item object
    var item = {
        name: itemName,
        price: itemPrice,
        quantity: quantity
    };

    // Encode item details as query parameters
    var params = new URLSearchParams();
    params.append('name', item.name);
    params.append('price', item.price);
    params.append('quantity', item.quantity);

    // Construct the URL for cart.html with query parameters
    var url = 'cart.html?' + params.toString();

    // Redirect the user to cart.html with item details
    window.location.href = url;
}

// Event listener for Add to Cart button
document.getElementById('add-to-cart-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag (i.e., navigating to a new page)

    // Retrieve the quantity from the input field
    var quantity = parseInt(document.getElementById('quantity').value);

    // Call the addToCartAndRedirect function with the quantity
    addToCartAndRedirect(quantity);
});

function displayItem(item) {
    var cartItemsDiv = document.getElementById('cart-items');

    // Create a div for the cart item and add a class for styling
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item'); // Add a class for styling

    // Create elements to display item details
    var itemName = document.createElement('p');
    itemName.textContent = 'Product Name: ' + item.name;

    var itemPrice = document.createElement('p');
    itemPrice.textContent = 'Price: ' + item.price.toFixed(2) + ' ден.';

    var itemQuantity = document.createElement('p');
    itemQuantity.textContent = 'Quantity: ' + item.quantity;

    // Append item details to the cart items div
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    itemDiv.appendChild(itemQuantity);
    cartItemsDiv.appendChild(itemDiv);
}