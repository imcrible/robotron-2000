const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": 0
    },

    "blindagem": {
        "forca": 41,
        "poder": 40,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": 10
    }
}

const robotron =  document.querySelector('[data-controle]');

const estatisticas = document.querySelectorAll('[data-estatistica]');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
	elemento.addEventListener('click', (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
		atualizaEstatisticas(evento.target.dataset.peca);
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

function atualizaEstatisticas(peca){
	console.log(pecas[peca]);

	estatisticas.forEach( (elemento) => {
		//console.log(elemento.dataset.estatistica);
		//console.log(elemento.textContent);		

		elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica];
	});
}

function trocaImagem(cor){
	document.querySelector(".robo").src="img/robotron 2000 - " + cor + ".png";
 }


