//
//
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MensajeroService } from '../servicios/mensajero.service';
import { ChucknorrisService } from '../servicios/chucknorris.service';
import { ICNMensaje } from '../servicios/chucknorris.interface';

//
//
@Component({
                selector:       'app-hogar',
                templateUrl:    './hogar.component.html',
                styleUrls:      ['./hogar.component.css']
            })

//
//
export class HogarComponent implements OnInit {

    //
    fg!: FormGroup;                                             // formulario

    public icnMensaje!: ICNMensaje;                             // interface/estructura de un mensaje de Chuck Norris
    public mensaje_de_chuck: string = '';                       // solo contiene el ICMMensaje.value ... que es exactamente la frase de Chuck Norris

    //
    constructor(private servicioMensajeria: MensajeroService,
                private servicioChuckNorris: ChucknorrisService,
                private fb: FormBuilder,) { }

    //
    ngOnInit(): void {                                          // creamos el formulario y sus campos
        this.fg = this.fb.group({
            ctMensaje: []                                           // es el nombre del cuadro de texto del mensaje, manual o de Chuck Norris       
        })                                                          // o lo rellenamos nosotros o le pedimos a Chuck Norris que lo rellene por nosotros
    }

    //                                                          // envia un mensaje a los suscritores via observable subject
    btnEnviarMensaje(): void {
        var msg = this.fg.controls.ctMensaje.value;

        if (msg) {                                              // si hay contenido, no esta vacío, lo agrega a la colección de aMensajes
            this.servicioMensajeria.enviarMensaje(msg);             // agrega msg y 
            this.fg.controls.ctMensaje.setValue('')                 // limpia el contrl de texto para el siguiente
        }
    }

    //
    btnLimpiarMensajes(): void {                                // vaciar el deposito de mensajes
        this.servicioMensajeria.limpiarMensajes();  }   

    //                                                          // solicitamos un msg a Chuck Norris
    btnChuck_dame_un_mensaje(): void {
        this.servicioChuckNorris.dameMensaje().subscribe(icnMensaje => (this.mensaje_de_chuck = icnMensaje.value));
        this.fg.controls.ctMensaje.setValue(this.mensaje_de_chuck);      // el mensaje de Chuck Norris lo colocamos en el cuadro de texto
    }
}