import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceAfterFirst'
})
export class SpaceAfterFirstPipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0)+". "+value.substr(1);
  }

}
