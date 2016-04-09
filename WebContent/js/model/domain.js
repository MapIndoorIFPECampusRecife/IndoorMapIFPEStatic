/**
 * 
 */

	var setores = [
	{ id:'a1' ,num_sala: 'A01',sigla: 'PSCICOL', descricao: 'SERVIÇO SOCIAL ‐ PSICOLOGIA', andar:'T', ramal:'1704/1705'},
	{id:'a3' ,num_sala: 'A03',sigla: 'NAPNE/NAC', descricao: '', andar:'T', ramal:''},
	{id:'a5' ,num_sala: 'A05',sigla: 'CTUR', descricao: 'COORDENAÇÃO DE TURNOS', andar:'T', ramal:'1769'},
	{id: 'a9',num_sala: 'A09',sigla: 'SL PROOF', descricao: 'SALA DOS PROFESSORES BLOCO A', andar:'T', ramal:'1727'},
	{id: 'a2',num_sala: 'A02',sigla: 'CONT/CEOF', descricao: 'COORDENAÇÃO DE CONTABILIDADE/COORDENAÇÃO DE EXECUÇÃO ORÇAMENTÁRIA E FINANCEIRA', andar:'T', ramal:'1649;1648'},	
	{id:'a4' ,num_sala: 'A04',sigla: 'DCLC/CCON', descricao: 'DEPARTAMENTO DE COMPRAS, LICITAÇÕES E CONTRATOS/COORDENAÇÃO DE CONTRATOS', andar:'T', ramal:'1783/1651/1654/1633;1622/1747/1798'},
	{id: 'a6',num_sala: 'A06',sigla: '', descricao: '', andar:'T', ramal:''	},	
	{id: 'a11',num_sala: 'A11',sigla: '', descricao: '', andar:'T', ramal:''},
	{id: 'a8',num_sala: 'A08',sigla: 'DGCR', descricao: '', andar:'T', ramal:''},
	{id: 'a13',num_sala: 'A13',sigla: 'SERV S', descricao: 'SERVIÇO SOCIAL', andar:'T', ramal:'1703/1653'},
	{id: 'a12',num_sala: 'A12',sigla: 'DPL', descricao: '', andar:'T', ramal:'1664'},
	{id:'a15' ,num_sala: 'A15',sigla: 'DIAM/DAD', descricao: 'DIVISÃO DE ADMINISTRAÇÃO/DIRETORIA DE ADMINISTRAÇÃO E PLANEJAMENTO', andar:'T', ramal:'1676/1645/1646;1614'},
	{id:'a7' ,num_sala: 'A07',sigla: 'RSC', descricao: '', andar:'T', ramal:''},
	{id: 'a17',num_sala: 'A17',sigla: 'DAFG', descricao: 'DEPARTAMENTO ACADÊMICO DE CULTURA GERAL, FORMAÇÃO DE PROFESSORES E GESTÃO', andar:'T', ramal:'1766/1770'},
	{id:'a14' ,num_sala: 'A14',sigla: 'DEX, DPL', descricao: 'DIRETORIA DE EXTENSÃO,DIRETORIA DE PLANEJAMENTO', andar:'T', ramal:'1657;1664'},
	{id:'a18' ,num_sala: 'A18',sigla: 'CGCA/DEN/PEDAGOGIA', descricao: 'COORDENADORIA GERAL DE CONTROLEACADÊMICO/DIREÇÃO DE ENSINO', andar:'T', ramal:'1629/1737;1766/1770'},
	{id: 'a21' ,num_sala: 'A21',sigla: 'CAPELA', descricao: '', andar:'T', ramal:''},
	{id:'a19',num_sala: '',sigla: 'CGPE/GRAFICA', descricao: 'COORDENAÇÃO DE GESTÃO DE PESSOAS', andar:'T', ramal:'1615/1626'},	
	{id:'a8' ,num_sala: 'A08',sigla: 'DGCR', descricao: 'DIREÇÃO GERAL DO CAMPUS RECIFE', andar:'T', ramal:'1685/1789/1619'},
	{id:'a10' ,num_sala: 'A10',sigla: 'ASCOM I', descricao: 'ASSESSORIA DE COMUNICAÇÃO 1', andar:'T', ramal:'1760/1639'},
	{id:'a24' ,num_sala: 'A24',sigla: 'ASCOM II', descricao: 'ASSESSORIA DE COMUNICAÇÃO 2', andar:'T', ramal:'1760/1639'},
	{id:'a20' ,num_sala: 'A20',sigla: 'DGPE', descricao: 'DIRETORIA DE GESTÃO DE PESSOAS', andar:'T', ramal:'1640 (CHEFE)'},
	{id:'a22' ,num_sala: 'A22',sigla: 'RECEP I', descricao: 'RECEPÇÃO 1', andar:'T', ramal:''},
	{id:'a23' ,num_sala: 'A23',sigla: 'RECEP II', descricao: 'RECEPÇÃO 2', andar:'T', ramal:''},
	{id:'a70' ,num_sala: 'A70',sigla: 'DAEE', descricao: 'DIVISÃO DE ASSISTÊNCIA E APOIO AO ESTUDANTE', andar:'T', ramal:'1768/1788'},
	{id:'a25' ,num_sala: 'A25',sigla: 'CDSP', descricao: 'CDSP', andar:'T', ramal:'1641'},
	{id:'a27' ,num_sala: 'A27',sigla: 'AUDI', descricao: 'AUDITORIA', andar:'T', ramal:'1735/1768/1647'},
	{id:'a29' ,num_sala: 'A29',sigla: 'DAE/OUVI', descricao: 'DAE/OUVIDORIA', andar:'T', ramal:''},
	{id:'a31' ,num_sala: 'A31',sigla: 'PFIFPE', descricao: 'PFIFPE', andar:'T', ramal:''},
	{id:'a33' ,num_sala: 'A31',sigla: 'PROAD', descricao: 'PRO‐REITORIA DE ADMINISTRAÇÃO EPLANEJAMENTO', andar:'T', ramal:'	1734/1711/1610/1787'},
	{id:'a35' ,num_sala: 'A35',sigla: 'PRODIN/MINIAUDI', descricao: 'PRO‐REITORIA/MINIAUDITÓRIO', andar:'T', ramal:'1679'},
	{id:'a36' ,num_sala: 'A36',sigla: 'PROEXT/PRODEN', descricao: 'PRO‐REITORIA/PRO‐REITORIA DE ENSINO', andar:'T', ramal:'1718/1728;1732/1736/1618/1628'},
	{id:'a34' ,num_sala: 'A34',sigla: 'PROPESQ', descricao: 'PRO‐REITORIA DE PESQUISA', andar:'T', ramal:'1691'},
	{id:'a32' ,num_sala: 'A32',sigla: '', descricao: '', andar:'T', ramal:''},
	{id:'a30' ,num_sala: 'A30',sigla: '', descricao: '', andar:'T', ramal:''},
	{id:'a28' ,num_sala: 'A28',sigla: '', descricao: '', andar:'T', ramal:''},
	{id:'a26' ,num_sala: 'A26',sigla: 'GR', descricao: '', andar:'T', ramal:''},



		
	];