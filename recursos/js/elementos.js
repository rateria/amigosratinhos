listaElementos = [];

function carregaElementos() {
    $.post(
        '/amigosratinhos/api/amigosratinhosDados.php',
        {funcao: 'listar_instrumentos'},
        function(resposta){
            listaElementos = JSON.parse(resposta);
			montaListaElementos();
        }
    );	
}

function carregaElementosPorInstrumento(instrumento){
    var filtro = JSON.stringify({instrumento: instrumento});
        
    //Remove se os elementos do instrumento requisitado já estavam listadas
	for(var i = 0; i < listaElementos.length; i++){
		var item = listaElementos[i];
		if(item.instrumento == instrumento && item.elementos != null){
			item.elementos = null;
			montaListaElementos();
			return;
		}
    }
    
    $.post(
        '/amigosratinhos/api/amigosratinhosDados.php',
        {funcao: 'listar_elementos_por_instrumento', args: filtro},
        function(resposta){
            for(var i = 0; i < listaElementos.length; i++){
				var item = listaElementos[i];
				if(item.instrumento == instrumento)
					item.elementos = JSON.parse(resposta);
			}
			montaListaElementos();
        }
    );
}

  
function selecionaElemento(idElemento){	
    $('.conteudo-titulo').hide();
    $('.conteudo-texto').hide();
    
    var filtro = JSON.stringify({id:idElemento});
    
    $.post(
        '/amigosratinhos/api/amigosratinhosDados.php',
        {funcao: 'obter_elemento_por_id', args: filtro},
        function (resposta){
            var elemento = JSON.parse(resposta);
            carregaElementoSelecionado(elemento);
        }
    );
}

function carregaElementoSelecionado(elemento){
    carregaDescricaoElemento(elemento);
    carregarVideo(elemento.url);

    $('.conteudo-video').show();
    $('.conteudo-descricao').show();
}

function carregaDescricaoElemento(elemento){
    $('#descricao-nome').html(elemento.nome);
        
    var descricaoStr = '<tr>';
    descricaoStr += '		<td><span class="descricao-item">Instrumento : </span>'+elemento.instrumento+'</td>'		
    descricaoStr += '	</tr>'		
    $('#descricao-informacoes').html(descricaoStr);   
}

function montaListaElementos(){
    var listaStr = '';

	listaStr = '<ul>';
	listaStr += '	<li class="lista-titulo"><a>Elementos</a></li>';
    
    $.each(listaElementos, function(i, item){
		
		listaStr += '<li class="lista-subtitulo" onclick="carregaElementosPorInstrumento(\''+item.instrumento+'\')">'+item.instrumento+'</a></li>';

		if(item.elementos != null && item.elementos.length > 0){
			$.each(item.elementos, function(i, elemento){
				listaStr += '<li class="lista-item"><a href="#" onclick="selecionaElemento('+elemento.id+')">'+elemento.nome+'</a></li>';
			});	
		}
	});
	listaStr += '	<li class="lista-base"></li>';
	listaStr += '</ul>';
	
	$('.lista').html(listaStr);
}
