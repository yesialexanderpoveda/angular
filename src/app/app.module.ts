import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PoetryComponent } from './poetry/poetry.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RemoveComponent } from './remove/remove.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PoetryComponent,
    CreateComponent,
    UpdateComponent,
    RemoveComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
