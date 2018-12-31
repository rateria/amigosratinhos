function carregaInicio(){
	if(document.documentElement.clientWidth >= 700){
		$('.conteudo').css('width', '98%');
		$('.conteudo-texto').css('float', 'none');
	}
	$('.conteudo-video').hide();
	$('.conteudo-descricao').hide();
	$('.lista').empty();
	carregarTexto('amigosratinhos');
	$('.conteudo-titulo').show();
	$('.conteudo-texto').show();
}

function ajustaTelaTexto(){
	if(document.documentElement.clientWidth >= 700){
		$('.conteudo').css('width', '70%');
		$('.conteudo-texto').css('float', 'right');
	}
	$('.botoes').hide();
	$('.conteudo-video').hide();
	$('.conteudo-descricao').hide();
	$('.conteudo-titulo').empty();
	$('.conteudo-texto').empty();
	$('.conteudo-titulo').show();
	$('.conteudo-texto').show();
}

function carregarTexto(categoria){
	filtro = JSON.stringify({categoria: categoria});
	$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'obter_texto_por_categoria', args: filtro}, function (resposta){
		var texto_cat = JSON.parse(resposta);
		$('.conteudo-titulo').html(texto_cat.titulo);
		$('.conteudo-texto').html(texto_cat.texto);		
	});
}

function carregarVideo(url){
	$('.conteudo-video').attr('src', 'https://www.youtube.com/embed/'+url);
}




function carregaRitmos() {
	
	ajustaTelaTexto();
	carregarTexto('ritmos');
	
	$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'listar_ritmos'}, function (resposta){
		var ritmos = JSON.parse(resposta);
		var listaStr = '<ul>';
		listaStr += '<li class="lista-titulo"><a>Ritmos</a></li>';
		
		$.each(ritmos, function(indice, ritmo){
			listaStr += '<li class="lista-item"><a href="#" onclick="selecionaRitmo('+ritmo.id+')">'+ritmo.nome+'</a></li>';
		});
		listaStr += '<li class="lista-base"></li>';
		listaStr += '</ul>';
		
		$('.lista').html(listaStr);
	});
}

function selecionaRitmo(idRitmo){	
	$('.conteudo-titulo').hide();
	$('.conteudo-texto').hide();
	
	var filtro = JSON.stringify({id:idRitmo});
	
	$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'obter_ritmo_por_id', args: filtro}, function (resposta){
		var ritmo = JSON.parse(resposta);
		
		$('#descricao-nome').html(ritmo.nome);
		
		var descricaoStr = '<tr>';
		descricaoStr += '		<td><span class="descricao-item">Autoria: </span>'+formataStringEnumeracao(ritmo.autoria)+'</td>'		
		descricaoStr += '	</tr>'
		descricaoStr += '	<tr>'
		descricaoStr += '		<td><span class="descricao-item">Ano de criação: </span>'+ritmo.ano+'</td>'
		descricaoStr += '	</tr>'
		descricaoStr += '	<tr>'
		descricaoStr += '		<td><span class="descricao-item">Foi utilizado em: </span>'+formataStringEnumeracao(ritmo.utilizadoEm)+'</td>'
		descricaoStr += '	</tr>'	
		$('#descricao-informacoes').html(descricaoStr);
		
		$('.botoes-item.bateria').attr('onclick', 'carregarVideo(\''+ritmo.url+'\')');
		$('.botoes-item.caixa').attr('onclick', 'carregarVideo(\''+ritmo.urlCaixa+'\')');
		$('.botoes-item.repinique').attr('onclick', 'carregarVideo(\''+ritmo.urlRepinique+'\')');
		$('.botoes-item.surdo').attr('onclick', 'carregarVideo(\''+ritmo.urlSurdo+'\')');
		$('.botoes-item.agogo').attr('onclick', 'carregarVideo(\''+ritmo.urlAgogo+'\')');
		$('.botoes-item.tamborim').attr('onclick', 'carregarVideo(\''+ritmo.urlTamborim+'\')');
		$('.botoes-item.ganza').attr('onclick', 'carregarVideo(\''+ritmo.urlGanza+'\')');
		
		carregarVideo(ritmo.url);
		
		$('.botoes').show();
		$('.conteudo-video').show();
		$('.conteudo-descricao').show();
	});
}

function carregaMusicas() {

	ajustaTelaTexto();
	carregarTexto('musicas');
	
	$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'listar_musicas'}, function (resposta){
		var musicas = JSON.parse(resposta);
		var listaStr = '<ul>';
		listaStr += '<li class="lista-titulo"><a>Músicas</a></li>';
		$.each(musicas, function(i, musica){
			listaStr += '<li class="lista-item"><a href="#" onclick="selecionaMusica('+musica.id+')">'+musica.nome+'</a></li>';
		});
		listaStr += '<li class="lista-base"></li>';
		listaStr += '</ul>';
		
		$('.lista').html(listaStr);
	});
}

