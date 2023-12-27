renderers = [
    document.getElementById("poke0"),
    document.getElementById("poke1"),
    document.getElementById("poke2"),
    document.getElementById("poke3"),
    document.getElementById("poke4"),
    document.getElementById("poke5"),
];

entryFields = [
    document.getElementById("entry-0"),
    document.getElementById("entry-1"),
    document.getElementById("entry-2"),
    document.getElementById("entry-3"),
    document.getElementById("entry-4"),
    document.getElementById("entry-5"),
];

submitButtons = [
    document.getElementById("submit-0"),
    document.getElementById("submit-1"),
    document.getElementById("submit-2"),
    document.getElementById("submit-3"),
    document.getElementById("submit-4"),
    document.getElementById("submit-5"),
];



function getData(pokeName,slot){
    if(!pokeName){
        
    }
    else{
        return new Promise((resolve,reject) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => response.json())
            .then(data => {data.calledSlot = slot; return data})
            .then(data =>{resolve(data)})
        })
    }
};


function processData(data){
    let sprite = data.sprites.front_default;
    let slot = data.calledSlot;
    renderers[slot].style.display = "block";
    renderers[slot].src = sprite;
};

for (let x in submitButtons){
    submitButtons[x].addEventListener("click",() =>{
        if(entryFields[x].value){
            getData(entryFields[x].value,x)
            .then(processData)
        }
        else{
            renderers[x].style.display = "none";
        }
    })
};

getData("lapras",1)