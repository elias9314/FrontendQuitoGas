import { Routes } from '@angular/router';


import {ClienteComponent} from '../../cliente/cliente.component';
import {GasComponent} from '../../gas/gas.component';
import {PedidoComponent} from '../../pedido/pedido.component';
import {SucursalComponent} from '../../sucursal/sucursal.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'cliente',        component: ClienteComponent },
    { path: 'gas',        component: GasComponent },
    { path: 'pedido',        component: PedidoComponent },
    { path: 'sucursal',        component: SucursalComponent },
];
