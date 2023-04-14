let fortuneDb = require('./fortune.json')
let DsBossdatabase = require('./dsBossesDB.json')
let bossIndex = 6
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
        let body = req.body;

        body.id = bossIndex;
        DsBossdatabase.push(body)
        res.status(200).send(DsBossdatabase)
        bossIndex++;
    },
    deleteboss: (req,res) =>{
        let id = req.query
        console.log(id)
        console.log(req.body,req.params)
        DsBossdatabase.splice(+id,1)
        res.status(200).send(DsBossdatabase)
        },

}
