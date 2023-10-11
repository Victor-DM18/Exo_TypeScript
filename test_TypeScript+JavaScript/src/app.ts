const compteur = document.querySelector("#compteur")
const span = compteur?.querySelector("span")
let i : number = 0

const increment = (e: Event) => {
  e.preventDefault()
  i++;
 span ? span.innerText = i.toString() : null
}

compteur?.addEventListener("click", increment)