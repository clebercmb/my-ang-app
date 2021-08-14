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

@NgModule({
  declarations: [
    AppComponent,
    MainappComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveformComponent,
    Summary,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [UserData, DeptData],
  bootstrap: [AppComponent],
})
export class AppModule {}
