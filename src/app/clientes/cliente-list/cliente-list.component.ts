import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/cliente.service'
import { Cliente } from '../shared/cliente.model';
import { ToastrService } from 'ngx-toastr';  
import {ClienteComponent} from '../cliente/cliente.component'

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
  providers:[ClienteService,ToastrService,ClienteComponent]
})

export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService,private toastr : ToastrService, 
    private clienteComponent : ClienteComponent) { }

  ngOnInit() {
    this.clienteService.getClienteList();
  }

  editSubmit(emp : Cliente ){
      this.clienteService.putCliente(emp.idCliente, emp)
      .subscribe(data => {
        this.clienteComponent.resetForm()
        this.clienteService.getClienteList()
        this.toastr.info('Edição realizada com sucesso!!', 'Cliente Registrado')     
      })
    }

  showForEdit(emp: Cliente) {
    this.clienteService.selectedCliente = Object.assign({}, emp);
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.clienteService.deleteCliente(id)
      .subscribe(x => {
        this.clienteService.getClienteList();
        this.toastr.warning("Registro deletado com sucesso!!","Cliente Deletado");
        
      })
    }
  }
}
