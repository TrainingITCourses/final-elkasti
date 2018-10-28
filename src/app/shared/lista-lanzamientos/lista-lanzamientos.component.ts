import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-lista-lanzamiento',
    templateUrl: './lista-lanzamientos.component.html',
    styles: []
})
export class ListaLanzamientosComponent implements OnInit {
    @Input() public launches;

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {

    }

    formatearFecha(fecha) {
        return moment(fecha).format('DD/MM/YYYY HH:mm');
    }

    go(id) {
        this.router.navigate(['/launch/' + id]);
    }
}
