import { Component, signal, Signal } from '@angular/core';
// this is where we define behavior
@Component({
  selector: 'app-hello', // basically a tag
  imports: [],
  templateUrl: './hello.html', // reference to html file
  styleUrl: './hello.css',
})
export class Hello {
  protected title:string = 'Welcome to Modern Angular!'

  protected age = signal(0);

  increment(): void {
    this.age.update(value => value + 1)
  }

  protected isDisabled = false;
  onClick(): void {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }
}
