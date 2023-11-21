function makeTransaction(pricePerDroid, orderedQuantity, customerCredits){
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  const creditsLeft = customerCredits - totalPrice ;
if (totalPrice <= customerCredits) {
  message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`
} else {
  message = `Insufficient funds!`
}
console.log(message);
  return message;
}
makeTransaction(3000, 5, 23000); 
 makeTransaction(1000, 3, 15000); 
 makeTransaction(5000, 10, 8000); 
 makeTransaction(2000, 8, 10000);
 makeTransaction(500, 10, 5000);
