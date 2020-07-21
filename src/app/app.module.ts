import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ClienteService } from './clientes/shared/cliente.service';
import { ClienteSearchComponent } from './clientes/cliente-search/cliente-search.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './shared/produto.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ClienteListComponent,
    ClienteSearchComponent,
    ProdutoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ClienteService,ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
