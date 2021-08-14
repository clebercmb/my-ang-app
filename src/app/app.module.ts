import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserData } from './shared/userdata.service';
import { DeptData } from './shared/department.service';
import { FormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {} from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    MainappComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveformComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveformComponent],
  providers: [UserData, DeptData],
  bootstrap: [AppComponent],
})
export class AppModule {}
