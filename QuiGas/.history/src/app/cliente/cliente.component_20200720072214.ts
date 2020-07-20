import { Component, OnInit } from '@angular/core';
import { Usuario} from '../models/usuario';
import { ServiceService} from '../services/service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  usuarios: Array<Usuario>;
  usuarioSeleccionado: Usuario;
  usuario: Usuario;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
 getUsuarios(){
 this.service.get('/users').subscribe(
   res => console.log(res),
   err => console.error(err)
 );
 }
}
