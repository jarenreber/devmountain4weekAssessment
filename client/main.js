const baseURL = `http://localhost:4000/api/trails`
const trailsContainer = document.querySelector('#trails-container')
const form = document.querySelector('#addTrailsForm')

const trailsCallback = ({ data: trails }) => displayTrails(trails)
const errCallback = err => console.log(err)

const getAllTrails = () => axios.get(baseURL).then(trailsCallback).catch(errCallback)
const createTrails = body => axios.post(baseURL, body).then(trailsCallback).catch(errCallback)
const deleteTrail = id => axios.delete(`${baseURL}/${id}`).then(trailsCallback).catch(errCallback)

document.getElementById("complimentButton").onclick = function () {
    axios.get('http://localhost:4000/api/compliments')
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


document.getElementById('fortuneButton').onclick = function () {
    axios.get('http://localhost:4000/api/fortunes')
    .then(function (response) {
        const data = response.data  
        alert(data)
    })
}

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let location = document.querySelector('#location')
    let difficulty = document.querySelector('#difficulty')

    let bodyObj = {
        name: name.value,
        location: location.value,
        difficulty: difficulty.value
    }

    createTrails(bodyObj)

    name.value = ''
    location.value = ''
    difficulty.value = ''
}

document.getElementById('trailsButton').onclick = getTrails = () => axios.get(baseURL).then(trailsCallback).catch(errCallback)


const createTrailsCard = trail => {
    const trailsCard = document.createElement('div')
    trailsCard.classList.add('addTrailsButton')
    
    trailsCard.innerHTML = `<p class="name">${trail.name} is located in ${trail.location} with a difficulty of: ${trail.difficulty}</p>
    <button onclick='deleteTrail(${trail.id})'>delete</button>`
    
    trailsContainer.appendChild(trailsCard)
}

function displayTrails (arr) {
    trailsContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createTrailsCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllTrails()