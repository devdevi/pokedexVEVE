
$(document).ready(function() {
    $('.modal').modal();


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < 5; i++) {
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
           <div class="col s2">
          <img src="${img}" alt="" class="circle responsive-img" >
          <h5 class="black-text light bordered">${data.name}</h5>
          <div class="col s12">
          <span class="black-text">Tipo: ${data.types[0].type.name}</span>
          </div>
            </div>
          </a>
          <div id="modal${data.id}" class="modal modal-fixed-footer">
          <div class="modal-content">
          <div class"col s12 header-card" style="background-color: #fbff07;">
           <img src="${img}" alt="" class="circle responsive-img">
                <h5 class="black-text light">${data.name}</h5>
                </div>
                  <table class="centered bordered">

                    <tbody>
                        <tr style="border-bottom-color: #e6e00a;">
                            <td>TIPO:</td>
                            <td>${data.types[0].type.name}</td>
                        </tr>
                        <tr style="border-bottom-color: #e6e00a;">
                            <td>HABILIDAD:</td>
                            <td> ${data.abilities[0].ability.name}</td>
                        </tr>
                        <tr style="border-bottom-color: #e6e00a;">
                            <td>COMO SE VE EN BATLLA:</td>
                            <td><img src=${data.sprites.back_default}></td>
                        </tr>
                         <tr style="border-bottom-color: #e6e00a;">
                            <td>FORMA:</td>
                            <td>${data.forms[0].name}</td>
                        </tr>
                         <tr style="border-bottom-color: #e6e00a;">
                            <td>EXPERIENCIA:</td>
                            <td>${data.base_experience}</td>
                        </tr>
                         <tr style="border-bottom-color: #e6e00a;">
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
    const myGif = document.getElementById('myGif');
    fetch(`https://pokeapi.co/api/v2/pokemon/${gif}/`)
      .then(function(response) {
        // Turns the the JSON into a JS object
        return response.json();
      })
      .then(function(data) {
        console.log(data); 
        // Let's make some HTML!
        let html = ` 

                  <div class="col s10">
                  <div class="card-panel grey lighten-5 ">
                  <div class="row valign-wrapper">
                  <div class="col s2">
                  <img src="${data.sprites.front_shiny}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                  </div>
                  <div class="col s10 left-align">
                  <span class="black-text">
                  <h5 class="black-text light">${data.name} </h5>
                  <span class="black-text">Tipo: ${data.types[0].type.name} </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta veniam provident velit fugit eum sapiente</p>
                  This is a square image. Add the "circle" class to it to make it appear circular.
                  </span>
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