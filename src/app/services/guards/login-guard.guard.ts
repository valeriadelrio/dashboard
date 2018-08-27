import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private _usuarioService: UsuarioService, public router: Router) {}

  canActivate() {
    if (this._usuarioService.isLogged()) {
      return true;
    } else {
      console.log('bloquedao por guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
