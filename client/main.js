// const { response } = require("express")

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
const addbossname = document.querySelector('#addbossname')
const addbossimg = document.querySelector('#addbossImg')
const delBossInp = document.querySelector('#bossDelInp')
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

    bContainer.innerHTML ="";
    axios.get("http://localhost:4000/api/bosses")
         .then(res =>{
            var bossList = res.data;
            for(i = 0; i < bossList.length; i++){
                const deleteBtn = document.createElement('button')
                deleteBtn.textContent = 'X'
                deleteBtn.id = bossList[i].id
                console.log(deleteBtn.id)
                let tempBoss = {
                    id : bossList[i].id,
                    name : bossList[i].name,
                    img : bossList[i].imageURL
                }
                deleteBtn.addEventListener('click', deleteboss)
                bContainer.innerHTML += `
                <h3>boss name: ${tempBoss.name} </h3>
                <h4><p>Boss id: ${tempBoss.id}<p></h4>`;
                bContainer.appendChild(deleteBtn)


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
const addboss = evt =>{
    evt.preventDefault()


            let body ={
                name : addbossname.value,
                imageURL : addbossimg.value
            }

            console.log(body.name)
            axios.post("http://localhost:4000/api/bosses",body)
            .then((res) =>{
                console.log(res.data)
                getBosses()
            })
         
            .catch(err => console.log(err))
            addbossname.value =''
            addbossimg.value =''

}
//Delete===========================
const deleteboss = evt =>{
    console.log(evt.target)
        axios.delete(`http://localhost:4000/api/bosses/:${evt.target.id}`)
        .then(res =>{
            console.log(res.data)
            getBosses()
        })
        .catch(err => console.log(err))



}


bGetBtn.addEventListener('click', getBosses)
bEditBtn.addEventListener('click', editBoss)
bAddBtn.addEventListener('click', addboss)
// deleteBtn.addEventListener('click', deleteboss)

getBosses()