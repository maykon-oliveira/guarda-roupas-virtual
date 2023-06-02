import Dexie from 'dexie';
import 'dexie-syncable';

/**
 * A custom ISyncProtocol server implementation
 * 
 * @link https://dexie.org/docs/Syncable/Dexie.Syncable.js
 */
Dexie.Syncable.registerSyncProtocol("backend-protocol", {
    sync(context, url, options, baseRevision, syncedRevision, changes, partial, applyRemoteChanges, onChangesAccepted, onSuccess, onError) {
        console.log(context);
    },
})