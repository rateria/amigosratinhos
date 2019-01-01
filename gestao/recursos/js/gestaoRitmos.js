function validaRitmo(){
	var valido = true;
	if (!$('#ritmo-nome').val()){
		$('#ritmo-nome').css('border', '2px solid #B22222');		
		valido = false;
	}
	if (!valido){
		$('#msgCamposObrigatorios').css('display', 'inline');
	}
	return valido;
}

function adicionaRitmo(){
	
	if (!validaRitmo()) return;
	
	var nome = ($('#ritmo-nome').val() != "")? $('#ritmo-nome').val() : null;
	var url = ($('#ritmo-url').val() != "")? $('#ritmo-url').val() : null;
	var ano = (parseInt($('#ritmo-ano').val()))? $('#ritmo-ano').val() : '-';
	var utilizadoEm = ($('#ritmo-utilizadoEm').val() != "")? $('#ritmo-utilizadoEm').val() : null;
	var autoria = ($('#ritmo-autoria').val() != "")? $('#ritmo-autoria').val() : null;
	var urlCaixa = ($('#ritmo-urlCaixa').val() != "")? $('#ritmo-urlCaixa').val() : null;
	var urlRepinique = ($('#ritmo-urlRepinique').val() != "")? $('#ritmo-urlRepinique').val() : null;
	var urlSurdo = ($('#ritmo-urlSurdo').val() != "")? $('#ritmo-urlSurdo').val() : null;
	var urlAgogo = ($('#ritmo-urlAgogo').val() != "")? $('#ritmo-urlAgogo').val() : null;
	var urlTamborim = ($('#ritmo-urlTamborim').val() != "")? $('#ritmo-urlTamborim').val() : null;
	var urlGanza = ($('#ritmo-urlGanza').val() != "")? $('#ritmo-urlGanza').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Ritmos',
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

function alteraRitmo(idRitmo){
	
	if (!validaRitmo()) return;
	
	var id = $('#ritmo-id').val();
	var nome = ($('#ritmo-nome').val() != "")? $('#ritmo-nome').val() : null;
	var url = ($('#ritmo-url').val() != "")? $('#ritmo-url').val() : null;
	var ano = (parseInt($('#ritmo-ano').val()))? $('#ritmo-ano').val() : '-';
	var utilizadoEm = ($('#ritmo-utilizadoEm').val() != "")? $('#ritmo-utilizadoEm').val() : null;
	var autoria = ($('#ritmo-autoria').val() != "")? $('#ritmo-autoria').val() : null;
	var urlCaixa = ($('#ritmo-urlCaixa').val() != "")? $('#ritmo-urlCaixa').val() : null;
	var urlRepinique = ($('#ritmo-urlRepinique').val() != "")? $('#ritmo-urlRepinique').val() : null;
	var urlSurdo = ($('#ritmo-urlSurdo').val() != "")? $('#ritmo-urlSurdo').val() : null;
	var urlAgogo = ($('#ritmo-urlAgogo').val() != "")? $('#ritmo-urlAgogo').val() : null;
	var urlTamborim = ($('#ritmo-urlTamborim').val() != "")? $('#ritmo-urlTamborim').val() : null;
	var urlGanza = ($('#ritmo-urlGanza').val() != "")? $('#ritmo-urlGanza').val() : null
	
	var conteudo = JSON.stringify({
		categoria: 'Ritmos',
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

function constroiTabelaRitmos(lista){
	var tabelaStr = '<thead>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th colspan="14">RITMOS</th>';
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

function constroiFormularioRitmos(operacao, ritmo){
	var formStr = '';
	formStr += '<fieldset>'; 
	formStr += (operacao != 'alterar')? '<legend id="modal-titulo">Adicionar Ritmo</legend>' : '<legend id="modal-titulo">Alterar Ritmo</legend>';
	formStr += '		<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:75px">Nome:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-nome" type="text">' : '<input id="ritmo-nome" value="'+ritmo.nome+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:90px">URL:</span>';
	formStr += (operacao != 'alterar')?  '<input id="ritmo-url" type="text">' : '<input id="ritmo-url" value="'+ritmo.url+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:90px">Ano:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-ano" type="text" maxlenght="4">' : '<input id="ritmo-ano" value="'+ritmo.ano+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:12px">Utilizado em:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-utilizadoEm" type="text">' : '<input id="ritmo-utilizadoEm" value="'+ritmo.utilizadoEm+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:60px">Autoria:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-autoria" type="text">' : '<input id="ritmo-autoria" value="'+ritmo.autoria+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div class="linha_formulario">';
	formStr += '	<div>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:32px">URL Caixa:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-urlCaixa" type="text">' : '<input id="ritmo-urlCaixa" value="'+ritmo.urlCaixa+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span>URL Repinique:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-urlRepinique" type="text">' : '<input id="ritmo-urlRepinique" value="'+ritmo.urlRepinique+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:34px">URL Surdo:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-urlSurdo" type="text">' : '<input id="ritmo-urlSurdo" value="'+ritmo.urlSurdo+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:25px">URL Agogô:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-urlAgogo" type="text">' : '<input id="ritmo-urlAgogo" value="'+ritmo.urlAgogo+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:2px">URL Tamborim:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-urlTamborim" type="text">' : '<input id="ritmo-urlTamborim" value="'+ritmo.urlTamborim+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:25px">URL Ganzá:</span>';
	formStr += (operacao != 'alterar')? '<input id="ritmo-urlGanza" type="text">' : '<input id="ritmo-urlGanza" value="'+ritmo.urlGanza+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	if(operacao == 'alterar') formStr += '<input id="ritmo-id" value="'+ritmo.id+'" type="text" style="visibility:hidden;">';
	formStr += '	<p id="msgCamposObrigatorios">Preencher os campos obrigatórios!</p>';
	formStr += '	<div class="linha_botoes">';
	formStr += (operacao == 'adicionar')? '<button id="botaoRegistrar" class="botao" onclick="adicionaRitmo()">Registrar</button>' : '<button id="botaoRegistrar" class="botao" onclick="alteraRitmo()">Registrar</button>';
	formStr += '		<button id="botaoCancelar" class="botao" onclick="fechaModal()">Cancelar</button>';
	formStr += '	</div>';
	formStr += '</fieldset>';
	
	return formStr;
}