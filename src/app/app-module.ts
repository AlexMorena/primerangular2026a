import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
import { Prueba } from './components/prueba/prueba';
import { PruebaComponent } from './components/prueba-component/prueba-component';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';
import { TablaMultiplicarReferenceComponent } from '../components/tabla-multiplicar-reference-component/tabla-multiplicar-reference-component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    Prueba,
    PruebaComponent,
    TablaMultiplicarComponent,
    TablaMultiplicarReferenceComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
