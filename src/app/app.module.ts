import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MyServiceService} from './my-service.service';

import { AppComponent } from './app.component';
import { MylinkComponent } from './mylink/mylink.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MylinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule 
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
