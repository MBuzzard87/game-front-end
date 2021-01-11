import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { GameService } from '../game.service';
import { Game } from '../game';  
import { GamelistComponent } from '../gamelist/gamelist.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(private gameservice: GameService) { }

  game: Game = new Game();
  submitted = false;

  ngOnInit(): void {
    this.submitted = false;
  }


  gamesaveform = new FormGroup({
    title:new FormControl(),
    console:new FormControl(),
    year: new FormControl(),
    developer: new FormControl(),
    price: new FormControl(),
    stock: new FormControl()
  });


  saveGame(saveGame) {
    this.game=new Game();
    this.game.title=this.GameTitle.value;
    this.game.console=this.GameConsole.value;
    this.game.year=this.GameYear.value;
    this.game.developer=this.GameDeveloper.value;
    this.game.price=this.GamePrice.value;
    this.game.stock=this.GameStock.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.gameservice.createGame(this.game)
    .subscribe(data => console.log(data), error => console.log(error));
    this.game = new Game();
    
  }


  
  get GameTitle() {
    return this.gamesaveform.get("title");
  }

  get GameConsole() {
    return this.gamesaveform.get("console");
  }

  get GameYear() {
    return this.gamesaveform.get("year");
  }

  get GameDeveloper() {
    return this.gamesaveform.get("developer");
  }

  get GamePrice() {
    return this.gamesaveform.get("price");
  }

  get GameStock() {
    return this.gamesaveform.get("stock");
  }


  addGameForm() {
    this.submitted = false;
    this.gamesaveform.reset();
  }



}
