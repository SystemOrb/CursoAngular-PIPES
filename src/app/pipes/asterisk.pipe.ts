import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisk'
})
export class AsteriskPipe implements PipeTransform {

  transform(value:string, visible:boolean = true):string {

    if(visible)
    {
      return value;
    }else{
      return value.replace(/./g, '*');
    }
  }

}
