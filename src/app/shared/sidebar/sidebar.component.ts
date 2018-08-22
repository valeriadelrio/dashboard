import { SidebarService, UsuarioService } from '../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario: Usuario;
  constructor(
    public _usuarioServices: UsuarioService,
    public _sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.usuario = this._usuarioServices.usuario;
  }
}
