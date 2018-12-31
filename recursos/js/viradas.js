var listaViradas = [];

function carregaViradas() {
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'listar_anos_de_viradas'},
		function(resposta){
			listaViradas = JSON.parse(resposta);
			montaListaViradas();
		}
	);
}

function carregaViradasPorAno(ano){
	var filtro = JSON.stringify({ano: ano});
	
	//Remove se as viradas do ano requisitado já estavam listadas
	for(var i = 0; i < listaViradas.length; i++){
		var item = listaViradas[i];
		if(item.ano == ano && item.viradas != null){
			item.viradas = null;
			montaListaViradas();
			return;
		}
	}

	//Carrega lista de viradas do ano requisitado
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'listar_viradas_por_ano', args: filtro},
		function (resposta){
			for(var i = 0; i < listaViradas.length; i++){
				var item = listaViradas[i];
				if(item.ano == ano)
					item.viradas = JSON.parse(resposta);
			}
			montaListaViradas();
		}
	);
}

function selecionaVirada(idVirada){	
	$('.conteudo-titulo').hide();
	$('.conteudo-texto').hide();
		
	var filtro = JSON.stringify({id:idVirada});
	
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'obter_virada_por_id', args: filtro},
		function (resposta){
			var virada = JSON.parse(resposta);
			carregaViradaSelecionada(virada);
		}
	);
}

function carregaViradaSelecionada(virada){
	carregaDescricaoVirada(virada);
	carregarVideo(virada.url);

	$('.botoes').show();
	$('.conteudo-video').show();
	$('.conteudo-descricao').show();
}

function montaListaViradas(){
	var listaStr = '';
	
	listaStr += '<ul>';
	listaStr += '<li class="lista-titulo"><a>Viradas</a></li>';

	$.each(listaViradas, function(i, item){
		if(item.ano != '-'){
			listaStr += '<li class="lista-subtitulo" onclick="carregaViradasPorAno('+item.ano+')">'+item.ano+'</a></li>';
		}
		else{
			listaStr += '<li class="lista-subtitulo" onclick="carregaViradasPorAno(\''+item.ano+'\')">Desconhecido</a></li>';
		}

		if(item.viradas != null && item.viradas.length > 0){
			$.each(item.viradas, function(i, virada){
				listaStr += '<li class="lista-item"><a href="#" onclick="selecionaVirada('+virada.id+')">'+virada.nome+'</a></li>';
			});	
		}
	});
	listaStr += '	<li class="lista-base"></li>';
	listaStr += '</ul>';
	
	$('.lista').html(listaStr);
}

function carregaDescricaoVirada(virada){
	$('#descricao-nome').html(virada.nome);
		
	var descricaoStr = '<tr>';
	descricaoStr += '		<td><span class="descricao-item">Autoria: </span>'+formataStringEnumeracao(virada.autoria)+'</td>'		
	descricaoStr += '	</tr>'
	descricaoStr += '	<tr>'
	descricaoStr += (parseInt(virada.ano))? '<td><span class="descricao-item">Ano de criação: </span>'+virada.ano+'</td>' : '<td><span class="descricao-item">Ano de criação: </span>Desconhecido</td>'
	descricaoStr += '	</tr>'
	descricaoStr += '	<tr>'
	descricaoStr += '		<td><span class="descricao-item">Foi utilizado em: </span>'+formataStringEnumeracao(virada.utilizadoEm)+'</td>'
	descricaoStr += '	</tr>'		
	$('#descricao-informacoes').html(descricaoStr);
	
	$('.botoes-item.bateria').attr('onclick', 'carregarVideo(\''+virada.url+'\')');
	$('.botoes-item.caixa').attr('onclick', 'carregarVideo(\''+virada.urlCaixa+'\')');
	$('.botoes-item.repinique').attr('onclick', 'carregarVideo(\''+virada.urlRepinique+'\')');
	$('.botoes-item.surdo').attr('onclick', 'carregarVideo(\''+virada.urlSurdo+'\')');
	$('.botoes-item.agogo').attr('onclick', 'carregarVideo(\''+virada.urlAgogo+'\')');
	$('.botoes-item.tamborim').attr('onclick', 'carregarVideo(\''+virada.urlTamborim+'\')');
	$('.botoes-item.ganza').attr('onclick', 'carregarVideo(\''+virada.urlGanza+'\')');
}