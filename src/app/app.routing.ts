import { RouterModule } from '@angular/router';
//import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { LoginComponent } from './login/login.component';
//import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
//import { UserdetailsComponent } from './userdetails/userdetails.component';

export const AppRouting = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  //{ path: 'userdetails', component: UserdetailsComponent },
  //{ path: 'portfolio', component: PortfolioComponent },
  //{ path: '**', component: ErrorcompComponent },
]);
