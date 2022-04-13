import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WolfPickerComponent } from './wolf-picker.component';



@NgModule({
  declarations: [
    WolfPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    WolfPickerComponent
  ]
})
export class WolfPickerModule { }
