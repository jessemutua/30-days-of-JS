const animalName = document.getElementById('name');
const image = document.getElementById('image');
const animalVotes = document.getElementById('vote-count');


let currentAnimal;



// fetching my data
function getCharacters(){
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(renderAnimals);
}

function renderAnimals(animals){
    animals.forEach(renderCharacters);
}



function renderCharacters(animals){
    const showName =document.createElement('span')
    showName.innerHTML = animals.name
    document.getElementById('Container').appendChild(showName)
    showName.addEventListener('click', () => {
        currentAnimal = animals;
        showAnimal(animals)
    })
    
    
}
function showAnimal(animal){
    animalName.innerHTML = animal.name;
    image.src = animal.image;
    animalVotes.innerHTML = animal.votes;
    
}
getCharacters()

