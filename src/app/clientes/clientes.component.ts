import { Component, OnInit } from '@angular/core';

import {ClienteService} from '../../app/clientes/shared/cliente.service'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers:[ClienteService]
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService : ClienteService) { 

    

  }

  ngOnInit() {
  }

}
