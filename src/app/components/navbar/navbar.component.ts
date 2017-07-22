import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {INCREMENT, DECREMENT, RESET} from '../../functions/counter';

interface AppState {
    counter: number;
}

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    ngOnInit() { }

    reset(){
		this.store.dispatch({ type: RESET });
	}
}