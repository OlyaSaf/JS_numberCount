var number = 0; 
var string = "The script has loaded";

function changeNumber() {
    document.getElementById('header-number').innerHTML = number
    console.log("Number: " + number)
}

function increment() {
    ++number
    changeNumber()
}

function decrement() {
    --number
    changeNumber()
}

/*h
block comments
*/
//This is documentation

console.log(string)
