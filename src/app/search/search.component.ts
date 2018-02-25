import { Component,Input } from '@angular/core';
import { CardComponent } from './../card/card.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public card:CardComponent;
  constructor() { }
  
  setSearch(txt:string){
    console.log(txt);
    this.card.getData(txt);
  }
  
}
