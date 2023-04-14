let fortuneDb = require('./fortune.json')
let DsBossdatabase = require('./dsBossesDB.json')
module.exports = {
   
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        let fortuneData = fortuneDb
        let randFort = Math.floor(Math.random() * fortuneData.length);
        let randfortune = fortuneData[randFort]
        res.status(200).send(randfortune)

    },

    getboss: (req,res) =>{
        res.status(200).send(DsBossdatabase)
    },
    editboss: (req,res) =>{

    },
    addboss: (req,res) =>{
        DsBossdatabase.push(req.data)
    },
    deleteboss: (req,res) =>{

    },

}
