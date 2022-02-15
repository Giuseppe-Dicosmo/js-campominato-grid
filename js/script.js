const buttonPlay = document.getElementById('play');
console.log("button play", play)

const difficolta1 = document.getElementById('facile');
console.log("difficolta1", difficolta1)

const difficolta2 = document.getElementById('medio');
console.log("difficolta2", difficolta2)

const difficolta3 = document.getElementById('difficile');
console.log("difficolta3", difficolta3)


const grid = document.querySelector('.grid');
console.log("container", grid)

buttonPlay.addEventListener('click', function() {

  const difficolta = document.getElementById('difficoltà').value;
  console.log("difficolta3", difficolta)

  if (difficolta === 'Facile') {

    for (let i = 0; i < 49; i++) {
      const cella = document.createElement('div')
      cella.classList.add('cel')
      grid.append(cella)
      cella.style.width = `calc(100% / 7)`

      cella.innerHTML = `${i}`
    }

  } else if (difficolta === 'Medio') {

    for (let i = 0; i < 81; i++) {
      const cella = document.createElement('div')
      cella.classList.add('cel')
      grid.append(cella)
      cella.style.width = `calc(100% / 9)`

      cella.innerHTML = `${i}`
    }

  } else if (difficolta === 'Difficile') {

    for (let i = 0; i < 1000; i++) {
      const cella = document.createElement('div')
      cella.classList.add('cel')
      grid.append(cella)
      cella.style.width = `calc(100% / 10)`

      cella.innerHTML = `${i}`
    }

  }






})



