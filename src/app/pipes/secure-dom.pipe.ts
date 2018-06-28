import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {
  constructor(private clearDOM:DomSanitizer){

  }
  transform(value:string, url: string):SafeResourceUrl {
    return this.clearDOM.bypassSecurityTrustResourceUrl(url+value);
  }

}
