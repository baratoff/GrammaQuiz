import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NavibarComponent } from "./Navibar/component"
import { AppComponent }  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NavibarComponent
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule { }
