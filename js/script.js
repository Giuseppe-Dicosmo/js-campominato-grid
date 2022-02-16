// bottone play
const buttonPlay = document.getElementById('play');
console.log("button play", play)

// la griglia
const grid = document.querySelector('.grid');
console.log("container", grid)

buttonPlay.addEventListener('click', function() {

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

  let elementi = righe * colonne;

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

})



