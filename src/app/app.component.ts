import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, style, transition, trigger} from "@angular/animations";
import {NavigationEnd, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          position: 'absolute'
        }),
        animate('0.5s ease-in-out')
      ]),
      transition('* => *', [
        query(':leave', style({ transform: 'translateX(0)', position: 'absolute'}), { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)', position: 'absolute'}), { optional: true }),

        group([
          query(':leave', animate('.5s ease-in-out', style({transform: 'translateX(-100%)'})), { optional: true }),
          query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  // router跳转动画所需参数
  routerState: boolean = true;
  routerStateCode: string = 'active';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 每次路由跳转改变状态
        this.routerState = !this.routerState;
        this.routerStateCode = this.routerState ? 'active' : 'inactive';
      }
    })
  }
}
