import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModelsModule} from "../../models/models.module";
import {FormsModule} from "@angular/forms";
import {StoreComponent} from "./store.component";



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    ModelsModule,
    FormsModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
