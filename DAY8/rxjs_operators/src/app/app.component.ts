import { Component } from '@angular/core';
import {
  exhaustMap,
  fromEvent,
  interval,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs_operators';
  ngOnInit() {
    // fromEvent(document, 'click')
    //   .pipe(
    //     map((event: any) => {
    //       return [event.clientX, event.clientY];
    //     })
    //   )
    //   .subscribe(console.log);

    // tap
    // fromEvent(document, 'click')
    //   .pipe(
    //     tap((event: any) => {
    //       return 'XYZ';
    //     })
    //   )
    //   .subscribe(console.log);

    // switchMap

    // fromEvent(document, 'click')
    //   .pipe(switchMap(() => interval(1000)))
    //   .subscribe(console.log);

    //exaustMap

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(exhaustMap(() => interval(1000).pipe(take(5))));
    // result.subscribe((x) => console.log(x));

    // takeUnitl

    const source = interval(1000);
    const clicks = fromEvent(document, 'click');
    const result = source.pipe(takeUntil(clicks));
    result.subscribe((x) => console.log(x));
  }
}
