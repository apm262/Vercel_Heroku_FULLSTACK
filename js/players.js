
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchPlayers() {
    const response = await fetch(
      "https://api-players-alfonso.herokuapp.com/players",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        
        const ul = document.getElementById('fichas2');
        //let players = data;
        console.log(data);
        console.log(data.players);
        
        for(let player of data.players){
            let div = createNode('div');
            div.className ="fichas2";
            let li = createNode('li');
            let span = createNode('span');
            let a = createNode('a');
            a.setAttribute('href', "player.html?id=" + player._id);
            a.innerText = 'information';	
            span.innerHTML = `<b>${player.name}</b> <br> ${player.surname} <br> ${player.age} <br> ${player.position} <br> ${player.team} <br>`;  
            append(div, li);          
            append(li, span);
            append(li, a);
            append(ul, div);
            
        }
        
        
      })
      .catch((error) => console.log(error));
  }

  fetchPlayers()