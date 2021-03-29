import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddPartieComponent } from './components/add-partie/add-partie.component';
import { ListPartieComponent } from './components/list-partie/list-partie.component';
import { ErrorComponent } from './components/error/error.component';
import { PartiesComponent } from './components/parties/parties.component';
import { VoterComponent } from './components/voter/voter.component';
import { ResultatsComponent } from './components/resultats/resultats.component';
import { PartieComponent } from './components/partie/partie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddPartieComponent,
    ListPartieComponent,
    ErrorComponent,
    PartiesComponent,
    VoterComponent,
    ResultatsComponent,
    PartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
