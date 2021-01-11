import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";
import { GameService } from '../game.service';  
import { Game } from '../game';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})


export class GamelistComponent implements OnInit {


  constructor(private gameservice: GameService) { }


  games: Observable<Game[]>;
  game: Game = new Game();
  gamelist: any;

  ngOnInit(): void {
    this.gameservice.getGameList().subscribe(data => {
      this.games = data;
    })
  }

}


