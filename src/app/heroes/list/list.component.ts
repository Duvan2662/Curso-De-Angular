import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroeNames: string[] = ['Spiderman', 'Hulk', 'Flash', 'Batman', 'Thor'];
  public deletHeroe? : string;

  public removeLastHeroe = ():void => {
    this.deletHeroe = this.heroeNames.pop();
  }

}
