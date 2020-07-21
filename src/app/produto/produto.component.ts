import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Produto } from '../shared/Produto.model';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoService,ToastrService]
})
export class ProdutoComponent implements OnInit {

  constructor(private service : ProdutoService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null) 
      form.reset()
    this.service.produto = {
      idProduto : null,
      codigoProduto: null,
      codigoProdutoVenda :null,
      idProdutoLinha : null,	
      produtoLinha : "",
      ativo : false,
      idProdutoGrupo : null,
      produtoGrupo : "",
      idSubProdutoGrupo : null,
      subProdutoGrupo	: "",
      idColecao : null,
      dataInicial : "",
      emDesenvolvimento : false,
      observacao : "", /* maxLength: 255, minLength: 0, */
      ncm : "", /*  maxLength: 13, minLenght 0 */
      genero : null,
      idPlanoDeConta : 2,
      idPlanoDeContaDebito : null,
      idPlanoDeContaCredito : null,
      planoDeContaCredito : null,
      descricao : "", /* maxLenght:100 , minLenght:0 */
      descricaoNota: "", /* maxLenght:100 , minLenght:0 */
      icmsSaida : null,
      ipiSaida : null,
      pisSaida : null,
      cofinsSaida : null,
      icmsEntrada : null,
      ipiEntrada : null,
      pisEntrada : null,
      confinsEntrada : null,
      aliquotaIPI : null,
      idProdutoPrecoPorTabela : null,
      tabelaPreco: "",
      cfop : null,
      idMarca : null,
      idFilial : null,
      filial : "",
      idFichaTecnicaProduto : null,
      produtoFichaTecnica : "",
      produtoFotos : "",
      produtosSimilares : "",
      composicao : "",
       cEAN :"",
      emLinha : false,
      proprio : false,
      terceiro	: false,
      dtCriacaoPrd	: '',
      sigla: '',
      nome : ''
    
     
    }
  }
  
    onClick(id:number){
      this.service.getProdutoById(id)
      this.toastr.info('Novo registro consultado!', 'Produto consultado')
  /*     console.log(this.clienteService.selectedCliente)  */
      console.log(this.service.produto)
      
    }
  
  
    onSubmit(form: NgForm) {
      if (form.value.idProduto == null) {
        this.service.postProduto(form.value)
          .subscribe(data => {
            this.resetForm(form)
            this.service.getProdutoList()
            this.toastr.success('Novo registro gravado com sucesso!', 'Produto Registrado')
            console.log(this.service.produto)
            console.log(form.value)
           
          })
          
      }
      
      
      
      else {
        this.service.putProduto(form.value.idProduto, form.value)
        .subscribe(data => {
          this.resetForm(form)
          this.service.getProdutoList()
          this.toastr.info('Novo registro editado com sucesso!', 'Produto Editado')
          console.log(form.value)
          console.log(this.service.produto)
          console.log(form.value.idProduto)
        })
      }
    }
  }
