var listaMusicas = [];

function carregaMusicas() {
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'listar_anos_de_musicas'},
		function(resposta){
			listaMusicas = JSON.parse(resposta);
			montaListaMusicas();
		}
	);
}

function carregaMusicasPorAno(ano){
	var filtro = JSON.stringify({ano: ano});
	
	//Remove se as músicas do ano requisitado já estavam listadas
	for(var i = 0; i < listaMusicas.length; i++){
		var item = listaMusicas[i];
		if(item.ano == ano && item.musicas != null){
			item.musicas = null;
			montaListaMusicas();
			return;
		}
	}

	//Carrega lista de músicas do ano requisitado
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'listar_musicas_por_ano', args: filtro},
		function (resposta){
			for(var i = 0; i < listaMusicas.length; i++){
				var item = listaMusicas[i];
				if(item.ano == ano)
					item.musicas = JSON.parse(resposta);
			}
			montaListaMusicas();
		}
	);
}

function selecionaMusica(idMusica){	
	$('.conteudo-titulo').hide();
	$('.conteudo-texto').hide();
		
	var filtro = JSON.stringify({id:idMusica});
	
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'obter_musica_por_id', args: filtro},
		function (resposta){
			var musica = JSON.parse(resposta);
			carregaMusicaSelecionada(musica);
		}
	);
}

function carregaMusicaSelecionada(musica){
	carregaDescricaoMusica(musica);
	carregarVideo(musica.url);

	$('.botoes').show();
	$('.conteudo-video').show();
	$('.conteudo-descricao').show();
}

function montaListaMusicas(){
	var listaStr = '';
	
	listaStr += '<ul>';
	listaStr += '<li class="lista-titulo"><a>Musicas</a></li>';

	$.each(listaMusicas, function(i, item){
		if(item.ano != '-'){
			listaStr += '<li class="lista-subtitulo" onclick="carregaMusicasPorAno('+item.ano+')">'+item.ano+'</a></li>';
		}
		else{
			listaStr += '<li class="lista-subtitulo" onclick="carregaMusicasPorAno(\''+item.ano+'\')">Desconhecido</a></li>';
		}

		if(item.musicas != null && item.musicas.length > 0){
			$.each(item.musicas, function(i, musica){
				listaStr += '<li class="lista-item"><a href="#" onclick="selecionaMusica('+musica.id+')">'+musica.nome+'</a></li>';
			});	
		}
	});
	listaStr += '	<li class="lista-base"></li>';
	listaStr += '</ul>';
	
	$('.lista').html(listaStr);
}

function carregaDescricaoMusica(musica){
	$('#descricao-nome').html(musica.nome);
		
	var descricaoStr = '<tr>';
	descricaoStr += '		<td><span class="descricao-item">Origem do Arranjo: </span>'+musica.origemArranjo+'</td>'		
	descricaoStr += '	</tr>'
	descricaoStr += '	<tr>'
	descricaoStr += (parseInt(musica.ano))? '<td><span class="descricao-item">Ano de criação: </span>'+musica.ano+'</td>' : '<td><span class="descricao-item">Ano de criação: </span>Desconhecido</td>'
	descricaoStr += '	</tr>'
	descricaoStr += '	<tr>'
	descricaoStr += '		<td><span class="descricao-item">Apresentação do vídeo: </span>'+musica.apresentacao+'</td>'
	descricaoStr += '	</tr>'		
    $('#descricao-informacoes').html(descricaoStr);
	
	$('.botoes-item.bateria').attr('onclick', 'carregarVideo(\''+musica.url+'\')');
	$('.botoes-item.caixa').attr('onclick', 'carregarVideo(\''+musica.urlCaixa+'\')');
	$('.botoes-item.repinique').attr('onclick', 'carregarVideo(\''+musica.urlRepinique+'\')');
	$('.botoes-item.surdo').attr('onclick', 'carregarVideo(\''+musica.urlSurdo+'\')');
	$('.botoes-item.agogo').attr('onclick', 'carregarVideo(\''+musica.urlAgogo+'\')');
	$('.botoes-item.tamborim').attr('onclick', 'carregarVideo(\''+musica.urlTamborim+'\')');
	$('.botoes-item.ganza').attr('onclick', 'carregarVideo(\''+musica.urlGanza+'\')');
}
