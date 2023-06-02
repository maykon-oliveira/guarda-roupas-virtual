import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Database, db } from './db/database';
import { DatabaseOnChangeListener } from './db/database-onchange-listener';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DatabaseOnChangeListener,
    { provide: Database, useFactory: () => db }
  ]
})
export class CoreModule { }
