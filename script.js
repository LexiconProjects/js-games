var animationInterval

function rotateString() {

   animationInterval = setInterval(function () {
      
      var string = document.getElementById("rotate-string").innerHTML
      var subString = string.slice(-1);
      string = string.slice(0, (string.length) - 1)
      string = subString + string
      document.getElementById("rotate-string").innerText = string

   }, 150)

}

function stopStringRotation() {
   clearInterval(animationInterval)
}

function guessNumber() {

   var x = document.getElementById("number-guess").value
   var y = Math.floor(Math.random() * 10 + 1)
   if (x != y) {
      document.getElementById("guess-result").innerText = "Wrong guess! Number was: " + y
   } else if (x == y)
      document.getElementById("guess-result").innerText = "Good guess!"

}

function calculateDaysUntilXmas() {

   var today = new Date()
   var xmass = new Date("25 December " + today.getFullYear())

   result = Math.floor((xmass.getTime() - today.getTime()) / 86400000)

   document.getElementById("days-until-Xmas").innerText = "There are " + result + " day(s) until Christmas"

}

function changeString() {

   var x = document.getElementById("input-string").value
   if (x == "Py")
      document.getElementById("output-string").innerText = x
   else
      document.getElementById("output-string").innerText = "Py" + x

}

function getClosestTo100(){

   var a = document.getElementById("number-input-a").value
   var b = document.getElementById("number-input-b").value

   if(a === b) {
      document.getElementById("closest-input").innerText = "Numbers are equal!"
   } else
      if((a - 100) > (b - 100)) {
         document.getElementById("closest-input").innerText = "Number " + a + " is closest to 100!"
      } else
         if((a - 100) < (b - 100)) {
            document.getElementById("closest-input").innerText = "Number " + b + " is closest to 100!"
         }


}
