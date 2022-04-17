let trails = require('./db.json')
let globalID

module.exports = {
    getCompliments: (req, res) => {
        compliments = ["Gee, you're a smart cookie!",
                        "Cool shirt!",
                        "Your Javascript skills are stellar.",
        ];
    
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
    
        res.status(200).send(randomCompliment);
        
    },
    getFortune: (req, res) => {
        fortunes = [`A beautiful, smart, and loving person will be coming into your life.`, 
                    `A dubious friend may be an enemy in camouflage.`,
                    `Good to begin well, better to end well.`,
                    `Have a beautiful day.`,
                    `He who expects no gratitude shall never be disappointed.`]

            let randomIndex = Math.floor(Math.random() * fortunes.length)
            let randomFortunes = fortunes[randomIndex]

            res.status(200).send(randomFortunes)
    },
    getTrails: (req, res) => { 
        res.status(200).send(trails)
    },
    addTrails: (req, res) => {
        const { name, location, difficulty} = req.body
        let newTrails = {
            id: globalID,
            name,
            location,
            difficulty
        }
        trails.push(newTrails)
        globalID++
        res.status(200).send(trails)
    },
    deleteTrail: (req, res) => {
        let index = trails.findIndex(elem => elem.id === +req.params.id)
        trails.splice(index, 1)
        res.status(200).send(trails)
    }
}