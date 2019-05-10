import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatTableModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatPaginatorModule
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatTableModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatPaginatorModule
	],
	exports: [
		MatButtonModule,
		MatTableModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatPaginatorModule
	]
})
export class MaterialModule {}
