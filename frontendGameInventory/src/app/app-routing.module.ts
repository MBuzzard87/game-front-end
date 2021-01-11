import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { GamelistComponent } from './gamelist/gamelist.component';

const routes: Routes = [
  {path: "", redirectTo: "view-game", pathMatch: "full"},
  {path: "view-game", component:GamelistComponent}, 
  {path: "add-game", component: AddGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
