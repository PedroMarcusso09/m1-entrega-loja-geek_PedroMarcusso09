let itens = [
  {
    image: './assets/img/painting/clock.jpg',
    name: 'Smartwatch',
    price: 'R$100,00',
    type: 'Painting'
  },
  {
    image: './assets/img/painting/gamepad.jpg',
    name: 'Controle Playstation',
    price: 'R$100,00',
    type: 'Painting'
  },
  {
    image: './assets/img/painting/personagem.jpg',
    name: 'Robot',
    price: 'R$100,00',
    type: 'Painting'
  },
  {
    image: './assets/img/painting/clock.jpg',
    name: 'Smartwatch',
    price: 'R$100,00',
    type: 'Painting'
  },
  {
    image: './assets/img/painting/gamepad.jpg',
    name: 'Controle Playstation',
    price: 'R$100,00',
    type: 'Painting'
  },
  {
    image: './assets/img/painting/personagem.jpg',
    name: 'Robot',
    price: 'R$100,00',
    type: 'Painting'
  },
  {
    image: './assets/img/actions/animewoman.jpg',
    name: 'Anime Woman',
    price: 'R$100,00',
    type: 'Action Figures'
  },
  {
    image: './assets/img/actions/dragonballpersonagem.jpg',
    name: 'Goku Super Saiyajin',
    price: 'R$100,00',
    type: 'Action Figures'
  },
  {
    image: './assets/img/actions/starwarspersonagem.jpg',
    name: 'Sr Yoda',
    price: 'R$100,00',
    type: 'Action Figures'
  },
  {
    image: './assets/img/actions/animewoman.jpg',
    name: 'Anime Woman',
    price: 'R$100,00',
    type: 'Action Figures'
  },
  {
    image: './assets/img/actions/dragonballpersonagem.jpg',
    name: 'Goku Super Saiyajin',
    price: 'R$100,00',
    type: 'Action Figures'
  },
  {
    image: './assets/img/actions/starwarspersonagem.jpg',
    name: 'Sr Yoda',
    price: 'R$100,00',
    type: 'Action Figures'
  },
];
  
function separarItensPorTipo(itens) {
  let listPaintings = []
  let listFigures = []

  for (let i = 0; i < itens.length; i++) {
    if (itens[i].type === 'Painting') {
      listFigures.push(itens[i])
    } else if (itens[i].type === 'Action Figures') {
      listPaintings.push(itens[i])
    }
  }
  return {
    listPaintings: listPaintings,
    listFigures: listFigures
  }
}
const { listPaintings, listFigures } = separarItensPorTipo(itens)

let secaoListFrames = document.querySelector('.painting_section')
let secaoListFigures = document.querySelector('.figure_section')

function criarItem(objeto, tipo) {
let criarItemLista = document.createElement('li')
let criarImagem = document.createElement('img')
let criarNome = document.createElement('h2')
let criarPreco = document.createElement('p')

criarItemLista.classList.add('produto')
criarImagem.classList.add('imagem_produto')
criarImagem.src = objeto.image
criarNome.classList.add('nome_produto')
criarNome.innerText = objeto.name
criarPreco.classList.add('valor_produto')
criarPreco.innerText = objeto.price

criarItemLista.appendChild(criarImagem)
criarItemLista.appendChild(criarNome)
criarItemLista.appendChild(criarPreco)

if (tipo.toLowerCase() === 'painting') {
secaoListFrames.appendChild(criarItemLista)
} else if (tipo.toLowerCase() === 'action figures') {
secaoListFigures.appendChild(criarItemLista)
  }
}

for (let i = 0; i < listFigures.length; i++) {
criarItem(listFigures[i], listFigures[i].type)
}

for (let i = 0; i < listPaintings.length; i++) {
criarItem(listPaintings[i], listPaintings[i].type)
}
