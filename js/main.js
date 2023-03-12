const robotron =  document.querySelector('[data-controle]');



const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
	elemento.addEventListener('click', (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
	})
})

function manipulaDados(operacao, controle){
	const peca = controle.querySelector('[data-contador]');
	if(operacao === "-"){
		if(parseInt(peca.value) === 0){
			alert("Valor não pode ser negativo");
		}else{
			peca.value = parseInt(peca.value) - 1;
		}
		
	}else {
		peca.value = parseInt(peca.value) + 1;
	}
}