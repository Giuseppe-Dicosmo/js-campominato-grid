const buttonPlay = document.getElementById('play');
console.log("button play", play)

const difficolta1 = document.getElementById('facile');
console.log("difficolta1", difficolta1)

const difficolta2 = document.getElementById('medio');
console.log("difficolta2", difficolta2)

const difficolta3 = document.getElementById('difficile');
console.log("difficolta3", difficolta3)

const container = document.querySelector('.grid');
console.log("container", container)



buttonPlay.addEventListener('click', function() {

  const difficolta = document.getElementById('difficoltà').value;
  console.log("difficolta3", difficolta)


  // Mi legge i valori
  if (difficolta == 'Facile') {
    elementi = 49
    colonne = 7
  } else if (difficolta == 'Medio') {
    elementi = 81
    colonne = 9
  } else if (difficolta == 'Difficile') {
    elementi = 100
    colonne = 10
  }

  const grid = document.querySelector('.grid');
  console.log("container", grid)


  container.innerHTML = ``

  for (let i = 0; i < elementi; i++) {
    const cella = document.createElement('div')
    cella.classList.add('cel')
    grid.append(cella)
    cella.style.width = `calc(100% / ${colonne})`

    cella.innerHTML = `${i}`
  }

})



