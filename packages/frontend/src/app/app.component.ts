import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { liveQuery } from 'dexie';
import { CoreModule } from '@core/core.module';
import { Database, LockOrder } from '@core/db/database';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseOnChangeListener } from '@core/db/database-onchange-listener';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoreModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lockOrders$ = liveQuery(() => this.database.lockOrders.toArray());
  newInput = new FormControl<string>("", [Validators.required]);

  constructor(private database: Database, private dbSync: DatabaseOnChangeListener) {

  }

  add() {
    this.database.lockOrders.add({ owner: this.newInput.value! });
  }

  remove(lockOrder: LockOrder) {
    this.database.lockOrders.delete(lockOrder.id!);
  }
}
