const counter = document.querySelector("#counter")

function incrementCounter() {
  let countNum = parseInt(counter.innerText)
  counter.innerText = countNum + 1
}

window.setInterval(incrementCounter, 1000);



// function addALike() {
//   document.addEventListener("click", function(e) {
//     if (e.target.matches('.like-button')) {
//       const player = e.target.parentElement
//       // console.log(player)
//       const likes = player.querySelector('.likes')
//       // console.log(likes)
//       const currentLikes = parseInt(likes.innerHTML)
//       // console.log(currentLikes)
//       const newLikes = currentLikes + 1
//       // console.log(newLikes)

//       likes.innerHTML = newLikes + " likes"
//     }
//   })
// }

// addALike()



