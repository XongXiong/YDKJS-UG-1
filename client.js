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

var bankBalance = prompt('What is your current bank balance?');
var amount = 0;
var phonesBought = 0;
var accessoriesBought = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatPrice(amount) {
    return '$' + amount.toFixed(2);
}

while (amount < bankBalance) {
    // We might be able to afford a new phone!
    amount += PHONE_PRICE;
    phonesBought++
    if (amount < SPENDING_THRESHOLD) {
        // We can buy a cool accessory!
        amount += ACCESSORY_PRICE;
        accessoriesBought++
    }
};
// Add in taxes 
amount += calculateTax(amount);

// If price of phones and accessories with tax is too much, get rid of stuff 
while (amount > bankBalance) {
    console.log('We cannot afford this because the amount is ' + formatPrice(amount) + ' for ' + phonesBought + ' phone(s) and ' + accessoriesBought + ' accessory(ies) while our bank balance is ' + bankBalance + '. :( Let\'s get rid of some stuff.');
    if (accessoriesBought > 0) {
        amount -= (ACCESSORY_PRICE + calculateTax(ACCESSORY_PRICE));
        accessoriesBought--
        console.log('We got rid of 1 accessory.');
    } else if (amount > bankBalance){
        amount -= (PHONE_PRICE + calculateTax(PHONE_PRICE));
        phonesBought--
        console.log('We got rid of 1 phone.');
    }
};
console.log('We bought a total of ' + phonesBought + ' phone(s) and ' + accessoriesBought + ' accessory(ies) for ' + formatPrice(amount) + '!');
