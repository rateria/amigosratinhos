<!DOCTYPE html>

<html>
    <head>
        <title>Músicas | AmigosRatinhos</title>
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
                <h2 class="conteudo-titulo">Músicas</h2>
                <div class="conteudo-texto">
                    <p>E não é só de ritmo que vive a Rateria, não é mesmo?!</p>
                    <p>Apresentações em casamentos, festas e baladas pedem por um pouquinho de música, então aqui você vai encontrar todas as músicas que tocamos, seja com arranjos já existentes (alô, Monobloco!), seja com arranjos criados por nós!</p>
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
        <script src="/amigosratinhos/recursos/js/musicas.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                carregaMusicas();
            });
        </script>

    </body>
</html>