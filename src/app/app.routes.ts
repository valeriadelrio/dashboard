import { RouterModule, Routes } from '@angular/router';

// Component
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';

const ROUTES: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NopagefoundComponent}
]

export const APP_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true})
