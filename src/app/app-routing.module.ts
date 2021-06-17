//
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HogarComponent } from './hogar/hogar.component';

//
//
const routes: Routes = [
                            {   path: '',       component: HogarComponent },
                            {   path: '**',     redirectTo: ''              }
                        ];
@NgModule({
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
})

//
//
export class AppRoutingModule { }
