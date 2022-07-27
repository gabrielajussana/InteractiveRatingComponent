
/*
 buttons.addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log('elemento', buttons.elements)
  /*if(input[i].checked){
    span.textContent = input[i].value;
  }
 })
 */
 
buttons.addEventListener('submit', () => {
  span.textContent = button
  cardOne.classList.add('hide');
  cardTwo.classList.remove('hide');
});
