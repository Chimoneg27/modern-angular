import { Component, computed, signal, Signal } from '@angular/core';
// this is where we define behavior
@Component({
  selector: 'app-hello', // basically a tag
  imports: [],
  templateUrl: './hello.html', // reference to html file
  styleUrl: './hello.css',
})
export class Hello {
  protected title: string = 'Welcome to Modern Angular!';

  protected doubleCount = computed(() => this.count() * 2) // depends on count; this is the power of computed signals

  increment(): void {
    this.count.update((value) => value + 1);
  }

  decrement(): void {
    this.count.update((val) => val-1);
  }

  reset(): void {
    this.count.set(0)
  }

  protected isDisabled = false;
  onClick(): void {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);
}
