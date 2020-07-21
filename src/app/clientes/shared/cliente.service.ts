import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Cliente} from'./Cliente.model'
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClienteService {

  selectedCliente : Cliente;
  constructor(private http : Http) { }
   urlConfig = 'http://mylookbook.com.br/EasyApi/api/Cliente/';
  /* ulrPost = 'http://mylookbook.com.br/EasyApi/api/Cliente/GetById';  */
  localUrl = 'http://localhost:55547/api/Cliente/';
   /* local host para rodar o API */

 
  postCliente(emp : Cliente){   
    try {var body = JSON.stringify(emp);
      var headerOptions = new Headers({'Content-Type':'application/json'});
      console.log(emp)
      var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
      return this.http.post(this.localUrl+'Create'
      ,body,
      requestOptions).map(x => x.json());
      
    } catch (error) {
      return Observable.throw(error)
    }
 
      
  }   

  putCliente(id, emp: Cliente) {
    var body = JSON.stringify(emp);
    console.log(this.selectedCliente);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.localUrl+'Edit',
      body,
      requestOptions)
      .map(res => res.json());
  }
  
  getClienteList(){
    this.http.get(this.localUrl+'GetAll')
    .map((data : Response) =>{
      return data.json() as Cliente;
    }).toPromise().then(x => {
      this.selectedCliente = x;
    })
  }

  getClienteById(id:number){
    console.log(this.selectedCliente)
    this.http.get(this.localUrl+'GetById?id='+id)
    .map((data : Response) =>{
      console.log(this.selectedCliente.idCliente);
      return data.json() as Cliente;
    }).toPromise().then(x => {
      this.selectedCliente = x;
    })
    /* console.log(this.selectedCliente) */
  }

  /* ClienteById(id: string): Observable<Cliente> {
    return this.http.get(this.localUrl+'GetById?id='+id)
    .map(response =>  response.json().restaurants)

  } */

  deleteCliente(id: number) {
    return this.http.delete(this.localUrl+'Edit'+ id).map(res => res.json());
  }
}
