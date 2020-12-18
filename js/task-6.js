const validInputRef = document.querySelector(`#validation-input`)

validInputRef.addEventListener(`blur`, () => {
  if (
    validInputRef.value.length < validInputRef.getAttribute(`data-length`) ||
    validInputRef.value.length > validInputRef.getAttribute(`data-length`)
  ) {
    validInputRef.classList.add(`invalid`)
  } else {
    validInputRef.classList.remove(`invalid`)
    validInputRef.classList.add(`valid`)
  }
})
