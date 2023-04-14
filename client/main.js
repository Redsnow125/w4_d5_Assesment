const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortune')
let fortBox = document.querySelector('#fortunebox')
//Bosses=================

const bGetBtn = document.querySelector('#getboss')
const bEditBtn = document.querySelector('#editboss')
const bAddBtn = document.querySelector('#addboss')
const bDelBtn = document.querySelector('#deleteboss')
const bContainer = document.querySelector('#bosscontainer')
const bPic = document.querySelector('#bPic')
const bAddform = document.querySelector('#addbossform')
//=======================


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)




//Fortune==========================
const tellFortune = () =>{
    axios.get("http://localhost:4000/api/fortune")
         .then(res =>{
            const fort = res.data;
            fortBox.innerHTML = `<p> Your fortune is : ${fort}<p>`;
         })
         .catch(err => console.log(err))
}

fortuneBtn.addEventListener('click', tellFortune)
//Get==============================
const getBosses = () =>{
    axios.get("http://localhost:4000/api/bosses")
         .then(res =>{
            const bossList = res.data;
            for(i = 0; i < bossList.length; i++){
                let tempBoss = {
                    id : bossList[i].id,
                    name : bossList[i].name,
                    img : bossList[i].imageURL
                }
                bContainer.innerHTML += `
                <h3>boss name: ${tempBoss.name} </h3>
                <h4><p>Boss id: ${tempBoss.id}<p></h4>`;
            }
         })
         .catch(err => console.log(err))
}


//Put==============================
const editBoss = () =>{
    axios.put("http://localhost:4000/api/bosses")
         .then(res =>{

         })
         .catch(err => console.log(err))
}

//Post=============================
let addbossSubmit = body =>{
    axios.post("http://localhost:4000/api/bosses",body)
}


const addboss = evt =>{
            evt.preventDefault()
            let bossname = document.querySelector('#addbossname')
            let bossimg = document.querySelector('#addbossImg')

            let bossBodyObj ={
                name : bossname,
                imageURL : bAddform.bossimg
            }
            addbossSubmit(bossBodyObj)
         

}
//Delete===========================
const deleteboss = () =>{
    axios.delete("http://localhost:4000/api/bosses")
         .then(res =>{
            console.log(res.data)
         })
         .catch(err => console.log(err))
}


bGetBtn.addEventListener('click', getBosses)
bEditBtn.addEventListener('click', editBoss)
bAddBtn.addEventListener('submit', addboss)
bDelBtn.addEventListener('click', deleteboss)

getBosses()