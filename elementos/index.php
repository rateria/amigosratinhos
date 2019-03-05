<!DOCTYPE html>

<html>
    <head>
        <title>Elementos | AmigosRatinhos</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" type="text/css" href="/amigosratinhos/recursos/css/estilo.css" />
    </head>
    <body>
        <!--Cabeçalho da página-->
        <?php
            include '../cabecalho.php';
        ?>

        <!--Corpo da página-->
        <div class="corpo">
            <div class="conteudo">
                <h2 class="conteudo-titulo">Elementos</h2>
                <div class="conteudo-texto">
                    <p>Elementos... que raio de seção é essa?</p>
                    <p>Aqui é a área do clubismo.</p>
                    <p>Vocês, amigos ratinhos, que buscam pelos trocentos e um compassos diferentes de caixa, ou pelo o ataque tesoura do tamborim, ou a jogada oculta do ganzá ou mesmo "a causada doida que o Sonrisal tava tocando outro dia", encontrarão nesta seção os elementos técnicos específicos e característicos de cada instrumento.</p>
                    <p>Tá, mas por que esse nome?<br />Ainda não encontramos um nome melhor...</p>
                </div>

                <iframe class="conteudo-video" src="" frameborder="0" allowfullscreen></iframe>
				
                <div class="conteudo-descricao">
                    <div class="descricao-topo">
                        <p id="descricao-nome"></p>                    
                    </div>
                    <hr width="96%" />
                    <table id="descricao-informacoes">
                        <!--Conterá informações sobre o item-->	
                    </table>
                </div>
				
			</div>
			
			<div class="lista">
				<!--Conterá lista de itens-->
			</div>

        </div>

        <!--Scripts-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
        <script src="/amigosratinhos/recursos/js/amigosratinhos.js"></script>
        <script src="/amigosratinhos/recursos/js/elementos.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                carregaElementos();
            });
        </script>

    </body>
</html>