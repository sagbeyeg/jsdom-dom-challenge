const counter = document.querySelector("#counter")
const buttonPlus = document.querySelector("#plus")
const buttonMinus = document.querySelector("#minus")
const buttonHeart = document.querySelector("#heart")
const buttonPause = document.querySelector("#pause")
const likes = document.querySelector(".likes")


//Incrementing the Timer
function counterInterval() {
  let countNum = parseInt(counter.innerText)
  counter.innerText = countNum + 1
}

window.setInterval(counterInterval, 1000);

//Manually Increment the Timer
buttonPlus.addEventListener("click", function() {
  counter.innerText = parseInt(counter.innerText) + 1
})

//Manually Decrement the Timer
buttonMinus.addEventListener("click", function() {
  counter.innerText = parseInt(counter.innerText) - 1
})


//Like an Individual Number of the Counter
buttonHeart.addEventListener("click", function() {
	
	if (document.getElementById(`${counter.innerText}`)) {
		let ourVariable = document.getElementById(`${counter.innerText}`)
		console.log(ourVariable.value)
   
  } else {
    const li = document.createElement('li')
    li.id = counter.innerText
    const numberOfLikes = 1
		li.innerHTML = `${counter.innerText} Liked: ${numberOfLikes} time(s).`
		likes.appendChild(li)
  }
})

buttonPause.addEventListener("click", function() {

	// document.getElementById("myBtn").disabled = true;
})