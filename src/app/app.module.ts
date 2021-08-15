import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserData } from './shared/userdata.service';
import { DeptData } from './shared/department.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Summary } from './summary.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterComponent } from './register/register.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppRouting } from './app.routing';
import { ErrorcompComponent } from './errorcomp/errorcomp.component';
import { ChildRouting } from './child.routing';
import { RoutingGuard } from './guarddemo.service';
import { TestdemoComponent } from './testdemo/testdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainappComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveformComponent,
    Summary,
    LoginComponent,
    RegistrationComponent,
    RegisterComponent,
    UserdetailsComponent,
    PortfolioComponent,
    LandingpageComponent,
    ErrorcompComponent,
    TestdemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    ChildRouting,
  ],
  providers: [UserData, DeptData, RoutingGuard],
  //bootstrap: [AppComponent],
  bootstrap: [LandingpageComponent],
})
export class AppModule {}
