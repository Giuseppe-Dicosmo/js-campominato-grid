// bottone play
const buttonPlay = document.getElementById('play');
console.log("button play", play)

// la griglia
const grid = document.querySelector('.grid');
console.log("container", grid)


let elementi;
let arrayBombe = [];

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

  arrayBombe = bombeRandom(1, elementi)

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
const bombeRandom = (min, max) => {
  let arrayBombe = [];
  console.log("arrayBombe", arrayBombe)

  for (let i = 0; i < 16; i++) {
  console.log("i", i)

  let numeroRadnom = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("numeroRadnom", numeroRadnom)
  arrayBombe.push(numeroRadnom)
  }

  return arrayBombe
}

gri

buttonPlay.addEventListener('click', startPlay)


