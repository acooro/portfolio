var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var listItem = $('#shopping-input');

var allItems = []

function displayList (){
  shoppingListEl.html ("")
  allItems.forEach( function(item){
    var liTag = $("<li>").text(item)
    shoppingListEl.append (liTag)
  })
  listItem.val ("")
 

}

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function addToList(event){
  event.preventDefault() 
  
  var item = listItem.val()
  allItems.push(item)
  displayList ()

  console.log (item)
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", addToList)