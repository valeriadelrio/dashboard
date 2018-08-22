import { SidebarService, UsuarioService } from '../../services/service.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  constructor(
    public _usuarioServices: UsuarioService,
    public _sidebarService: SidebarService
  ) {}

  ngOnInit() {}
}
