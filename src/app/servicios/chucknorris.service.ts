//
//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { ICNMensaje } from './chucknorris.interface';

//
//
@Injectable({
                providedIn:     'root'
})

//
//
export class ChucknorrisService {

    //
    private chuckUrl = "https://api.chucknorris.io/jokes/random";   // nos proporciona un JSON y unos de los campos contiene el mensaje q nos interesa

    //
    constructor(private http: HttpClient) { }
  
    //                                                          // crea un observable para recupear los mensajes de Chuck Norris
    public dameMensaje(): Observable<ICNMensaje> {
        return this.http.get<ICNMensaje>(this.chuckUrl); }
}
