const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreateProduct);


async function fetchCreateProduct() {
	//const newProduct = {name: "miguelinnnnnnn",price: 25.5, category:"vegetable"};
    const nameField = document.getElementById("name").value;
    const surnameField = document.getElementById("surname").value;
    const ageField = document.getElementById("age").value;
    const positionField = document.getElementById("position").value;
    const teamField = document.getElementById("team").value;

    //console.log(nameField + " " + priceField + " " + categoryField);

    const newPlayer = {name: nameField, surname: surnameField, age:ageField, position:positionField, team:teamField};

    const response = await fetch(
        "https://api-players-alfonso.herokuapp.com/players",
        {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlayer)
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.location.href = "show.html";
        
        })
        .catch((error) => console.log(error));
}



function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function selects(){
    const positions = ["GK", "DF", "MF", "FW"];
    const team = [
    "REAL MADRID",
    "FC BARCELONA",
    "PSG",
    "BAYERN MUNICH",
    "BORUSSIA DORTMUND",
    ];

    let select = document.getElementById("position");
    for(let position of positions){

        let op = createNode('option');

        op.innerHTML=position;

        append(select,op);
    }

    let select2 = document.getElementById("team");
    for(let teamm of team){

        let op = createNode('option');

        op.innerHTML=teamm;

        append(select2,op);
    }
}

selects();