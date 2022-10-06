//var
var btnSubmit = document.querySelector ("#form-group");
var projectDisplay = document.querySelector (".project-display")
var projectName = document.querySelector (".project-name-input")
var projectType = document.querySelector (".project-type-input")
var hourlyRate = document.querySelector (".hourly-rate-input")
var dueDate = document.querySelector (".due-date-input")

var showProject = $('.project-display').val();


//date and time
setInterval(function (){
  $("#time-display").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000)

function handleFormSubmit (event){
  event.preventDefault();
}




