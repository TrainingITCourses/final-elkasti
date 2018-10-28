import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/core/store';
import { Cargar } from 'src/app/core/store/estado/estado.actions';

@Component({
    selector: 'app-estados',
    templateUrl: './estados.component.html',
    styles: []
})
export class EstadosComponent implements OnInit {

    public estados$ = this.store.select(s => s.estado.estados);

    constructor(
        private store: Store<GlobalState>,
    ) { }

    ngOnInit() {
        this.store.dispatch(new Cargar());
    }

}
