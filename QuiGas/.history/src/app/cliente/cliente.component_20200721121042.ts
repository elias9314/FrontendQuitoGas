import { Component, OnInit } from '@angular/core';
import { Usuario} from '../models/usuario';
import { ServiceService} from '../services/service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  usuarios: any = [];
  usuarioSeleccionado: Usuario;
  usuario: Usuario;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.usuarioSeleccionado = new Usuario();
  }
 getUsuarios() {
 this.service.get('/users').subscribe(
   response => {
    this.usuarios = response['usuarios'];
    console.log(this.usuarios);
   },
   err => console.error(err)
 );
 }
 postUsuario() {
  console.log(this.usuarioSeleccionado);
}
 }
 saveUsuario() {
 // console.log(this.usuarioSeleccionado);
}

}
