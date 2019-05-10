import { Injectable } from '@angular/core';
import { Kosmonaut } from './kosmounaut.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class KosmoService {
	constructor(private db: AngularFirestore) {}

	private addToDatabase(kosmonaut) {
		this.db.collection('kosmonauti').add(kosmonaut);
	}

	addKosmo(kosmonaut: Kosmonaut) {
		this.addToDatabase(kosmonaut);
		this.fetchKosmo();
	}

	fetchKosmo() {
		return this.db.collection('kosmonauti').snapshotChanges().pipe(
			map(documentData => {
				return documentData.map(doc => {
					console.log(doc);
					return {
						id: doc.payload.doc.id,
						...doc.payload.doc.data()
					};
				});
			})
		);
	}

	updateKosmo(id, data) {
		this.db.collection('kosmonauti').doc(id).update({
			...data
		});
	}

	deleteKosmo(id) {
		this.db.collection('kosmonauti').doc(id).delete();
	}
}
