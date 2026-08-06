const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. TODO: Define your menu object here
  const menu = {
  drinks: {
    Espresso: "₦3000",
    Latte: "₦4500",
    Tea: "₦2000"
  }
};

// 2. TODO: Define your calculateTotal function here
  function calculateTotal(drinkName, quantity){
    const drinkPrice = menu.drinks[drinkName];
    if (!drinkPrice) {
      return null; // Invalid drink name
    }
    const price = parseFloat(drinkPrice.replace("₦", ""));
    return price * quantity;
  }


// The Ordering System
readline.question("☕ Welcome! What would you like to order? ", (drinkInput) => {
  
  readline.question("🔢 How many would you like? ", (qtyInput) => {
    
    // 3. TODO: Process the inputs (clean strings, convert numbers)
    const drinkName = drinkInput.trim();
    const quantity = parseInt(qtyInput);

    // 4. TODO: Write your If/Else logic to validate the order
    const total = calculateTotal(drinkName, quantity);

    // 5. TODO: Print the final receipt


    // Always remember to close readline!
    readline.close();
  });
});
