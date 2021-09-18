import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  secondPerSolution = 0;
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [MathValidators.addition('answer','a','b')])

  constructor(
  ) { }

  get a(){
    return this.mathForm.get('a')?.value;
  }

  get b(){
    return this.mathForm.get('b')?.value;
  }

  get answer(){
    return this.mathForm.get('answer')?.value;
  }

  ngOnInit(): void {
    const startTime = new Date();
    let numberSolved = 0;
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(100),
      scan((acc) => {
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      }, {numberSolved: 0, startTime: new Date()})
    ).subscribe(({numberSolved, startTime}) => {
      numberSolved++;
      this.secondPerSolution =
      (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

      this.mathForm.patchValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: ''
      })
    })
  }

  randomNumber(){
    return Math.floor(Math.random() * 10);
  }

}
