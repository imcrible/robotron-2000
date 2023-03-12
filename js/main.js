const robotron =  document.querySelector('#robotron');

const subtrairBraco = document.querySelector('#subtrair-braco');
const somarBraco = document.querySelector('#somar-braco');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
	elemento.addEventListener('click', (evento) => {
		
		manipulaDados(evento.target.textContent);
	})
})

/*
somarBraco.addEventListener('click', () =>{
	 manipulaDados("somar");
})

subtrairBraco.addEventListener('click', () => {
	manipulaDados("subtrair");
})
*/
function manipulaDados(operacao){
	if(operacao === "-"){
		braco.value = parseInt(braco.value) - 1;
	}else {
		braco.value = parseInt(braco.value) + 1;
	}
}