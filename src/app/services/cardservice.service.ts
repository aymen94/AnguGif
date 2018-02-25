import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class cardService {
    private key:string="trXimIU7l5zYo4Dqh4fvhZU2C296wLKf";
    private keyword:string="";
    private limit:number=30;
    private url:string="";

    constructor(private http:Http) { }

   public  loadData(txt:string):Observable<any>{
        this.keyword=txt;
        return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${this.keyword}&api_key=${this.key}&limit=${this.limit}`).map((res:Response) => res.json().data);
    }
}