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
  
function separateItemsByType(itens) {
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
const { listPaintings, listFigures } = separateItemsByType(itens)

let sectionListFrames = document.querySelector('.painting_section')
let sectionListFigures = document.querySelector('.figure_section')

function createIten(object, type) {
let createListIten = document.createElement('li')
let createImage = document.createElement('img')
let createName = document.createElement('h2')
let createPrice = document.createElement('p')

createListIten.classList.add('product')
createImage.classList.add('puduct_image')
createImage.src = object.image
createName.classList.add('product_name')
createName.innerText = object.name
createPrice.classList.add('product_price')
createPrice.innerText = object.price

createListIten.appendChild(createImage)
createListIten.appendChild(createName)
createListIten.appendChild(createPrice)

if (type.toLowerCase() === 'painting') {
sectionListFrames.appendChild(createListIten)
} else if (type.toLowerCase() === 'action figures') {
sectionListFigures.appendChild(createListIten)
  }
}

for (let i = 0; i < listFigures.length; i++) {
createIten(listFigures[i], listFigures[i].type)
}

for (let i = 0; i < listPaintings.length; i++) {
createIten(listPaintings[i], listPaintings[i].type)
}