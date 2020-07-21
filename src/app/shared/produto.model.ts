export class Produto{

    public idProduto : number;
    public codigoProduto: string;
    public codigoProdutoVenda :string;
    public idProdutoLinha : number;	
    public produtoLinha : string;
    public ativo : boolean;
    public idProdutoGrupo : number;
    public produtoGrupo : string;
    public idSubProdutoGrupo : number;
    public subProdutoGrupo	: string;
    public idColecao : number;
    public dataInicial : string;
    public emDesenvolvimento : boolean;
    public observacao : string; /* maxLength: 255; minLength: 0; */
    public ncm : string; /*  maxLength: 13, minLenght 0 */
    public genero : number;
    public idPlanoDeConta : any;
    public idPlanoDeContaDebito : number;
    public idPlanoDeContaCredito : number;
    public planoDeContaCredito : number;
    public descricao : string; /* maxLenght:100 , minLenght:0 */
    public descricaoNota: string; /* maxLenght:100 , minLenght:0 */
    public icmsSaida : number;
    public ipiSaida : number;
    public pisSaida : number;
    public cofinsSaida : number;
    public icmsEntrada : number;
    public ipiEntrada : number;
    public pisEntrada : number;
    public confinsEntrada : number;
    public aliquotaIPI : number;
    public idProdutoPrecoPorTabela : number;
    public tabelaPreco: string;
    public cfop : number;
    public idMarca : number;
    public idFilial : number;
    public filial : string;
    public idFichaTecnicaProduto : number;
    public produtoFichaTecnica : string;
    public produtoFotos : string;
    public produtosSimilares : string;
    public composicao : string;
    public  cEAN :string;
    public emLinha : boolean;
    public proprio : boolean;
    public terceiro	: boolean;
    public dtCriacaoPrd	: string;
    public sigla: string;
    public nome:string;
}