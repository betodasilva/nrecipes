import { Component } from '@angular/core';

import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition( '1 => 2', [
        style({
          height: '!'
        }),
        query(':enter', style({ transform: 'translateY(50%)', zIndex: '2', opacity: '1' })),
        query(':enter, :leave', style({ position: 'absolute', top: '0', right: '0', left: '0', bottom: '0' })),
        group([
          query(':enter', [ animate('620ms cubic-bezier(0.870, 0.000, 0.560, 0.990)', style({transform: 'translateY(0%)', background: '#fff'}))]),
          //query(':leave', [ animate('420ms cubic-bezier(0.870, 0.000, 0.560, 0.990)', style({transform: 'translateY(100%)'}))]),
          query(':leave', [ animate('880ms ease-in', style({ opacity: '0'}))]),
        ])
      ] ),
      transition( '2 => 1', [
        style({
          height: '!'
        }),
        query(':enter', style({ transform: 'translateY(0)', opacity: '0' })),
        query(':enter, :leave', style({ position: 'absolute', top: '0', right: '0', left: '0', bottom: '0' })),
        group([
          query(':leave', [ animate('620ms cubic-bezier(0.870, 0.000, 0.560, 0.990)', style({transform: 'translateY(100%)'}))]),
          //query(':enter', [ animate('620ms cubic-bezier(0.870, 0.000, 0.560, 0.990)', style({transform: 'translateY(0)'}))]),
          query(':enter', [ animate('880ms ease-in', style({opacity: '1'}))]),
        ])
      ] )
    ])
  ]
})
export class AppComponent {
  title = 'nrecipes';
  recipes: any;
  constructor(private activatedRoute: ActivatedRoute){}

  getDepth( outlet ){
    return outlet.activatedRouteData['depth'];
  }
}
