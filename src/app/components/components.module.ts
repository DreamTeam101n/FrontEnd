import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports:[
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
