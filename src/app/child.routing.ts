import { RouterModule } from '@angular/router';
import { RoutingGuard } from './guarddemo.service';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

export const ChildRouting = RouterModule.forChild([
  {
    path: 'userdetails',
    component: UserdetailsComponent,
    canActivate: [RoutingGuard],
  },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: ErrorcompComponent },
]);
