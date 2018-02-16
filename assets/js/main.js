
$(document).ready(function() {
    $('.modal').modal();




  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < 18; i++) {
    let num = getRandomInt(0, 100);

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
      .then(function(response) {
        // Turns the the JSON into a JS object
        return response.json();
      })
      .then(function(data) {

        console.log(data);

        let img = `https://pokeapi.co/media/img/${data.id}.png`;
        // Let's make some HTML!
        $('#myGif').append(
          ` <a class="  modal-trigger" href="#modal${data.id}">
           <div class="col s6 m2">
          <img src="${img}" alt="" class="circle responsive-img" >
          <h5 class="black-text light bordered">${data.name}</h5>
          <div class="col s12">
          <span class="black-text light">TIPO:${data.types[0].type.name}</span>
          </div>
            </div>
          </a>
          <div id="modal${data.id}" class="modal modal-fixed-footer">
          <div class="modal-content">
          <div class"col s12 header-card yellow accent-4 ">
           <img src="${img}" alt="" class=" yellow accent-4 circle responsive-img">
                <h5 class="black-text light">${data.name}</h5>
                </div>
                  <table class="centered bordered">

                    <tbody>
                        <tr style="border-bottom-color: #ffd600;">
                            <td>TIPO:</td>
                            <td>${data.types[0].type.name}</td>
                        </tr>
                        <tr style="border-bottom-color: #ffd600;">
                            <td>HABILIDAD:</td>
                            <td> ${data.abilities[0].ability.name}</td>
                        </tr>
                        <tr style="border-bottom-color: #ffd600;">
                            <td>COMO SE VE EN BATLLA:</td>
                            <td><img src=${data.sprites.back_default}></td>
                        </tr>
                         <tr style="border-bottom-color: #ffd600;">
                            <td>FORMA:</td>
                            <td>${data.forms[0].name}</td>
                        </tr>
                         <tr style="border-bottom-color: #ffd600;">
                            <td>EXPERIENCIA:</td>
                            <td>${data.base_experience}</td>
                        </tr>
                         <tr style="border-bottom-color: #ffd600;">
                            <td>MOVIMIENTOS:</td>
                            <td>${data.moves[0].move.name}</td>
                        </tr>
                    </tbody>
                </table>
          </div>
        </div> `
        );
        $('.modal').modal();
      });
  };

  const search = document.getElementById('search_btn');
  search.addEventListener('click', function() {

    const gif = document.getElementById('textarea1').value;
    document.getElementById('textarea1').value = '';
    const myGif = document.getElementById('myGif');
    const myPoke = document.getElementById('myPoke');
    myPoke.innerHTML = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${gif}/`)
      .then(function(response) {
        // Turns the the JSON into a JS object
        return response.json();
      })
      .then(function(data) {
        console.log(data); 
        // Let's make some HTML!
        let html = ` 
                <div class="col s12">
                <div class="card-panel grey lighten-5 ">
                <div class="row valign-wrapper">
                <div class="col s12 header-card ">
                <img src="https://pokeapi.co/media/img/${data.id}.png" class=" yellow accent-4 circle responsive-img">
                <h5 class="black-text light">${data.name}</h5>
                
                <table class="centered bordered">

                <tbody>
                <tr style="border-bottom-color: #ffd600;">
                <td>TIPO:</td>
                <td>${data.types[0].type.name}</td>
                </tr>
                <tr style="border-bottom-color: #ffd600;">
                <td>HABILIDAD:</td>
                <td> ${data.abilities[0].ability.name}</td>
                </tr>
                <tr style="border-bottom-color: #ffd600;">
                <td>COMO SE VE EN BATLLA:</td>
                <td><img src=${data.sprites.back_default}></td>
                </tr>
                <tr style="border-bottom-color: #ffd600;">
                <td>FORMA:</td>
                <td>${data.forms[0].name}</td>
                </tr>
                <tr style="border-bottom-color: #ffd600;">
                <td>EXPERIENCIA:</td>
                <td>${data.base_experience}</td>
                </tr>
                <tr style="border-bottom-color: #ffd600;">
                <td>MOVIMIENTOS:</td>
                <td>${data.moves[0].move.name}</td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </div>
                <hr>
               `;
        myPoke.innerHTML = html;
      });
  });
});
// <div class="col s3">
//          <div class="card small">
//            <div class="card-image">
//            <img src="${data.sprites.front_shiny}">
//            <span class="card-title"> ${data.name} </span>
//          </div>
//          <div class="card-content">
//            <p>Tipo: ${data.types[0].type.name} little markup to use effectively.</p>
//          </div>
//          <div class="card-action">
//            <a href="#">This is a link</a>
//          </div>   
//          </div>
//      </div>