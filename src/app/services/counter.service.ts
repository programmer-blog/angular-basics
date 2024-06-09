import { Injectable, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
// private count = 0;
private count = signal(0);

//read only computed signal
doubleCount: Signal<number> = computed(() => this.count() * 2)
getCounter() {
  return this.count();
}

incrementCounter() {
  // this.count.set(this.count() + 1)
  // this.count = this.count + 1
  this.count.update((oldValue) => {
    return oldValue + 1
  })

}

  constructor() { 
    effect(() => {
// console.log("count: ", this.count(), " Double count ", this.doubleCount());

    })

  }
}
