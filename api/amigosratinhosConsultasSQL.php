<?php

//amigosratinhosConsultasSQL.php
//autor: Salaminho
//descrição: Armazena as queries para as consultas ao banco amigosratinhos

namespace ViradasSQL{
	
	function listar(){
		return "
			SELECT 
				ID 				AS id, 
				NOME 			AS nome,
				URL				AS url,
				ANO				AS ano,
				UTILIZADO_EM	AS utilizadoEm,
				AUTORIA			AS autoria,
				URL_CAIXA		AS urlCaixa,
				URL_REPINIQUE	AS urlRepinique,
				URL_SURDO		AS urlSurdo,
				URL_AGOGO		AS urlAgogo,
				URL_TAMBORIM	AS urlTamborim,
				URL_GANZA		AS urlGanza
			FROM viradas
			ORDER BY NOME;
		";
	}
	
	function listar_simples(){
		return "
			SELECT 
				ID 		AS id, 
				NOME 	AS nome 
			FROM viradas
		";
	}
	
	function listar_anos(){
		return "
			SELECT ANO AS ano
			FROM viradas
			GROUP BY ANO;
		";
	}

	function listar_por_ano($ano){
		return "
			SELECT
				ID AS id,
				NOME AS nome
			FROM viradas
			WHERE ANO = '{$ano}';
		";
	}
	
	function obter_por_id($id){
		return "
			SELECT
				ID				AS id,
				NOME			AS nome,
				URL				AS url,
				ANO				AS ano,
				UTILIZADO_EM	AS utilizadoEm,
				AUTORIA			AS autoria,
				URL_CAIXA		AS urlCaixa,
				URL_REPINIQUE	AS urlRepinique,
				URL_SURDO		AS urlSurdo,
				URL_GANZA		AS urlGanza,
				URL_AGOGO		AS urlAgogo,
				URL_TAMBORIM	AS urlTamborim
			FROM
				viradas
			WHERE
				id = {$id}
		";
	}
	
	function adicionar($virada){
		return "
			INSERT INTO viradas(
				NOME,
				URL,
				ANO,
				UTILIZADO_EM, 
				AUTORIA,
				URL_CAIXA,
				URL_REPINIQUE,
				URL_SURDO,
				URL_AGOGO,
				URL_TAMBORIM,
				URL_GANZA
			)
			VALUES(
				'{$virada->nome}', 
				'{$virada->url}', 
				'{$virada->ano}', 
				'{$virada->utilizadoEm}', 
				'{$virada->autoria}', 
				'{$virada->urlCaixa}', 
				'{$virada->urlRepinique}',
				'{$virada->urlSurdo}', 
				'{$virada->urlAgogo}', 
				'{$virada->urlTamborim}', 
				'{$virada->urlGanza}'
			);
		";
	}
	
	function alterar($virada){
		return "
			UPDATE viradas
			SET 
				NOME			= '{$virada->nome}', 
				URL 			= '{$virada->url}', 
				ANO				= '{$virada->ano}', 
				UTILIZADO_EM	= '{$virada->utilizadoEm}', 
				AUTORIA			= '{$virada->autoria}', 
				URL_CAIXA		= '{$virada->urlCaixa}', 
				URL_REPINIQUE	= '{$virada->urlRepinique}',
				URL_SURDO		= '{$virada->urlSurdo}', 
				URL_AGOGO		= '{$virada->urlAgogo}', 
				URL_TAMBORIM	= '{$virada->urlTamborim}', 
				URL_GANZA		= '{$virada->urlGanza}'
			WHERE
				ID = {$virada->id};
		";
	}
	
	function remover($id){
		return "
			DELETE FROM viradas
			WHERE ID = {$id};
		";
	}
}

namespace RitmosSQL{
	
	function listar(){
		return "
			SELECT 
				ID 				AS id, 
				NOME 			AS nome,
				URL				AS url,
				ANO				AS ano,
				UTILIZADO_EM	AS utilizadoEm,
				AUTORIA			AS autoria,
				URL_CAIXA		AS urlCaixa,
				URL_REPINIQUE	AS urlRepinique,
				URL_SURDO		AS urlSurdo,
				URL_AGOGO		AS urlAgogo,
				URL_TAMBORIM	AS urlTamborim,
				URL_GANZA		AS urlGanza
			FROM ritmos
			ORDER BY NOME;
		";
	}
	
	function listar_simples(){
		return "
			SELECT 
				ID 		AS id, 
				NOME 	AS nome 
			FROM ritmos
		";
	}

	function obter_por_id($id){
		return "
			SELECT
				ID				AS id,
				NOME			AS nome,
				URL				AS url,
				ANO				AS ano,
				UTILIZADO_EM	AS utilizadoEm,
				AUTORIA			AS autoria,
				URL_CAIXA		AS urlCaixa,
				URL_REPINIQUE	AS urlRepinique,
				URL_SURDO		AS urlSurdo,
				URL_GANZA		AS urlGanza,
				URL_AGOGO		AS urlAgogo,
				URL_TAMBORIM	AS urlTamborim
			FROM
				ritmos
			WHERE
				id = {$id}
		";
	}
	
