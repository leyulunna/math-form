import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Subject } from 'rxjs';
import { filter, tap, take, scan } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new Subject();
    const click$ = fromEvent(document, 'click');
    const sub = click$.pipe(
      filter((d:any) => d.clientX < 1000),
      take(10),
      tap((x: any) => x.clientX > 1000 ? sub1$.unsubscribe : null)
    ).subscribe(subject);

    const sub1$ = subject.subscribe((x:any)=>{console.log(x.clientX)});

    interval(1000).pipe(
      scan((acc, value) => acc + value , 0)
    )
  }

}
