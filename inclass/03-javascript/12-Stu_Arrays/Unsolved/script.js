// WRITE YOUR CODE HERE


var names = ["Dong", "kichiji", "skileen", "vonilla"]

var min = 0;
var max = 3;


var longStringOfStudents = "";

var random = Math.floor(Math.random() * (max - min + 1) + min)
longStringOfStudents += names[random]

random = Math.floor(Math.random() * (max - min + 1) + min)
longStringOfStudents += names[random]

console.log(longStringOfStudents)



var firstStudent = names[0]

console.log( names.length)

console.log ("Welcome to the class " + names[0])
console.log ("Welcome to the class " + names[1])
console.log ("Welcome to the class " + names[2])
console.log ("Welcome to the class " + names[3])

names[0] = "Midnight"
console.log(names)

if( firstStudent !== names[0]){
  console.log ("We replaced the first student.")
}