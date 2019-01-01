function validaVirada(){
	var valido = true;
	if (!$('#virada-nome').val()){
		$('#virada-nome').css('border', '2px solid #B22222');
		valido = false;
	}
	if (!valido){
		$('#msgCamposObrigatorios').css('display', 'inline');
	}
	return valido;
}

function adicionaVirada(){
	
	if(!validaVirada()) return;
	
	var nome = $('#virada-nome').val();
	var url = ($('#virada-url').val() != "")? $('#virada-url').val() : null;
	var ano = (parseInt($('#virada-ano').val()))? $('#virada-ano').val() : '-';
	var utilizadoEm = ($('#virada-utilizadoEm').val() != "")? $('#virada-utilizadoEm').val() : null;
	var autoria = ($('#virada-autoria').val() != "")? $('#virada-autoria').val() : null;
	var urlCaixa = ($('#virada-urlCaixa').val() != "")? $('#virada-urlCaixa').val() : null;
	var urlRepinique = ($('#virada-urlRepinique').val() != "")? $('#virada-urlRepinique').val() : null;
	var urlSurdo = ($('#virada-urlSurdo').val() != "")? $('#virada-urlSurdo').val() : null;
	var urlAgogo = ($('#virada-urlAgogo').val() != "")? $('#virada-urlAgogo').val() : null;
	var urlTamborim = ($('#virada-urlTamborim').val() != "")? $('#virada-urlTamborim').val() : null;
	var urlGanza = ($('#virada-urlGanza').val() != "")? $('#virada-urlGanza').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Viradas',
		item: {
			nome: nome,
			url: url,
			ano: ano,
			utilizadoEm: utilizadoEm,
			autoria: autoria,
			urlCaixa: urlCaixa,
			urlRepinique: urlRepinique,
			urlSurdo: urlSurdo,
			urlAgogo: urlAgogo,
			urlTamborim: urlTamborim,
			urlGanza: urlGanza
		}
	});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'adicionar', args: conteudo}, function (resposta){
		alert(resposta);
		carregaTabela();
		fechaModal();
	});
}

function alteraVirada(idVirada){
	
	if(!validaVirada()) return;
	
	var id = $('#virada-id').val();
	var nome = ($('#virada-nome').val() != "")? $('#virada-nome').val() : null;
	var url = ($('#virada-url').val() != "")? $('#virada-url').val() : null;
	var ano = (parseInt($('#virada-ano').val()))? $('#virada-ano').val() : '-';
	var utilizadoEm = ($('#virada-utilizadoEm').val() != "")? $('#virada-utilizadoEm').val() : null;
	var autoria = ($('#virada-autoria').val() != "")? $('#virada-autoria').val() : null;
	var urlCaixa = ($('#virada-urlCaixa').val() != "")? $('#virada-urlCaixa').val() : null;
	var urlRepinique = ($('#virada-urlRepinique').val() != "")? $('#virada-urlRepinique').val() : null;
	var urlSurdo = ($('#virada-urlSurdo').val() != "")? $('#virada-urlSurdo').val() : null;
	var urlAgogo = ($('#virada-urlAgogo').val() != "")? $('#virada-urlAgogo').val() : null;
	var urlTamborim = ($('#virada-urlTamborim').val() != "")? $('#virada-urlTamborim').val() : null;
	var urlGanza = ($('#virada-urlGanza').val() != "")? $('#virada-urlGanza').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Viradas',
		item: {
			id: id,
			nome: nome,
			url: url,
			ano: ano,
			utilizadoEm: utilizadoEm,
			autoria: autoria,
			urlCaixa: urlCaixa,
			urlRepinique: urlRepinique,
			urlSurdo: urlSurdo,
			urlAgogo: urlAgogo,
			urlTamborim: urlTamborim,
			urlGanza: urlGanza
		}
	});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'alterar', args: conteudo}, function(resposta){			
		alert(resposta);
		fechaModal();
		carregaTabela();
	});
	
}

