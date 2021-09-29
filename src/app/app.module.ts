import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroBarComponent } from './hero-bar/hero-bar.component';
import { ChampionComponent } from './champion/champion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBarComponent,
    ChampionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
