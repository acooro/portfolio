//WRITE YOUR CODE BELOW


// var customerOrder = {
//   name: ["Tea", "Coffee", "Booba Tea"],
//   sugars: ["12345"],
//   ready: true
// }
//   if (customerOrder.ready = true){
//   console.log ("Ready for pick-up");
// }  else {
//   console.log ("Still in order queue")
// }


// console.log(customerOrder.name) 
// console.log(customerOrder.sugars)
// console.log(customerOrder.ready) 

var customerOrder = {
  drinkName: "Mocha Frappe",
  sugarCount: 12,
  isReady: false,
  makeDrinkReady: function(){
    this.isReady = true;
    console.log("drink is ready")
  }
}

console.log(`The name of this drink is ${customerOrder.drinkName} and it takes ${customerOrder.sugarCount} sugars.`)

if (customerOrder.isReady){
  console.log("Ready")

} else {
  console.log("in the queue")

}

customerOrder.makeDrinkReady()