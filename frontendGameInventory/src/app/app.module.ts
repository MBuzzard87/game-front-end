import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GamelistComponent } from './gamelist/gamelist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGameComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
