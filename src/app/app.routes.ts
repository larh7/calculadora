import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FactorialComponent } from './factorial/factorial.component';
import { DetalleComponent } from './detalle/detalle.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: MenuComponent,
    children:[
        { path: 'calculadora', component: CalculadoraComponent},
        { path: 'factorial', component: FactorialComponent},
        { path: 'historial', component: DetalleComponent},
       { path: '**', pathMatch: 'full', redirectTo: 'home'}
    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);