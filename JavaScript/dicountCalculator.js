
  // Constructor function for Product objects
function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  
    // Method to calculate discounted price
    this.calculateDiscountedPrice = function(discountPercentage) {
      if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount percentage must be between 0 and 100.");
      }
      const discountAmount = (discountPercentage / 100) * this.price;
      const discountedPrice = this.price - discountAmount;
      return discountedPrice;
    };
  }
  
  // Example usage:
  const product1 = new Product("Widget", 50, "A high-quality widget");
  const discountPercentage = 10;
  const discountedPrice = product1.calculateDiscountedPrice(discountPercentage);
  
  console.log(`Product: ${product1.name}`);
  console.log(`Original Price: $${product1.price}`);
  console.log(`Discount Percentage: ${discountPercentage}%`);
  console.log(`Discounted Price: $${discountedPrice}`);
  