const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

for (let i = 0; i < ingredients.length; i++) {
  const ingrRef = document.createElement(`li`)
  ingrRef.textContent = ingredients[i]
  console.log(ingrRef)
  const ulRef = document.querySelector(`#ingredients`)
  ulRef.appendChild(ingrRef)
}
