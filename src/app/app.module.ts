import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { EditComponent } from './edit/edit.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CosmoComponent } from './cosmo/cosmo.component';

@NgModule({
	declarations: [ AppComponent, EditComponent, CosmoComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFirestoreModule,
		AngularFireModule.initializeApp(environment.firebaseConfig)
	],
	providers: [],
	bootstrap: [ AppComponent ],
	entryComponents: [ EditComponent ]
})
export class AppModule {}
