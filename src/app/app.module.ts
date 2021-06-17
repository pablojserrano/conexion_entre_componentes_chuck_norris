//
//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HogarComponent } from './hogar/hogar.component';
import { MensajeroService } from './servicios/mensajero.service';
import { ChucknorrisService } from './servicios/chucknorris.service';


//
//
@NgModule({
                declarations:   [   AppComponent, HogarComponent
                                ],
                imports:        [   BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
                                ],
                providers:      [   MensajeroService, ChucknorrisService
                                ],
                bootstrap:      [   AppComponent
                                ]
})

//
//
export class AppModule { }
