import { retry, map, filter } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('subs', numero),
      error => console.error('error en el subs', error),
      () => console.log('El observador terminó')
    );
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        };
        observer.next(salida);
      }, 1000);
    })
    .pipe(
      map( response => response.valor),
      filter( (valor) => { // impar
         return valor = (valor % 2 === 1) ? valor : 0;
      })
      // filter( (valor) => { //par
      //   return valor = (valor % 2 === 0) ? valor : 0;
      // })
    );

  }

}
