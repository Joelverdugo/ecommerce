const random = function (){
    return function(min, max){
        return Math.round(Math.random() * (max - min)) + min
    }
}

const getPokemon = function(index){
    const pokemons= [
        {
            name: 'Smartphone Huawei P30 - 128 GB - Color Aurora Boreal $11,240.00',
            img: '001'
        },
        {
            name: 'Apple iPhone X Plata 64 GB (Renewed) $14,959.00',
            img: '002'
        },
        {
            name: 'Motorola XT1925-1 Moto G6 - Smartphone de 5.7", $2,949.00',
            img: '003'
        },
        {
            name: 'Xiaomi Redmi Note 7, 64GB/4GB RAM,$4,199.00',
            img: '004'
        }
    ]
    return pokemons[index]
}

const randomRange = random()
const renderPokemon = function(pokemon){
    const screen = document.querySelector('.screen')
    screen.innerHTML = ''
    screen.appendChild(createImg(`img/${pokemon.img}.jpg`))
    screen.appendChild(createName(pokemon.name))
}

const createImg = function (url){
    const pokeImg = document.createElement('img')
    pokeImg.src = url
    pokeImg.classList.add('image')
    return pokeImg
}
const createName = function (name){
    const pokeName = document.createElement('h2')
    const text = document.createTextNode(name)
    pokeName.appendChild(text)
    pokeName.classList.add('name')
    return pokeName
}
const init = function(){
    let pokemonId = 0
    let pokemon = getPokemon(pokemonId)

    const btnBack = document.querySelector('#btnBack')
    const btnNext = document.querySelector('#btnNext')

    btnBack.addEventListener('click', function(){
        if(pokemonId === 0)
            pokemonId = 3
        renderPokemon(getPokemon(--pokemonId))
    })
    btnNext.addEventListener('click', function(){
        if(pokemonId === 3)
            pokemonId = 0
        renderPokemon(getPokemon(++pokemonId))
    })
    renderPokemon(pokemon)
}

