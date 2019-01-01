function validaMusica(){
	var valido = true;
	if (!$('#musica-nome').val()){
		$('#musica-nome').css('border', '2px solid #B22222');
		valido = false;		
	}
	if(!valido){
		$('#msgCamposObrigatorios').css('display', 'block');
	}
	return valido;
}

function adicionaMusica(){
	
	if(!validaMusica()) return;
	
	var nome = ($('#musica-nome').val() != "")? $('#musica-nome').val() : null;
	var url = ($('#musica-url').val() != "")? $('#musica-url').val() : null;
	var ano = (parseInt($('#musica-ano').val()))? $('#musica-ano').val() : '-';
	var origemArranjo = ($('#musica-origemArranjo').val() != "")? $('#musica-origemArranjo').val() : null;
	var apresentacao = ($('#musica-apresentacao').val() != "")? $('#musica-apresentacao').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Músicas',
		item: {
			nome: nome,
			url: url,
			ano: ano,
			origemArranjo: origemArranjo,
			apresentacao: apresentacao			
		}
	});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'adicionar', args: conteudo}, function (resposta){
		alert(resposta);
		carregaTabela();
		fechaModal();
	});
}

function alteraMusica(idMusica){
	
	if(!validaMusica()) return;
	
	var id = $('#musica-id').val();
	var nome = ($('#musica-nome').val() != "")? $('#musica-nome').val() : null;
	var url = ($('#musica-url').val() != "")? $('#musica-url').val() : null;
	var ano = (parseInt($('#musica-ano').val()))? $('#musica-ano').val() : '-';
	var origemArranjo = ($('#musica-origemArranjo').val() != "")? $('#musica-origemArranjo').val() : null;
	var apresentacao = ($('#musica-apresentacao').val() != "")? $('#musica-apresentacao').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Músicas',
		item: {
			id: id,
			nome: nome,
			url: url,
			ano: ano,
			origemArranjo: origemArranjo,
			apresentacao: apresentacao			
		}
	});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'alterar', args: conteudo}, function(resposta){			
		alert(resposta);
		fechaModal();
		carregaTabela();
	});
	
}

function constroiTabelaMusicas(lista){
	var tabelaStr = '<thead>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th colspan="14">MÚSICAS</th>';
	tabelaStr += '		</tr>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th>ID</th>';
	tabelaStr += '			<th>Nome</th>';
	tabelaStr += '			<th>URL</th>';
	tabelaStr += '			<th>Ano</th>';
	tabelaStr += '			<th>Origem do Arranjo</th>';
	tabelaStr += '			<th>Apresentação</th>';
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
		tabelaStr += '		<td>'+item.origemArranjo+'</td>';
		tabelaStr += '		<td>'+item.apresentacao+'</td>';		
		tabelaStr += '		<td class="botaoAlterar"><a href="#" onclick="alteraItem('+item.id+')"><img src="' + botao.alterar + '"></a></td>';
		tabelaStr += '		<td class="botaoRemover"><a href="#" onclick="removeItem('+item.id+')"><img src="' + botao.remover + '"></a></td>';
		tabelaStr += '	</tr>';
	});
	tabelaStr += '	</tbody>';
	return tabelaStr;
}

function constroiFormularioMusicas(operacao, musica){
	var formStr = '';
	formStr += '<fieldset>';
	formStr += (operacao != 'alterar')? '<legend id="modal-titulo">Adicionar Música</legend>' : '<legend id="modal-titulo">Alterar Música</legend>';
	formStr += '		<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:75px">Nome:</span>';
	formStr += (operacao != 'alterar')? '<input id="musica-nome" type="text">' : '<input id="musica-nome" value="'+musica.nome+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:50px;padding-left:40px">URL:</span>';
	formStr += (operacao != 'alterar')? '<input id="musica-url" type="text">' : '<input id="musica-url" value="'+musica.url+' "type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:90px">Ano:</span>';
	formStr += (operacao != 'alterar')? '<input id="musica-ano" type="text"  maxlenght="4">' : '<input id="musica-ano" type="text" value="'+musica.ano+'" maxlenght="4">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:12px">Origem do Arranjo:</span>';
	formStr += (operacao != 'alterar')? '<input id="musica-origemArranjo" class="longo" type="text">' : '<input id="musica-origemArranjo" class="longo" value="'+musica.origemArranjo+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:50px">Apresentação:</span>';
	formStr += (operacao != 'alterar')? '<input id="musica-apresentacao" class="longo" type="text">' : '<input id="musica-apresentacao" class="longo" value="'+musica.apresentacao+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	if(operacao == 'alterar') formStr += '<input id="musica-id" value="'+musica.id+'" type="text" style="visibility:hidden;">';
	formStr += '	<p id="msgCamposObrigatorios">Preencher os campos obrigatórios!</p>';
	formStr += '	<div class="linha_botoes">';
	formStr += (operacao == 'adicionar')? '<button id="botaoRegistrar" class="botao" onclick="adicionaMusica()">Registrar</button>' : '<button id="botaoRegistrar" class="botao" onclick="alteraMusica()">Registrar</button>';
	formStr += '		<button id="botaoCancelar" class="botao" onclick="fechaModal()">Cancelar</button>';
	formStr += '	</div>';
	formStr += '</fieldset>';
	
	return formStr;
}