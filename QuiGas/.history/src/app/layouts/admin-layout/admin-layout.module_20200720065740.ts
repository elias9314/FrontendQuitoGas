import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import {ClienteComponent} from '../../cliente/cliente.component';
import {GasComponent} from '../../gas/gas.component';
import {PedidoComponent} from '../../pedido/pedido.component';
import {SucursalComponent} from '../../sucursal/sucursal.component';
import {ServiceService} from '../../services/service.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    HttpClientModule
  ],
  declarations: [
    ClienteComponent,
    GasComponent,
    PedidoComponent,
    SucursalComponent,
  ],
  providers : [
    ServiceService
  ]
})

export class AdminLayoutModule {}
