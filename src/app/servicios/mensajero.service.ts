//
//
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

//
//
@Injectable({
                providedIn:     'root'
})

//
//
export class MensajeroService {

    //
    private subject = new Subject<any>();

    //                                                      // envia un mesaje atraves de subject
    enviarMensaje(msg: string) {
        this.subject.next({ text: msg });   }

    //                                                      // para enviar peticion de eliminar todos los mensajes 
    limpiarMensajes() {
        this.subject.next();    }

    //                                                      // crea un observable desde un subject
    enMensaje(): Observable<any> {
        return this.subject.asObservable();     }
}