function constroiTabelaViradas(lista){
	var tabelaStr = '<thead>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th colspan="14">VIRADAS</th>';
	tabelaStr += '		</tr>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th>ID</th>';
	tabelaStr += '			<th>Nome</th>';
	tabelaStr += '			<th>URL</th>';
	tabelaStr += '			<th>Ano</th>';
	tabelaStr += '			<th>Utilizado em</th>';
	tabelaStr += '			<th>Autoria</th>';
	tabelaStr += '			<th>URL Caixa</th>';
	tabelaStr += '			<th>URL Repinique</th>';
	tabelaStr += '			<th>URL Surdo</th>';
	tabelaStr += '			<th>URL Agogô</th>';
	tabelaStr += '			<th>URL Tamborim</th>';
	tabelaStr += '			<th>URL Ganzá</th>';
	tabelaStr += '			<th><b>Alterar</b></th>';
	tabelaStr += '			<th><b>Remover</b></th>';
	tabelaStr += '		</tr>';
	tabelaStr += '	</thead>';
	tabelaStr += '	<tbody>';
	$.each(lista, function(i, item){		
		if(i%2 == 0)
			tabelaStr += '<tr class="linha_impar">';
		else
			tabelaStr += '<tr class="linha_par">';
		tabelaStr += '		<td>'+item.id+'</td>';
		tabelaStr += '		<td>'+item.nome+'</td>';
		tabelaStr += '		<td>'+item.url+'</td>';
		tabelaStr += '		<td>'+item.ano+'</td>';
		tabelaStr += '		<td>'+item.utilizadoEm+'</td>';
		tabelaStr += '		<td>'+item.autoria+'</td>';
		tabelaStr += '		<td>'+item.urlCaixa+'</td>';
		tabelaStr += '		<td>'+item.urlRepinique+'</td>';
		tabelaStr += '		<td>'+item.urlSurdo+'</td>';
		tabelaStr += '		<td>'+item.urlAgogo+'</td>';
		tabelaStr += '		<td>'+item.urlTamborim+'</td>';
		tabelaStr += '		<td>'+item.urlGanza+'</td>';
		tabelaStr += '		<td class="botaoAlterar"><a href="#" onclick="alteraItem('+item.id+')"><img src="' + botao.alterar + '"></a></td>';
		tabelaStr += '		<td class="botaoRemover"><a href="#" onclick="removeItem('+item.id+')"><img src="' + botao.remover + '"></a></td>';
		tabelaStr += '	</tr>';
	});
	tabelaStr += '	</tbody>';
	return tabelaStr;
}

function constroiFormularioViradas(operacao, virada){
	var formStr = '';
	formStr += '<fieldset>'; 
	formStr += (operacao != 'alterar')? '<legend id="modal-titulo">Adicionar Virada</legend>' : '<legend id="modal-titulo">Alterar Virada</legend>';
	formStr += '		<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:75px">Nome:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-nome" type="text">' : '<input id="virada-nome" value="'+virada.nome+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:90px">URL:</span>';
	formStr += (operacao != 'alterar')?  '<input id="virada-url" type="text">' : '<input id="virada-url" value="'+virada.url+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:90px">Ano:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-ano" type="text" maxlenght="4">' : '<input id="virada-ano" value="'+virada.ano+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:12px">Utilizado em:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-utilizadoEm" type="text">' : '<input id="virada-utilizadoEm" value="'+virada.utilizadoEm+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:60px">Autoria:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-autoria" type="text">' : '<input id="virada-autoria" value="'+virada.autoria+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div class="linha_formulario">';
	formStr += '	<div>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:32px">URL Caixa:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-urlCaixa" type="text">' : '<input id="virada-urlCaixa" value="'+virada.urlCaixa+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span>URL Repinique:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-urlRepinique" type="text">' : '<input id="virada-urlRepinique" value="'+virada.urlRepinique+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:34px">URL Surdo:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-urlSurdo" type="text">' : '<input id="virada-urlSurdo" value="'+virada.urlSurdo+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:25px">URL Agogô:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-urlAgogo" type="text">' : '<input id="virada-urlAgogo" value="'+virada.urlAgogo+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:2px">URL Tamborim:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-urlTamborim" type="text">' : '<input id="virada-urlTamborim" value="'+virada.urlTamborim+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:25px">URL Ganzá:</span>';
	formStr += (operacao != 'alterar')? '<input id="virada-urlGanza" type="text">' : '<input id="virada-urlGanza" value="'+virada.urlGanza+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	if(operacao == 'alterar') formStr += '<input id="virada-id" value="'+virada.id+'" type="text" style="visibility:hidden;">';
	formStr += '	<p id="msgCamposObrigatorios">Preencher os campos obrigatórios!</p>';
	formStr += '	<div class="linha_botoes">';
	formStr += (operacao == 'adicionar')? '<button id="botaoRegistrar" class="botao" onclick="adicionaVirada()">Registrar</button>' : '<button id="botaoRegistrar" class="botao" onclick="alteraVirada()">Registrar</button>';
	formStr += '		<button id="botaoCancelar" class="botao" onclick="fechaModal()">Cancelar</button>';
	formStr += '	</div>';
	formStr += '</fieldset>';
	
	return formStr;
}