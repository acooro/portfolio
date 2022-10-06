var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major")
console.log (constellations)

planets.pop()
console.log (planets)

var galaxy = [constellations.concat (planets)]

console.log (galaxy)

var allCaps = star.toUpperCase()

console.log (allCaps)


var sentence = "Gray is the best teacher. Gray is not old";
var arr = sentence.split(" ")

console.log (arr)

var newSentence = arr.join (" ")
console.log (newSentence)

var reversed = sentence.split (" ").reverse().join(" ");
console.log(reversed)

var updated = sentence.replaceAll("Gray", "Katy")
console.log (updated)