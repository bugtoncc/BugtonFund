import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
