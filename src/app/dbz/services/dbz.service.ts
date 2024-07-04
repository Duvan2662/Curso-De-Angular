import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from "uuid";


@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name:'Krilin',
      power: 500
    },
    {
      id: uuid(),
      name:'Goku',
      power:5000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power:2000
    }
  ];


  public addCharacter = (character:Character):void =>{
    const objetoNuevo: Character = {
      id: uuid(),
      name:character.name,
      power:character.power
    }
    this.characters.push(objetoNuevo);
  }


  public deleteCharacterById = (id:string): void => {
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
