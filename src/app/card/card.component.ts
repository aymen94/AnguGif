import { Component } from '@angular/core';
import { cardService } from './../services/cardservice.service';
@Component({
  selector: 'app-card',
  providers:[cardService],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent{
  public gifData;
  constructor(public card:cardService) {
   }

 public getData(txt:string){
   this.gifData=this.card.loadData(txt);
  }

}
