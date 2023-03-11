const robotron =  document.querySelector('#robotron');

//robotron.addEventListener('click', dizOi);

/*funcão anonima
robotron.addEventListener('click', function(){
	console.log('Robo clicado');
});
*/

//funcao anonima com arrow function
 robotron.addEventListener('click', (evento) =>{
	console.log('Robo clicado');
	console.log(evento);
}); 
 


function dizOi(nome){
	console.log("Oi " + nome);
	console.log("Bem vindo ao Robotron 2000");
}

dizOi("Samuel");
