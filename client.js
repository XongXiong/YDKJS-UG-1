//OBJECTIVES

// [x] Write a program to calculate the total price of your phone purchase.You will keep purchasing phones (hint : loop !) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// [x] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// [x] Finally, check the amount against your bank account balance to see if you can afford it or not.
// [x] You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// [x] You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// [x] Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example.Have fun and be creative!

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.05;
const PHONE_PRICE = 49.99;
const ACCESSORY_PRICE = 4.99;

var bankBalance = 1000;
var amount = 0;
var amountBought = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatPrice(amount) {
    return '$' + amount.toFixed(2);
}

while (amount < bankBalance) {
    // We can afford a new phone!
    amount += PHONE_PRICE;
    amountBought++
    if (amount < SPENDING_THRESHOLD) {
        // We can buy a cool accessory!
        amount += ACCESSORY_PRICE;
    }
};
// Add in taxes 
amount += calculateTax(amount);

// If price of phones with tax is too much, subtract phones 
// We prefer to keep the accessories over the other phones
while (amount > bankBalance) {
amount -= (PHONE_PRICE + calculateTax(PHONE_PRICE));
};

// Can you still afford this? 
if (amount > bankBalance) {
    console.log('We cannot buy this. *sadface*');
} else {
    console.log('We bought a total of ' + amountBought + ' phones for ' + formatPrice(amount) + '1');
};