import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KosmoService } from '../cosmo/kosmo.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.css' ]
})
export class EditComponent implements OnInit {
	editMode = false;
	myForm: FormGroup;

	constructor(
		private kosmoService: KosmoService,
		private dialog: MatDialog,
		@Inject(MAT_DIALOG_DATA) private cosmoData
	) {}

	ngOnInit() {
		if (this.cosmoData) {
			this.editMode = true;
		}
		this.initializeForm();
	}

	initializeForm() {
		if (this.editMode === false) {
			this.myForm = new FormGroup({
				jmeno: new FormControl(null, Validators.required),
				prijmeni: new FormControl(null, Validators.required),
				datumNarozeni: new FormControl(null, Validators.required),
				superschopnost: new FormControl(null, Validators.required)
			});
		} else {
			this.myForm = new FormGroup({
				jmeno: new FormControl(this.cosmoData.jmeno, Validators.required),
				prijmeni: new FormControl(this.cosmoData.prijmeni, Validators.required),
				datumNarozeni: new FormControl(this.formatDate(this.cosmoData.datumNarozeni), Validators.required),
				superschopnost: new FormControl(this.cosmoData.superschopnost, Validators.required)
			});
		}
	}

	formatDate(timestamp) {
		const date = new Date(timestamp.seconds);
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDay();
		return new Date(month, day, year);
	}

	onSubmit() {
		if (!this.editMode) {
			this.kosmoService.addKosmo(this.myForm.value);
		} else {
			this.kosmoService.updateKosmo(this.cosmoData.id, this.myForm.value);
		}

		this.dialog.closeAll();
	}
}
