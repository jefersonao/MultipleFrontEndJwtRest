import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Produto} from'./Produto.model'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {

  produto : Produto;
  produtoList : Produto[];
  constructor(private http : Http) { }
    urlConfig = 'http://mylookbook.com.br/EasyApi/api/Produto/'; 
  localUrl = 'http://localhost:55547/api/Produto/';
   /* local host para rodar o API */

 
  postProduto(prod : Produto){   
  try{
  var body = JSON.stringify(prod);
      var headerOptions = new Headers({'Content-Type':'application/json'});
      console.log(prod)
      var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
      return this.http.post(this.localUrl+'Create'
      ,body,
      requestOptions).map(x => x.json());  
  }catch (error) {
        return Observable.throw(error)
      }
    
      
  }    

  putProduto(id, prod: Produto) {
    
    console.log(this.produto)
    var body = JSON.stringify(prod);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.localUrl+'Edit',
      body,
      requestOptions).map(res => res.json());
  }
  
  getProdutoList(){
    this.http.get(this.localUrl+'GetAll')
    .map((data : Response) =>{
      return data.json() as Produto[];
    }).toPromise().then(x => {
      this.produtoList = x;
    })
  }

  getProdutoById(id:number){
    this.http.get(this.localUrl+'GetById?id='+id)
    .map((data : Response) =>{
      return data.json() as Produto;
    }).toPromise().then(x => {
      this.produto = x;
    })

  }


  deleteProduto(id: number) {
    return this.http.delete(this.localUrl+'Edit'+ id).map(res => res.json());
  }
}
