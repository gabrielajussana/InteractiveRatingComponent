var form = document.querySelector("form");
var span = document.querySelector("#span");
const cardOne = document.querySelector(".card");
const cardTwo = document.querySelector(".submitted");

form.addEventListener("submit", function(event){

  var data = new FormData(form);
  var output = "";
  for(const entry of data){
    output = output  + entry[1] ;
  }
  span.innerText = output;
  cardOne.classList.add('hide');
  cardTwo.classList.remove('hide');
  event.preventDefault();//cancela o evento se for cancelável, sem parar a propagação do mesmo
});


