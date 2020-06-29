import { NgControl } from '@angular/forms';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(
    private ngControl: NgControl
  ) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.ngControl.control.patchValue(value.replace(/[^0-9]/g, ''));
  }

}
