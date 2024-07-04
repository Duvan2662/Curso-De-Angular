import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService){

  }


  public get characters() : Character[] {
    return this.dbzService.characters;
  }


  public onDeleteCharacter = (id: string): void => {
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter = (character: Character): void => {
    this.dbzService.addCharacter(character);
  }


}
