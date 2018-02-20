import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SanJoseComponent } from './san-jose/san-jose.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { SeattleComponent } from './seattle/seattle.component';



@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
