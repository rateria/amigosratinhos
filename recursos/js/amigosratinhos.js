function carregarVideo(url){
	console.log("url: " + url);
	if (url == ""){
		$('.conteudo-video').attr('src', '/amigosratinhos/recursos/imagens/indisponivel.png');
	}
	else {
		$('.conteudo-video').attr('src', 'https://www.youtube.com/embed/'+url);
	}
}

function formataStringEnumeracao(texto){
	if(!(texto === null)){
		var autores = texto.split(',');
		var numAutores = autores.length;
		var autoriaStr = '';
		
		if(numAutores > 1){
			for(var i = 0; i < (numAutores - 2); i++){
				autoriaStr += autores[i] + ', ';
			}
			autoriaStr += autores[numAutores - 2] + ' e ';
		}
		autoriaStr += autores[numAutores - 1];
	}
	else {
		autoriaStr = ""
	}
	return autoriaStr;
}