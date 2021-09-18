import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighLight]'
})
export class AnswerHighLightDirective {

  constructor(
    private elementRef: ElementRef,
    private controlName: NgControl
  ) {

  }

  ngOnInit(){
    this.controlName.control?.parent?.valueChanges.pipe(
      map(
        ({a, b, answer}) => { Math.abs((a+b - answer)/ (a+b)) }
      )
    ).subscribe(
      (value: any) => {
        if( value < 0.2 ){
          this.elementRef.nativeElement.classList.add('hint');
        }else{
          this.elementRef.nativeElement.classList.remove('hint');
        }
      }
    );
  }

}
