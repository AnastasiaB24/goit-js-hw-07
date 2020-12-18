const liItemRef = document.querySelectorAll(`.item`)
console.log(`Всего ${liItemRef.length} категории`)
for (let i = 0; i < liItemRef.length; i++) {
  console.log(
    `Категория: ${liItemRef[i].children[0].textContent}`,
    `Количество елементов: ${liItemRef[i].children[1].childElementCount}`
  )
}
