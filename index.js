let num1 = 0
let num2 = 0

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

function colorCode() {
    if (num1 > num2) {
        num1El.classList.add("colorchange")
        num2El.classList.remove("colorchange")
     }
     if (num2 > num1) {
        num2El.classList.add("colorchange")
        num1El.classList.remove("colorchange")
     }
     if (num1 == num2) {
        num2El.classList.remove("colorchange")
        num1El.classList.remove("colorchange")
     }
}

function addone() {
    num1 = num1 + 1
    num1El.innerText = num1
    colorCode()
    
}
 
function addtwo() {
    num1 = num1 + 2
      num1El.innerText = num1
      colorCode()
}
  
function addthree() {
    num1 = num1 + 3
    num1El.innerText = num1
    colorCode()
}
  
function addone2() {
    num2 = num2 + 1
    num2El.innerText = num2
    colorCode()
}
  
function addtwo2() {
    num2 = num2 + 2
    num2El.innerText = num2
    colorCode()
}
   
function addthree2() {
    num2 = num2 + 3
    num2El.innerText = num2
    colorCode()
}
  
   function reset() {
    num1 = 0
    num2 = 0
    num1El.innerText = num1
    num2El.innerText = num2
    colorCode()
   }