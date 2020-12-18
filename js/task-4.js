const decrementBtn = document.querySelector(`button[data-action="decrement"]`)
const incrementBtn = document.querySelector(`button[data-action="increment"]`)

let counterValue = 0

decrementBtn.addEventListener(`click`, decrement)

incrementBtn.addEventListener(`click`, increment)

function increment() {
  counterValue += 1
  document.getElementById('value').innerHTML = counterValue
}

function decrement() {
  counterValue = counterValue - 1 > 0 ? counterValue - 1 : 0
  document.getElementById('value').innerHTML = counterValue
}
