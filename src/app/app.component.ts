import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-top-bar></app-top-bar>

        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [
        'p { font-family: Lato;}'
    ]
})
export class AppComponent {
    title = 'simple-layout';
}
