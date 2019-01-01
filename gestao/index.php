<!DOCTYPE html>

<html>
	<head>
		<title>Gestão Amigos Ratinhos</title>
		<link rel="stylesheet" type="text/css" href="recursos/css/gestao.css" />	
	</head>
	<body>		
		<div class="caixa caixa-fundo"></div>
		<div class="caixa caixa-frente">
			<div class="cabecalho">
				<a class="ratinho" href="http://rateria.com.br/amigosratinhos">
					<img src="recursos/imagens/amigosratinhos_gestao_logo.png" />
				</a>
				<h1>Gestão</h1>
			</div>
			<hr style="width: 90%; height: 1.5px; background-color: #FFFFFF;"/>
			<div>			
				<label>Carregar: 
					<select id="selecaoTabela">
						<option>    -    	</option>
						<option> Viradas	</option>
						<option> Ritmos  	</option>
						<option> Músicas 	</option>
						<option> Elementos 	</option>							
					</select>
				</label>
				<button class="botao" onclick="carregaTabela()">Confirmar</button>
			</div>
			<div class="botaoAdicionar">
				<button id="botaoAdicionar" class="botao" onclick="adicionaItem()">Adicionar</button>
			</div>
			<div class="tabela">
				<table id="tabelaItens"></table>
			</div>
		</div>
		
		<div class="modal-fundo"></div>
		<div class="modal"></div>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
		<script type="text/javascript" src="recursos/js/gestao.js"></script>
		<script type="text/javascript" src="recursos/js/gestaoViradas.js"></script>
		<script type="text/javascript" src="recursos/js/gestaoRitmos.js"></script>
		<script type="text/javascript" src="recursos/js/gestaoMusicas.js"></script>
		<script type="text/javascript" src="recursos/js/gestaoElementos.js"></script>
	</body>
</html>