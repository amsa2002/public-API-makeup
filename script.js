

fetch('https://makeup-api.herokuapp.com/api/v1/products/1048.json')
            .then(response => response.json())
            .then(data => {
                // Manipulate the DOM to display the product details
                displayProductDetails(data);
            })
            .catch(error => console.error('Error fetching data:', error));

        // Function to display product details in the DOM
        function displayProductDetails(productData) {
            const productDetailsDiv = document.getElementById('productDetails');

            // Check if the productData is not empty
            if (Object.keys(productData).length > 0) {
                // Create HTML elements to display product details
                const productNameElement = document.createElement('h2');
                productNameElement.textContent = productData.name;

                const featuredImageElement = document.createElement('img');
                featuredImageElement.src = productData.api_featured_image;
                featuredImageElement.alt = 'Featured Image';

                const brandElement = document.createElement('h3');
                brandElement.textContent = `Brand: ${productData.brand}`;

                const priceElement = document.createElement('h4');
                priceElement.textContent = `Price: ${productData.price}`;

                const descriptionElement = document.createElement('h5');
                descriptionElement.textContent = `Description: ${productData.description}`;

                productDetailsDiv.appendChild(productNameElement);
                productDetailsDiv.appendChild(featuredImageElement);
                productDetailsDiv.appendChild(brandElement);
                productDetailsDiv.appendChild(priceElement);
                productDetailsDiv.appendChild(descriptionElement);

                if (productData.product_colors && productData.product_colors.length > 0) {
                  const colorsElement = document.createElement('div');
                  colorsElement.className = 'colors';
                  colorsElement.innerHTML = `<p>Colors:</p>`;
                  productData.product_colors.forEach(color => {
                      const colorBox = document.createElement('div');
                      colorBox.style.backgroundColor = color.hex_value;
                      colorsElement.appendChild(colorBox);
                  });
                  productDetailsDiv.appendChild(colorsElement);
              }
            } else {
                // Display a message if no data is returned
                productDetailsDiv.textContent = 'No product details available.';
            }
        }