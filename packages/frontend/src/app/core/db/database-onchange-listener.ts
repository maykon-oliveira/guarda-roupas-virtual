import { Injectable } from '@angular/core';
import { Database } from './database';
import { IDatabaseChange } from 'dexie-observable/api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOnChangeListener {

  constructor(private database: Database) {
    database.on("changes", this.onChange)
  }

  private onChange(changes: IDatabaseChange[], partial: boolean) {
    console.log(changes);
    console.log(partial);
  }
}
