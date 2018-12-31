<!DOCTYPE html>

<html>
    <head>
        <title>Viradas | AmigosRatinhos</title>
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
                <h2 class="conteudo-titulo">Viradas</h2>
                <div class="conteudo-texto">
                    <p>Viradas, breques, bossas, convenções... estão todos aqui!</p>
                    <p>Um dos principais elementos musicais de uma bateria são as suas viradas. Aqui estão todos os breques tocados por nossos ritmistas desde os tempos ancestrais!</p>
                    <p>Que os patronos da Irmandade Raterística e os Artífices da Driação acompanhem sua caminhada!</p>
                </div>

            <iframe class="conteudo-video" src="" frameborder="0" allowfullscreen></iframe>
				
            <div class="conteudo-descricao">
                <div class="descricao-topo">
                    <p id="descricao-nome"></p>
                    <div class="descricao-botoes">
                        <ul class="botoes">
                            <li class="botoes-item bateria">									
                                <img src="/amigosratinhos/recursos/imagens/botaoBateria.png" />
                            </li>
                            <li class="botoes-item caixa">
                                <img src="/amigosratinhos/recursos/imagens/botaoCaixa.png" />
                            </li>
                            <li class="botoes-item repinique">
                                <img src="/amigosratinhos/recursos/imagens/botaoRepinique.png" />
                            </li>
                            <li class="botoes-item surdo">
                                <img src="/amigosratinhos/recursos/imagens/botaoSurdo.png" />
                            </li>
                            <li class="botoes-item agogo">
                                <img src="/amigosratinhos/recursos/imagens/botaoAgogo.png" />
                            </li>
                            <li class="botoes-item tamborim">
                                <img src="/amigosratinhos/recursos/imagens/botaoTamborim.png" />
                            </li>
                            <li class="botoes-item ganza">
                                <img src="/amigosratinhos/recursos/imagens/botaoGanza.png" />
                            </li>								
                        </ul>
                    </div>
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
        <script src="/amigosratinhos/recursos/js/viradas.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                carregaViradas();
            });
        </script>

    </body>
</html>