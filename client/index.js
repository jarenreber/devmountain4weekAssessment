baseURL = `http://localhost:4000/api/trails`
const trailsContainer = document.querySelector('#trails-container')

const trailsCallback = ({ data: trails }) => displayTrails(trails)
const errCallback = err => console.log(err)

document.getElementById("complimentButton").onclick = function () {
    axios.get(baseURL)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


document.getElementById('fortuneButton').onclick = function () {
    axios.get(baseURL)
    .then(function (response) {
        const data = response.data  
        alert(data)
    })
}

document.getElementById('trailsButton').onclick = getTrails = () => axios.get(baseURL).then(trailsCallback).catch(errCallback)

function displayTrails (arr) {
    trailsContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createTrailsCard(arr[i])
    }
}
const createTrailsCard = trail => {
    const trailsCard = document.createElement('div')

    trailsCard.innerHTML = `<p class="name">${trail.name} Located in ${trail.location} with a difficulty of 
                             ${trail.difficulty}</p>`

    trailsContainer.appendChild(trailsCard)
}