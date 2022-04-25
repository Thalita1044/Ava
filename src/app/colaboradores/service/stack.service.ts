import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import {Entries} from './stack.model';
import { Banner } from "./banner.model";

const token = {
    headers: new HttpHeaders({
    api_key: 'blt659f2a15e75b5d4f',
    access_token:'csc64b2762cf9c1a52b567ad51'

})}
   

@Injectable({

    providedIn: 'root'
})

export class StackService {

    constructor(private http: HttpClient) { }

    getEvent(): Observable<Entries> {
       
        return this.http.get<Entries>(`https://cdn.contentstack.io/v3/content_types/jogosvivo/entries`, token )
           
    }
    

    getBanner(): Observable<Banner> {
      
       return this.http.get<Banner>(`https://cdn.contentstack.io/v3/content_types/banner_photo/entries?environment=dev`, token ) 
           
        
    }
}