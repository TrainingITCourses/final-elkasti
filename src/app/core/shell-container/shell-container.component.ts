import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadLaunchs } from '../store/launch/launch.actions';
import { GlobalState } from '../store';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.css']
})
export class ShellContainerComponent implements OnInit {
  @Input() public titulo;

  numeroLanzamientos: number;

  constructor(
    private store: Store<GlobalState>,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.store.dispatch(new LoadLaunchs());

  }

}
