import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ClienteService } from '../shared/cliente.service'
import { ToastrService } from 'ngx-toastr'
import {ClienteSearchComponent} from '../cliente-search/cliente-search.component'
import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ClienteService, ToastrService]
})

export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }


  resetForm(form?: NgForm) {
    if (form != null) 
      form.reset()
    this.clienteService.selectedCliente = {
      idCliente: null,
        nome: '',
        razao: '',
        fantasia:'',
        emailSintegra:'', 
        documento: '', 
         tipoCadastro: null,
         telefone: null,
         celular:null,
         email:null,
         youtube:'',
         instagram:'', 
         twitter:'', 
         email2:'',
         observacao: '',
         ativo: false,
         idEndereco:null,
         site:'',
         dtAtualizacao : null,
         idCadastroAntigo: null,
         idMarca: null,
         marca:'',
         emailIntegra:'',
         suframa: null,
         idPlanoConta: null,
         incEstadual : null,
         limiteCredito: null,
         avencer: false,
         vencido: false,
         totalVenda: null,
         creditoDisponivel:null,
         idTipoEmpresa: null,
         riscoDebito: false,
         risco: false,
         cnae :null, 
         cnae2 : null,
         tpEmpresaCliente :null, 
         consumidorFinal:false,
         tipoCliente: '',
         tributacao: null,
    
         pessoa1: null,
    
         pessoa2: null,
     
         pessoa3: null,

         /* foto */

         idFile: null,
         fotoCliente: null, 
        /*  idEndereco: null, */
         logradouro: '',
         tipo: null,
         numero: null,
         cep: null,
         estado: '',
         cidade: '',
         bairro: '',
         cMun: null,
         complemento:'', 
         latitude: '',
         longitude: '',
         idpessoacerta1: 20,
         idpessoacerta2: 20,
         idpessoacerta3: 20,
        /*  Marca  
          idMarca: null,*/
          nomeMarca: '',
          grupoMarca: null,

          /* Pessoa1  */

                
                
                nome1: '',
                cpf1: null,
                telefone1: null,
                email1: '',
                emailx1: '',
                celular1: null,
                aniversario1: null,
                instagram1: '',
                facebook1: '',
                twitter1: '',
                likedin1: '',
                logradouro1: '',
                numero1:null, 
                cep1: null,
                estado1: '',
                cidade1: '',
                bairro1: '',
                complemento1:'',

                
            
              nome2: '',
              cpf2: null,
              telefone2: null,
              /* email2: '', */
              emailx2: '',
              celular2: null,
              aniversario2: null,
              instagram2: '',
              facebook2: '',
              twitter2: '',
              likedin2: '',
              logradouro2: '',
              numero2:null, 
              cep2: null,
              estado2: '',
              cidade2: '',
              bairro2: '',
              complemento2:'', 

           
              nome3: '',
              cpf3: null,
              telefone3: null,
              email3: '',
              emailx3: '',
              celular3: null,
              aniversario3: null,
              instagram3: '',
              facebook3: '',
              twitter3: '',
              likedin3: '',
              logradouro3: '',
              numero3:null, 
              cep3: null,
              estado3: '',
              cidade3: '',
              bairro3: '',
              complemento3:'',
              
         
                descricao: '',
               /*  tipo: '', */
                extensao:'', 
                tamanho: null,
                dataDoArquivo: null,
                urlS3: '',
                entidade: '',
                idEntidade: null,
                keyS3: '',
                internalImage: '',
    }
     this.clienteService.selectedCliente = {
      idCliente: null,
      nome: '',
      razao: '',
      fantasia: '',
      emailSintegra: '',
      documento: '',
      tipoCadastro: null,
      telefone: null,
      celular: null,
      email: null,
      youtube: '',
      instagram: '',
      twitter: '',
      email2: '',
      observacao: '',
      ativo: false,
      idEndereco: null,
      site: '',
      dtAtualizacao: null,
      idCadastroAntigo: null,
      idMarca: null,
      marca: '',
      emailIntegra: '',
      suframa: null,
      idPlanoConta: null,
      incEstadual: null,
      limiteCredito: null,
      avencer: false,
      vencido: false,
      totalVenda: null,
      creditoDisponivel: null,
      idTipoEmpresa: null,
      riscoDebito: false,
      risco: false,
      cnae: null,
      cnae2: null,
      tpEmpresaCliente: null,
      consumidorFinal: false,
      tipoCliente: '',
      tributacao: null,
      pessoa1: null,
      pessoa2: null,
      pessoa3: null,
      /* foto */
      idFile: null,
      fotoCliente: null,
      /*  idEndereco: null, */
      logradouro: '',
      tipo: null,
      numero: null,
      cep: null,
      estado: '',
      cidade: '',
      bairro: '',
      cMun: null,
      complemento: '',
      latitude: '',
      longitude: '',
      idpessoacerta1: 20,
      idpessoacerta2: 20,
      idpessoacerta3: 20,
      /*  Marca
        idMarca: null,*/
      nomeMarca: '',
      grupoMarca: null,
      /* Pessoa1  */
      nome1: '',
      cpf1: null,
      telefone1: null,
      email1: '',
      emailx1: '',
      celular1: null,
      aniversario1: null,
      instagram1: '',
      facebook1: '',
      twitter1: '',
      likedin1: '',
      logradouro1: '',
      numero1: null,
      cep1: null,
      estado1: '',
      cidade1: '',
      bairro1: '',
      complemento1: '',
      nome2: '',
      cpf2: null,
      telefone2: null,
      /* email2: '', */
      emailx2: '',
      celular2: null,
      aniversario2: null,
      instagram2: '',
      facebook2: '',
      twitter2: '',
      likedin2: '',
      logradouro2: '',
      numero2: null,
      cep2: null,
      estado2: '',
      cidade2: '',
      bairro2: '',
      complemento2: '',
      nome3: '',
      cpf3: null,
      telefone3: null,
      email3: '',
      emailx3: '',
      celular3: null,
      aniversario3: null,
      instagram3: '',
      facebook3: '',
      twitter3: '',
      likedin3: '',
      logradouro3: '',
      numero3: null,
      cep3: null,
      estado3: '',
      cidade3: '',
      bairro3: '',
      complemento3: '',
      descricao: '',
      /*  tipo: '', */
      extensao: '',
      tamanho: null,
      dataDoArquivo: null,
      urlS3: '',
      entidade: '',
      idEntidade: null,
      keyS3: '',
      internalImage: '',
    };
  
  }
 

  onClick(id:number){
    this.clienteService.getClienteById(id)
    this.toastr.info('Novo registro consultado!', 'Cliente consultado')
/*     console.log(this.clienteService.selectedCliente)  */
    console.log(this.clienteService.selectedCliente)
  }


  onSubmit(form: NgForm) {
    if (form.value.idCliente == null) {
      this.clienteService.postCliente(form.value)
        .subscribe(data => {
          this.resetForm(form)
          this.clienteService.getClienteList()
          this.toastr.success('Novo registro gravado com sucesso!', 'Cliente Registrado')
          console.log(form.value)
        })
        
    }
    
    
    
    else {
      this.clienteService.putCliente(form.value.idCliente, form.value)
      .subscribe(data => {
        this.resetForm(form)
        this.clienteService.getClienteList()
        this.toastr.info('Novo registro editado com sucesso!', 'Cliente Editado')
        console.log(form.value)
      })
    }
  }
}
  

