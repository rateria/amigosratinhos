function validaElemento(){
	var valido = true;
	if (!$('#elemento-nome').val()){
		$('#elemento-nome').css('border', '2px solid #B22222');		
		valido = false;
	}
	if ($('#elemento-instrumento').val() == '-'){
		$('#elemento-instrumento').css('border', '2px solid #B22222');		
		valido = false;
	}
	if (!valido){
		$('#msgCamposObrigatorios').css('display', 'inline');
	}
	return valido;
}

function adicionaElemento(){
	
	if(!validaElemento()) return;
	
	var nome = ($('#elemento-nome').val() != "")? $('#elemento-nome').val() : null;
	var url = ($('#elemento-url').val() != "")? $('#elemento-url').val() : null;
	var instrumento = ($('#elemento-instrumento').val() != "")? $('#elemento-instrumento').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Elementos',
		item: {
			nome: nome,
			url: url,
			instrumento: instrumento
		}
	});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'adicionar', args: conteudo}, function (resposta){
		alert(resposta);
		carregaTabela();
		fechaModal();
	});
}

function alteraElemento(idElemento){
	
	if(!validaElemento()) return;
	
	var id = $('#elemento-id').val();
	var nome = ($('#elemento-nome').val() != "")? $('#elemento-nome').val() : null;
	var url = ($('#elemento-url').val() != "")? $('#elemento-url').val() : null;
	var instrumento = ($('#elemento-instrumento').val() != "")? $('#elemento-instrumento').val() : null;
	
	var conteudo = JSON.stringify({
		categoria: 'Elementos',
		item: {
			id: id,
			nome: nome,
			url: url,
			instrumento: instrumento		
		}
	});
	
	$.post('/amigosratinhos/gestao/api/amigosratinhosGestaoDados.php', {funcao: 'alterar', args: conteudo}, function(resposta){			
		alert(resposta);
		fechaModal();
		carregaTabela();
	});
	
}

function constroiTabelaElementos(lista){
	var tabelaStr = '<thead>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th colspan="14">ELEMENTOS</th>';
	tabelaStr += '		</tr>';
	tabelaStr += '		<tr>';
	tabelaStr += '			<th>ID</th>';
	tabelaStr += '			<th>Nome</th>';
	tabelaStr += '			<th>URL</th>';
	tabelaStr += '			<th>Instrumento</th>';
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
		tabelaStr += '		<td>'+item.instrumento+'</td>';	
		tabelaStr += '		<td class="botaoAlterar"><a href="#" onclick="alteraItem('+item.id+')"><img src="' + botao.alterar + '"></a></td>';
		tabelaStr += '		<td class="botaoRemover"><a href="#" onclick="removeItem('+item.id+')"><img src="' + botao.remover + '"></a></td>';
		tabelaStr += '	</tr>';
	});
	tabelaStr += '	</tbody>';
	return tabelaStr;
}

function constroiFormularioElementos(operacao, elemento){
	var formStr = '';
	formStr += '<fieldset>';
	formStr += (operacao != 'alterar')? '<legend id="modal-titulo">Adicionar Elemento</legend>' : '<legend id="modal-titulo">Alterar Elemento</legend>';
	formStr += '		<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:75px">Nome:</span>';
	formStr += (operacao != 'alterar')? '<input id="elemento-nome" type="text">' : '<input id="elemento-nome" value="'+elemento.nome+'" type="text">';
	formStr += '		</label>';
	formStr += '		<label>';
	formStr += '			<span style="padding-left:30px;padding-right:60px">URL:</span>';
	formStr += (operacao != 'alterar')? '<input id="elemento-url" type="text">' : '<input id="elemento-url" value="'+elemento.url+'" type="text">';
	formStr += '		</label>';
	formStr += '	</div>';
	formStr += '	<div class="linha_formulario">';
	formStr += '		<label>';
	formStr += '			<span style="padding-right:25px">Instrumento:</span>';
	formStr += '			<select id="elemento-instrumento">';
	formStr += '				<option>-</option>';
	formStr += (operacao == 'alterar' && elemento.instrumento == 'caixa')	 ? '<option value="Caixa" selected>Caixa</option>' 			: '<option value="Caixa">Caixa</option>';
	formStr += (operacao == 'alterar' && elemento.instrumento == 'repinique')? '<option value="Repinique" selected>Repinique</option>'  : '<option value="Repinique">Repinique</option>';
	formStr += (operacao == 'alterar' && elemento.instrumento == 'surdo')	 ? '<option value="Surdo" selected>Surdo</option>'			: '<option value="Surdo">Surdo</option>';
	formStr += (operacao == 'alterar' && elemento.instrumento == 'agogo')	 ? '<option value="Agogô" selected>Agogô</option>' 			: '<option value="Agogô">Agogô</option>';
	formStr += (operacao == 'alterar' && elemento.instrumento == 'tamborim') ? '<option value="Tamborim" selected>Tamborim</option>' 	: '<option value="Tamborim">Tamborim</option>';
	formStr += (operacao == 'alterar' && elemento.instrumento == 'ganza')	 ? '<option value="Ganzá" selected>Ganzá</option>' 			: '<option value="Ganzá">Ganzá</option>';
	formStr += '			</select>';
	formStr += '		</label>';
	formStr += '	</div>';
	if(operacao == 'alterar') formStr += '<input id="elemento-id" value="'+elemento.id+'" type="text"  style="visibility:hidden;"/>';
	formStr += '	<p id="msgCamposObrigatorios">Preencher os campos obrigatórios!</p>';
	formStr += '	<div class="linha_botoes">';
	formStr += (operacao == 'adicionar')? '<button id="botaoRegistrar" class="botao" onclick="adicionaElemento()">Registrar</button>' : '<button id="botaoRegistrar" class="botao" onclick="alteraElemento()">Registrar</button>';
	formStr += '		<button id="botaoCancelar" class="botao" onclick="fechaModal()">Cancelar</button>';
	formStr += '	</div>';
	formStr += '</fieldset>';
	
	return formStr;
}