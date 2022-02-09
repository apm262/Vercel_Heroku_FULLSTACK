

async function fetchProduct(id) {
    const response = await fetch(
      "https://api-players-alfonso.herokuapp.com/players/" + id,
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
        console.log(data);
        let player = data.player;
        console.log(player);
	
	 try {
		 
		 //document.getElementById("idplayer").value = id;
		 
		 if (player != null){
      document.getElementById("idplayer").value = player._id; 
			document.getElementById("name").innerHTML = player.name;      
			document.getElementById("surname").innerHTML = player.surname;      
			document.getElementById("age").innerHTML = player.age;
      document.getElementById("position").innerHTML = player.position;
      document.getElementById("team").innerHTML = player.team;

      document.getElementById("href").href = "edit.html?id="+player._id;
      
		 }
	  
	}
	catch (e) {
	   // sentencias para manejar cualquier excepción
	   console.log(e); // pasa el objeto de la excepción al manejador de errores
	}
    
	      
	
        
      })
      .catch((error) => console.log(error));
  }

  function getParameterByName(name, url = window.location.href) {
    console.log(url);
    
      name = name.replace(/[\[\]]/g, '\\$&');
    
    console.log(name);
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

fetchProduct(getParameterByName('id'));


const deletebtn = document.getElementById("deletebtn");
deletebtn.addEventListener("click",fetchDeleteProduct);

async function fetchDeleteProduct() {
  const idField = document.getElementById("idplayer").value;

  const response = await fetch(
    "https://api-players-alfonso.herokuapp.com/players/" + idField + "?_method=DELETE",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Product Deleted");
      window.location.href = "show.html";
    })
    .catch((error) => console.log(error));
}