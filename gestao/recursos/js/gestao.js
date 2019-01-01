var botao = {
	alterar: "recursos/imagens/botaoAlterar.png",
	remover: "recursos/imagens/botaoRemover.png"
}

function carregaTabela(){
	var categoria = $('#selecaoTabela').val();
	
	if(categoria == '-'){
		window.location.reload(true);
		return;
	}
	
	var filtro = JSON.stringify({tabela: categoria});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'obtem_tabela_por_nome', args: filtro}, function (resposta){
		var listaItens = JSON.parse(resposta);
		var tabela = '';
		if(categoria == 'Viradas'){
			tabela = constroiTabelaViradas(listaItens);
		}
		else if(categoria == 'Ritmos'){
			tabela = constroiTabelaRitmos(listaItens);
		}
		else if(categoria == 'Músicas'){
			tabela = constroiTabelaMusicas(listaItens);
		}
		else if(categoria == 'Elementos'){
			tabela = constroiTabelaElementos(listaItens);
		}		
		
		$('#tabelaItens').html(tabela);
		$('#botaoAdicionar').css('display', 'initial');

		var alturaTabela = $('#tabelaItens').height();
		$('.caixa-fundo').height(alturaTabela + 200);
	});
}

function adicionaItem(){
	var categoria = $('#selecaoTabela').val();
	var formulario = '';
	if(categoria == 'Viradas'){
		formulario = constroiFormularioViradas('adicionar');
	}
	else if(categoria == 'Ritmos'){
		formulario = constroiFormularioRitmos('adicionar');
	}
	else if(categoria == 'Músicas'){
		formulario = constroiFormularioMusicas('adicionar');
	}
	else if(categoria == 'Elementos'){
		formulario = constroiFormularioElementos('adicionar');
	}
	
	abreModal(formulario);
}

function alteraItem(id){
	var categoria = $('#selecaoTabela').val();
	
	var filtro = JSON.stringify({categoria: categoria, id: id});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'obtem_item_por_id', args: filtro}, function (resposta){
		
		var item = JSON.parse(resposta);
		
		var formulario = '';
		if(categoria == 'Viradas'){
			formulario = constroiFormularioViradas('alterar', item);
		}
		else if(categoria == 'Ritmos'){
			formulario = constroiFormularioRitmos('alterar', item);
		}
		else if(categoria == 'Músicas'){
			formulario = constroiFormularioMusicas('alterar', item);
		}
		else if(categoria == 'Elementos'){
			formulario = constroiFormularioElementos('alterar', item);
		}
	
		abreModal(formulario);
	});
}

function removeItem(id){
	if(confirm("Você está certo disso?")){
		var categoria = $('#selecaoTabela').val();
	
		var filtro = JSON.stringify({categoria: categoria, id: id});
		
		$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'remover', args: filtro}, function(resposta){			
			alert(resposta);
			fechaModal();
			carregaTabela();
		});
	}
}

function abreModal(conteudo){
	$('.modal').html(conteudo);
	$('.modal').show();
	$('.modal-fundo').show();
}

function fechaModal(){
	$('.modal').hide();
	$('.modal-fundo').hide();
}