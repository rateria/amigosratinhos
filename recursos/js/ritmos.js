var listaRitmos = [];

function carregaRitmos() {
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'listar_anos_de_ritmos'},
		function(resposta){
			listaRitmos = JSON.parse(resposta);
			montaListaRitmos();
		}
	);
}

function carregaRitmosPorAno(ano){
	var filtro = JSON.stringify({ano: ano});
	
	//Remove se os ritmos do ano requisitado já estavam listadas
	for(var i = 0; i < listaRitmos.length; i++){
		var item = listaRitmos[i];
		if(item.ano == ano && item.ritmos != null){
			item.ritmos = null;
			montaListaRitmos();
			return;
		}
	}

	//Carrega lista de ritmos do ano requisitado
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'listar_ritmos_por_ano', args: filtro},
		function (resposta){
			for(var i = 0; i < listaRitmos.length; i++){
				var item = listaRitmos[i];
				if(item.ano == ano)
					item.ritmos = JSON.parse(resposta);
			}
			montaListaRitmos();
		}
	);
}

function selecionaRitmo(idRitmo){	
	$('.conteudo-titulo').hide();
	$('.conteudo-texto').hide();
		
	var filtro = JSON.stringify({id:idRitmo});
	
	$.post(
		'/amigosratinhos/api/amigosratinhosDados.php',
		{funcao: 'obter_ritmo_por_id', args: filtro},
		function (resposta){
			var ritmo = JSON.parse(resposta);
			carregaRitmoSelecionado(ritmo);
		}
	);
}

function carregaRitmoSelecionado(ritmo){
	carregaDescricaoRitmo(ritmo);
	carregarVideo(ritmo.url);

	$('.botoes').show();
	$('.conteudo-video').show();
	$('.conteudo-descricao').show();
}

function montaListaRitmos(){
	var listaStr = '';
	
	listaStr += '<ul>';
	listaStr += '<li class="lista-titulo"><a>Ritmos</a></li>';

	$.each(listaRitmos, function(i, item){
		if(item.ano != '-'){
			listaStr += '<li class="lista-subtitulo" onclick="carregaRitmosPorAno('+item.ano+')">'+item.ano+'</a></li>';
		}
		else{
			listaStr += '<li class="lista-subtitulo" onclick="carregaRitmosPorAno(\''+item.ano+'\')">Desconhecido</a></li>';
		}

		if(item.ritmos != null && item.ritmos.length > 0){
			$.each(item.ritmos, function(i, ritmo){
				listaStr += '<li class="lista-item"><a href="#" onclick="selecionaRitmo('+ritmo.id+')">'+ritmo.nome+'</a></li>';
			});	
		}
	});
	listaStr += '	<li class="lista-base"></li>';
	listaStr += '</ul>';
	
	$('.lista').html(listaStr);
}

function carregaDescricaoRitmo(ritmo){
	$('#descricao-nome').html(ritmo.nome);
		
	var descricaoStr = '<tr>';
	descricaoStr += '		<td><span class="descricao-item">Autoria: </span>'+formataStringEnumeracao(ritmo.autoria)+'</td>'		
	descricaoStr += '	</tr>'
	descricaoStr += '	<tr>'
	descricaoStr += (parseInt(ritmo.ano))? '<td><span class="descricao-item">Ano de criação: </span>'+ritmo.ano+'</td>' : '<td><span class="descricao-item">Ano de criação: </span>Desconhecido</td>'
	descricaoStr += '	</tr>'
	descricaoStr += '	<tr>'
	descricaoStr += '		<td><span class="descricao-item">Foi utilizado em: </span>'+formataStringEnumeracao(ritmo.utilizadoEm)+'</td>'
	descricaoStr += '	</tr>'		
	$('#descricao-informacoes').html(descricaoStr);
	
	ritmo.url? $('.botoes-item.bateria').attr('onclick', 'carregarVideo(\''+ritmo.url+'\')') : $('.botoes-item.bateria').attr('onclick', '');;
	ritmo.urlCaixa? $('.botoes-item.caixa').attr('onclick', 'carregarVideo(\''+ritmo.urlCaixa+'\')') : $('.botoes-item.caixa').attr('onclick', '');
	ritmo.urlRepinique? $('.botoes-item.repinique').attr('onclick', 'carregarVideo(\''+ritmo.urlRepinique+'\')') : $('.botoes-item.repinique').attr('onclick', '');
	ritmo.urlSurdo? $('.botoes-item.surdo').attr('onclick', 'carregarVideo(\''+ritmo.urlSurdo+'\')') : $('.botoes-item.surdo').attr('onclick', '');
	ritmo.urlAgogo? $('.botoes-item.agogo').attr('onclick', 'carregarVideo(\''+ritmo.urlAgogo+'\')') : $('.botoes-item.agogo').attr('onclick', '');
	ritmo.urlTamborim? $('.botoes-item.tamborim').attr('onclick', 'carregarVideo(\''+ritmo.urlTamborim+'\')') : $('.botoes-item.tamborim').attr('onclick', '');
	ritmo.urlGanza? $('.botoes-item.ganza').attr('onclick', 'carregarVideo(\''+ritmo.urlGanza+'\')') : $('.botoes-item.ganza').attr('onclick', '');

	ritmo.url? 		$('.botoes-item.bateria').removeClass('inexistente') : $('.botoes-item.bateria').addClass('inexistente');
	ritmo.urlCaixa? 	$('.botoes-item.caixa').removeClass('inexistente') : $('.botoes-item.caixa').addClass('inexistente');
	ritmo.urlRepinique? $('.botoes-item.repinique').removeClass('inexistente') : $('.botoes-item.repinique').addClass('inexistente');
	ritmo.urlSurdo? 	$('.botoes-item.surdo').removeClass('inexistente') : $('.botoes-item.surdo').addClass('inexistente');
	ritmo.urlAgogo? 	$('.botoes-item.agogo').removeClass('inexistente') : $('.botoes-item.agogo').addClass('inexistente');
	ritmo.urlTamborim? $('.botoes-item.tamborim').removeClass('inexistente') : $('.botoes-item.tamborim').addClass('inexistente');
	ritmo.urlGanza? 	$('.botoes-item.ganza').removeClass('inexistente') : $('.botoes-item.ganza').addClass('inexistente');
}