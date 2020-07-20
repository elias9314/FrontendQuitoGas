import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {ClienteComponent} from '../../cliente/cliente.component';
import {GasComponent} from '../../gas/gas.component';
import {PedidoComponent} from '../../pedido/pedido.component';
import {SucursalComponent} from '../../sucursal/sucursal.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'cliente',        component: ClienteComponent },
    { path: 'gas',        component: GasComponent },
    { path: 'pedido',        component: PedidoComponent },
    { path: 'sucursal',        component: SucursalComponent },
];
