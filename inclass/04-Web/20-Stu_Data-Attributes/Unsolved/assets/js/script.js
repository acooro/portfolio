var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")){
    var state = element.getAttribute("data-state");
    element.textContent = element.getAttribute("data-number")

    if (state === "hidden"){
      element.setAttribute("data-state", "visible");
      
    
    } else {
      element.getAttribute ("data-state", element.dateset.hidden);
    }
  }

  // TODO: Complete function
});