function selecionaMusica(idMusica){	
	$('.conteudo-titulo').hide();
	$('.conteudo-texto').hide();
	
	var filtro = JSON.stringify({id:idMusica});

	$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'obter_musica_por_id', args: filtro}, function (resposta){
		var musica = JSON.parse(resposta);
		$('#descricao-nome').html(musica.nome);
		
		var descricaoStr = '<tr>';
		descricaoStr += '		<td><span class="descricao-item">Autoria : </span>'+musica.origemArranjo+'</td>'	
		descricaoStr += '	</tr>'
		descricaoStr += '	<tr>'
		descricaoStr += '		<td><span class="descricao-item">Ano de criação: </span>'+musica.ano+'</td>'
		descricaoStr += '	</tr>'
		descricaoStr += '	<tr>'
		descricaoStr += '		<td><span class="descricao-item">Apresentação do vídeo: </span>'+musica.apresentacao+'</td>'	
		descricaoStr += '	</tr>'
		$('#descricao-informacoes').html(descricaoStr);
		
		carregarVideo(musica.url);
		
		$('.conteudo-video').show();
		$('.conteudo-descricao').show();
	});
}

function carregaElementos() {
	ajustaTelaTexto();
	carregarTexto('elementos');
	
	selecionaInstrumentoElemento();	
}

function selecionaInstrumentoElemento(categoria){
	var listaElem = '';
	
	if(categoria != null){
		var filtro = JSON.stringify({instrumento: categoria});
		$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'listar_elementos_por_instrumento', args: filtro}, function(resposta){
			var elementos = JSON.parse(resposta);
			if(elementos != null){
				$.each(elementos, function(i, elemento){
					listaElem += '<li class="lista-item"><a href="#" onclick="selecionaElemento('+elemento.id+')">'+elemento.nome+'</a></li>';
				});	
				montaListaElementos(categoria, listaElem);
			}
		});
	}
	else{
		montaListaElementos(categoria, '');
	}
}

function montaListaElementos(categoria, listaElem){

	var listaStr = '<ul>';
	listaStr += '	<li class="lista-titulo"><a>Elementos</a></li>';
	listaStr += '		<li class="lista-subtitulo" onclick="selecionaInstrumentoElemento(\'caixa\')">Caixa</a></li>';
	if(categoria == 'caixa') listaStr += listaElem;
	listaStr += '		<li class="lista-subtitulo" onclick="selecionaInstrumentoElemento(\'repinique\')">Repinique</li>';
	if(categoria == 'repinique') listaStr += listaElem;
	listaStr += '		<li class="lista-subtitulo" onclick="selecionaInstrumentoElemento(\'surdo\')">Surdo</li>';
	if(categoria == 'surdo') listaStr += listaElem;
	listaStr += '		<li class="lista-subtitulo" onclick="selecionaInstrumentoElemento(\'agogo\')">Agogô</li>';
	if(categoria == 'agogo') listaStr += listaElem;
	listaStr += '		<li class="lista-subtitulo" onclick="selecionaInstrumentoElemento(\'tamborim\')">Tamborim</li>';
	if(categoria == 'tamborim') listaStr += listaElem;
	listaStr += '		<li class="lista-subtitulo" onclick="selecionaInstrumentoElemento(\'ganza\')">Ganzá</li>';
	if(categoria == 'ganza') listaStr += listaElem;
	listaStr += '	<li class="lista-base"></li>';
	listaStr += '</ul>';
	
	$('.lista').html(listaStr);
}

function selecionaElemento(idElemento){	
	$('.conteudo-titulo').hide();
	$('.conteudo-texto').hide();
	
	var filtro = JSON.stringify({id:idElemento});
	
	$.post('/amigosratinhos/amigosratinhosDados.php', {funcao: 'obter_elemento_por_id', args: filtro}, function (resposta){
		var elemento = JSON.parse(resposta);
		$('#descricao-nome').html(elemento.nome);
		
		var descricaoStr = '<tr>';
		descricaoStr += '		<td><span class="descricao-item">Instrumento : </span>'+elemento.instrumento+'</td>'		
		descricaoStr += '	</tr>'		
		$('#descricao-informacoes').html(descricaoStr);
		
		carregarVideo(elemento.url);
		
		$('.conteudo-video').show();
		$('.conteudo-descricao').show();
	});

}

function formataStringEnumeracao(texto){
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
	
	return autoriaStr;
}