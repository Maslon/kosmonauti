import { Component, OnInit } from '@angular/core';
import { KosmoService } from './cosmo/kosmo.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	constructor(private kosmoService: KosmoService) {}

	ngOnInit() {
		this.kosmoService.fetchKosmo();
	}
}