	function adicionar($ritmo){
		return "
			INSERT INTO ritmos(
				NOME,
				URL,
				ANO,
				UTILIZADO_EM, 
				AUTORIA,
				URL_CAIXA,
				URL_REPINIQUE,
				URL_SURDO,
				URL_AGOGO,
				URL_TAMBORIM,
				URL_GANZA
			)
			VALUES(
				'{$ritmo->nome}', 
				'{$ritmo->url}', 
				'{$ritmo->ano}', 
				'{$ritmo->utilizadoEm}', 
				'{$ritmo->autoria}', 
				'{$ritmo->urlCaixa}', 
				'{$ritmo->urlRepinique}', 
				'{$ritmo->urlSurdo}', 
				'{$ritmo->urlAgogo}', 
				'{$ritmo->urlTamborim}', 
				'{$ritmo->urlGanza}'
			);			
		";
	}
	
	function alterar($ritmo){
		return "
			UPDATE ritmos
			SET 
				NOME			= '{$ritmo->nome}', 
				URL 			= '{$ritmo->url}', 
				ANO				= '{$ritmo->ano}', 
				UTILIZADO_EM	= '{$ritmo->utilizadoEm}', 
				AUTORIA			= '{$ritmo->autoria}', 
				URL_CAIXA		= '{$ritmo->urlCaixa}', 
				URL_REPINIQUE	= '{$ritmo->urlRepinique}',
				URL_SURDO		= '{$ritmo->urlSurdo}', 
				URL_AGOGO		= '{$ritmo->urlAgogo}', 
				URL_TAMBORIM	= '{$ritmo->urlTamborim}', 
				URL_GANZA		= '{$ritmo->urlGanza}'
			WHERE
				ID = {$ritmo->id};
		";
	}
	
	function remover($id){
		return "
			DELETE FROM ritmos
			WHERE ID = {$id};
		";
	}
}

namespace MusicasSQL{
	
	function listar(){
		return "
			SELECT 
				ID				AS id,
				NOME			AS nome,
				URL				AS url,
				ANO				AS ano,
				ORIGEM_ARRANJO	AS origemArranjo,
				APRESENTACAO	AS apresentacao
			FROM musicas
			ORDER BY NOME;
		";
	}
	
	function listar_simples(){
		return "
			SELECT 
				ID 		AS id, 
				NOME 	AS nome 
			FROM musicas
		";
	}

	function obter_por_id($id){
		return "
			SELECT
				ID				AS id,
				NOME			AS nome,
				URL				AS url,
				ANO				AS ano,
				ORIGEM_ARRANJO	AS origemArranjo,
				APRESENTACAO	AS apresentacao		
			FROM
				musicas
			WHERE
				id = {$id}
		";
	}
	
	function adicionar($musica){
		return "
			INSERT INTO musicas(
				NOME,
				URL,
				ANO,
				ORIGEM_ARRANJO, 
				APRESENTACAO
			)
			VALUES(
				'{$musica->nome}', 
				'{$musica->url}', 
				'{$musica->ano}', 
				'{$musica->origemArranjo}',
				'{$musica->apresentacao}'
			);
		";
	}
	
	function alterar($musica){
		return "
			UPDATE musicas
			SET 
				NOME			= '{$musica->nome}', 
				URL 			= '{$musica->url}', 
				ANO				= '{$musica->ano}', 
				ORIGEM_ARRANJO	= '{$musica->origemArranjo}', 
				APRESENTACAO	= '{$musica->apresentacao}' 				
			WHERE
				ID = {$musica->id};
		";
	}
	
	function remover($id){
		return "
			DELETE FROM musicas
			WHERE ID = {$id};
		";
	}
}

namespace ElementosSQL{
	
	function listar(){
		return "
			SELECT 
				ID				AS id,
				NOME			AS nome,
				URL				AS url,
				INSTRUMENTO		AS instrumento
			FROM elementos
			ORDER BY NOME;
		";
	}
	
	function listar_por_instrumento($instrumento){
		return "
			SELECT 
				ID 		AS id, 
				NOME 	AS nome 
			FROM elementos
				WHERE INSTRUMENTO = '{$instrumento}'
		";
	}

	function obter_por_id($id){
		return "
			SELECT
				ID				AS id,
				NOME			AS nome,
				URL				AS url,
				INSTRUMENTO		AS instrumento		
			FROM
				elementos
			WHERE
				id = {$id}
		";
	}
	
	function adicionar($elemento){
		return "
			INSERT INTO elementos(
				NOME,
				URL,
				INSTRUMENTO
			)
			VALUES(
				'{$elemento->nome}',
				'{$elemento->url}',
				'{$elemento->instrumento}'
			);
		";
	}
	
	function alterar($elemento){
		return "
			UPDATE elementos
			SET 
				NOME			= '{$elemento->nome}', 
				URL 			= '{$elemento->url}', 
				INSTRUMENTO		= '{$elemento->instrumento}'			
			WHERE
				ID = {$elemento->id};
		";
	}
	
	function remover($id){
		return "
			DELETE FROM elementos
			WHERE ID = {$id};
		";
	}
}

namespace TextosSQL{
	
	function obter_por_categoria($categoria){
		return "
			SELECT
				TITULO 	AS titulo,
				TEXTO	AS texto
			FROM
				textos
			WHERE
				categoria = '{$categoria}'
			";
	}
	
	function listar(){
		return "
			SELECT
				CATEGORIA	AS categoria,
				TITULO 		AS titulo,
				TEXTO 		AS texto
			FROM
				textos;
		";
	}
}
?>