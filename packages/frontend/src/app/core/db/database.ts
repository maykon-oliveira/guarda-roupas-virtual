import Dexie, { Table } from 'dexie';
import 'dexie-observable';
import 'dexie-syncable';
import './sync-protocol';

export interface LockOrder {
    id?: number;
    owner: string;
}

export class Database extends Dexie {
    lockOrders!: Table<LockOrder, number>;

    constructor() {
        super('grv-db');
        this.version(1).stores({
            lockOrders: '++id, owner',
        });
        this.on('populate', () => this.populate());
        this.on('ready', () => this.connect());
    }

    private async populate() {
        await db.lockOrders.add({
            id: 1,
            owner: 'c0660005'
        });
    }

    private async connect() {
        db.syncable.connect('backend-protocol', 'http://localhost:8081/api/v2/m/');
        db.syncable.on('statusChanged', function (newStatus, url) {
            console.log(`Sync Status changed:  ${Dexie.Syncable.StatusTexts[newStatus]} - URL: ${url}`);
        });
    }
}

export const db = new Database();