import { AbstractControl } from "@angular/forms";

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string){
    return (c: AbstractControl) => {
      const sum = c.value[target];
      const firstNum = c.value[sourceOne];
      const secondNum = c.value[sourceTwo];
      return firstNum + secondNum === parseInt(sum)? null : { addition: true };
    }
  }
}
