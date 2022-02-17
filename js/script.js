// bottone play
const buttonPlay = document.getElementById('play');
console.log("button play", play)

// la griglia
const grid = document.querySelector('.grid');
console.log("container", grid)


let elementi;
let arrayBombe = [];
let score = 0
console.log("score", score)


// Funzione griglia
const startPlay = () => {
  const difficolta = document.getElementById('difficoltà').value;
  console.log("difficolta5", difficolta)

  // dichiaro i valori
  let righe, colonne;

  // Mi legge i valori
  if (difficolta == 'Facile') {
    righe = colonne = 10
  } else if (difficolta == 'Medio') {
    righe = colonne = 9
  } else if (difficolta == 'Difficile') {
    righe = colonne = 7
  }

  elementi = righe * colonne;

  arrayBombe = bombeRandom(16, 1, elementi)
  console.log("numeroRadnom 111", arrayBombe)

  // mi cancella la griglia
  grid.innerHTML = ``

  // mi stampa e creo gli elementi alla griglia
  for (let i = 0; i < elementi; i++) {
    const cella = document.createElement('div')
    cella.classList.add('cel')
    grid.append(cella)
    cella.style.width = `calc(100% / ${colonne})`
    cella.innerHTML = `${i + 1}`
  }

}



// Funzione Bombe random.
const bombeRandom = (listabombe, min, max) => {
  let arrayBombe = [];

  do {
    const num = getRandomIntInclusive(min, max)

    if (!arrayBombe.includes(num)) {

      arrayBombe.push(num)

    }
  } while (arrayBombe.length < listabombe)

  return arrayBombe
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


buttonPlay.addEventListener('click', startPlay)


// mi colora le celle
grid.addEventListener('click', function(event){
  console.log("celEveni ciao", event)

  const selectorCell = event.target
  console.log("selectorCell", selectorCell)


  if (arrayBombe.includes(parseInt (selectorCell.innerHTML))){
    selectorCell.classList.add('bomba');
    alert('hai perso')

    grid.removeEventListener('click', event)

  } else if (!arrayBombe.includes(parseInt (selectorCell.innerHTML))) {
    selectorCell.classList.add('win');
    score++
  }

})



