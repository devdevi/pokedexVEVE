
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
                <div class="col s12">
                    <div class="col s6">
                        <span class="black-text tipo"><strong>Tipo:</strong></span>
                    </div>
                    <div class="col s6">
                        ${data.types[0].type.name}
                    </div>
                </div>
                <div class="col s12">
                    <div class="col s6">
                        <span class="black-text habilidades"><strong>habilidad:</strong></span>
                    </div>
                    <div class="col s6">
                        ${data.abilities[0].ability.name}
                    </div>
                </div>
                <div class="col s12">
                    <div class="col s6">
                        <span class="batalla"><strong>Como lo ves en Batalla:</strong></span>
                    </div>
                    <div class="col s6">
                        <img src=${data.sprites.back_default}>
                    </div>
                </div>
                <div class="col s12">
                    <div class="col s6">
                        <span class="black-text forma"><strong>forma:</strong></span>
                    </div>
                    <div class="col s6">
                        ${data.forms[0].name}
                    </div>
                </div>
                <div class="col s12">
                    <div class="col s6">
                         <span class="black-text experiencia"><strong>Experiencia:</strong></span>
                    </div>
                    <div class="col s6">
                        ${data.base_experience}
                    </div>
                </div>
                <div class="col s12">
                    <div class="col s6">
                        <span class="black-text movimiento"><strong>movimientos:</strong></span>
                    </div>
                    <div class="col s6">
                        ${data.moves[0].move.name}
                    </div>
                </div>
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