import { Component, OnInit, ViewChild } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { KosmoService } from './kosmo.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-cosmo',
	templateUrl: './cosmo.component.html',
	styleUrls: [ './cosmo.component.css' ]
})
export class CosmoComponent implements OnInit {
	displayedColumns = [ 'jmeno', 'prijmeni', 'datumNarozeni', 'superschopnost', 'edit', 'delete' ];
	subscription: Subscription;
	dataSource = new MatTableDataSource<any>();
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private dialog: MatDialog, private kosmoService: KosmoService) {}

	ngOnInit() {
		this.subscription = this.kosmoService.fetchKosmo().subscribe(kosmonauti => {
			this.dataSource.data = kosmonauti;
		});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	onEdit(element) {
		this.dialog.open(EditComponent, { data: element });
	}

	onAdd() {
		this.dialog.open(EditComponent);
	}

	onDelete(id) {
		this.kosmoService.deleteKosmo(id);
	}

	filter(value: string) {
		this.dataSource.filter = value.trim().toLowerCase();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
